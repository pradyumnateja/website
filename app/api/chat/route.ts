import { NextResponse } from "next/server";
import { generateContent } from "@/lib/gemini/api";
import { validateChatRequest } from "@/lib/validations/chat";
import { SYSTEM_PROMPT } from "@/lib/gemini/prompts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = validateChatRequest(body);

    // Generate the chat response
    const response = await generateContent(message);
    
    // Return just the message text
    return new NextResponse(JSON.stringify({ 
      message: response  // response is already the extracted text
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Failed to process chat request' 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}