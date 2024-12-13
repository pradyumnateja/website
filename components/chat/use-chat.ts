"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ChatMessage, ChatState } from "./types";
import { personalInfo } from "@/data/personal-info";

const initialMessages: ChatMessage[] = [
  {
    content: `Hello! I'm ready to help you with information about ${personalInfo.name}'s portfolio.`,
    sender: "bot",
  },
];

export function useChat() {
  const [state, setState] = useState<ChatState>({
    messages: initialMessages,
    isLoading: false,
    input: "",
  });
  const { toast } = useToast();

  const setInput = (input: string) => {
    setState((prev) => ({ ...prev, input }));
  };

  const sendMessage = async () => {
    if (!state.input.trim() || state.isLoading) return;

    const userMessage: ChatMessage = { 
      content: state.input, 
      sender: "user" 
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      input: "",
      isLoading: true,
    }));

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: state.input }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { content: data.message, sender: "bot" },
        ],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get response",
        variant: "destructive",
      });
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    input: state.input,
    setInput,
    sendMessage,
  };
}