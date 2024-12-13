"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal-info";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    link: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    link: `tel:${personalInfo.phone.replace(/\D/g, '')}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    link: null,
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-4"
        >
          <div className="bg-primary/10 p-3 rounded-full">
            <item.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{item.label}</p>
            {item.link ? (
              <a
                href={item.link}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-foreground">{item.value}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}