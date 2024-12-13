import { GoogleGenerativeAI } from '@google/generative-ai';

export const MODEL_CONFIG = {
  name: "gemini-1.5-flash",
  temperature: 0.7,
  maxOutputTokens: 2048,
} as const;

export const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');