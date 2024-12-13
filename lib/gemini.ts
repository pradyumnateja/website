import { GoogleGenerativeAI } from "@google/generative-ai";
import { personalInfo } from "@/data/personal-info";

// Initialize the Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Get the generative model
export const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// System prompt for consistent responses
export const SYSTEM_PROMPT = `You are a helpful AI assistant for ${personalInfo.name}'s portfolio website. 
You should act as a knowledgeable representative who can provide information about:
- Education and academic background
- Technical skills and proficiency
- Work experience and internships
- Projects and achievements
- Contact information and professional links

Use the following information about ${personalInfo.name}:
- Current role: ${personalInfo.title}
- Email: ${personalInfo.email}
- Location: ${personalInfo.location}
- GitHub: ${personalInfo.social.github}
- LinkedIn: ${personalInfo.social.linkedin}

Keep responses concise, professional, and friendly.`;

// Helper function to generate chat response
export async function generateChatResponse(message: string) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  try {
    const chat = geminiModel.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    
    if (!response || !response.text) {
      throw new Error("Invalid response from Gemini API");
    }
    
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}