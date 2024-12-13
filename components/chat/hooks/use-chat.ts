"use client";

import { useState, useCallback } from "react";
import { ChatMessage, ChatState } from "../types";
import { handleChatError } from "../utils/error-handler";
import { personalInfo } from "@/data/personal-info";
// import { useToast } from "@/components/ui/use-toast";

const initialMessages: ChatMessage[] = [
  {
    content: `Hello! I'm ready to help you with information about ${personalInfo.name}'s portfolio.`,
    sender: "bot",
  },
];

export function useChat() {
  // const { toast } = useToast();
  const [state, setState] = useState<ChatState>({
    messages: initialMessages,
    isLoading: false,
    input: "",
  });

  const sendMessage = useCallback(async () => {
    if (!state.input.trim() || state.isLoading) return;

    const userMessage: ChatMessage = { 
      content: state.input, 
      sender: "user" 
    };

    setState(prev => ({
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

      setState(prev => ({
        ...prev,
        messages: [
          ...prev.messages,
          { content: data.message, sender: "bot" },
        ],
        isLoading: false,
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to get response";
      
      setState(prev => ({
        ...prev,
        messages: [
          ...prev.messages,
          { 
            content: `Error: ${errorMessage}`, 
            sender: "bot" 
          },
        ],
        isLoading: false,
      }));

      // toast({
      //   title: "Error",
      //   description: errorMessage,
      //   variant: "destructive",
      // });
    }
  }, [state.input, state.isLoading]);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    input: state.input,
    setInput: useCallback((input: string) => {
      setState(prev => ({ ...prev, input }));
    }, []),
    sendMessage,
  };
}