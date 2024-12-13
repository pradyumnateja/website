import { genAI, MODEL_CONFIG } from "./config";
import { SYSTEM_PROMPT } from "./prompts";
import { ChatHistory } from "./types";

// Add a global chat history array
let chatHistory: ChatHistory[] = [
  {
    role: "model",
    parts: [{ text: "Hello! I'm your AI assistant. How can I help you today?" }],
  },
  {
    role: "user",
    parts: [{ text: SYSTEM_PROMPT }],
  }
];

export async function generateChatResponse(message: string) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: MODEL_CONFIG.name,
      generationConfig: {
        temperature: MODEL_CONFIG.temperature,
        maxOutputTokens: MODEL_CONFIG.maxOutputTokens,
      },
    });

    const chat = model.startChat({
      history: chatHistory,
    });

    // Send the user's message and update chat history
    const result = await chat.sendMessage(message);
    const response = await result.response;
    
    // Add null check and ensure response.text() exists
    const responseText = response?.text?.() || "Sorry, I couldn't generate a response";
    
    // Update chat history with the new interaction
    chatHistory.push(
      { role: "user", parts: [{ text: message }] },
      { role: "model", parts: [{ text: responseText }] }
    );

    return responseText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error instanceof Error) {
      throw new Error(`Chat error: ${error.message}`);
    }
    throw new Error("Failed to generate response");
  }
}

// Add a function to reset chat history if needed
export function resetChatHistory() {
  chatHistory = [
    {
      role: "model",
      parts: [{ text: "Hello! I'm your AI assistant. How can I help you today?" }],
    },
    {
      role: "user",
      parts: [{ text: SYSTEM_PROMPT }],
    }
  ];
}