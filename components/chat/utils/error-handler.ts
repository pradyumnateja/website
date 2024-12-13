import { toast } from "@/hooks/use-toast";

export function handleChatError(error: unknown) {
  console.error("Chat error:", error);
  
  const errorMessage = error instanceof Error 
    ? error.message 
    : "Failed to get response";

  toast({
    title: "Error",
    description: errorMessage,
    variant: "destructive",
  });

  return errorMessage;
}