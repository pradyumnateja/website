import { z } from "zod";

const chatRequestSchema = z.object({
  message: z.string().min(1, "Message is required"),
});

export function validateChatRequest(data: unknown) {
  return chatRequestSchema.parse(data);
}