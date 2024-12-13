"use client"
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { z } from 'zod';

export const runtime = 'edge';

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = contactFormSchema.parse(body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: 'Contact Form <your-email@example.com>',
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send an auto-reply to the sender
    await transporter.sendMail({
      from: 'Pradyumna Teja <your-email@example.com>',
      to: email,
      subject: 'Thank you for your message',
      text: `
Dear ${firstName},

Thank you for reaching out! I have received your message and will get back to you as soon as possible.

Best regards,
Pradyumna Teja
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
