"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface ChatMessageProps {
  content: string;
  sender: "user" | "bot";
  isLoading?: boolean;
}

export function ChatMessage({ content, sender, isLoading }: ChatMessageProps) {
  const messageContent = typeof content === 'string' ? content : 'Invalid message format';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          sender === "user"
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        }`}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Thinking...</span>
          </div>
        ) : (
          messageContent
        )}
      </div>
    </motion.div>
  );
}