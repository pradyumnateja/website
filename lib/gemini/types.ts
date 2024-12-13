interface ChatPart {
  text: string;
}

interface ChatMessage {
  role: "model" | "user";
  parts: ChatPart[];
}

export interface ChatHistory {
  role: "user" | "model";
  parts: { text: string }[];
}