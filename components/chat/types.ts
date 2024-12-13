export interface ChatMessage {
  content: string;
  sender: "user" | "bot";
  isLoading?: boolean;
}

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  input: string;
}