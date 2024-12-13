import { MODEL_CONFIG } from "./config";
import { SYSTEM_PROMPT } from "./prompts";

declare const process: {
  env: {
    GEMINI_API_KEY?: string;
  };
};

const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export async function generateContent(message: string) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${process.env.GEMINI_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        // First message is the system prompt
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }]
        },
        // Second message is the user's input
        {
          role: "model",
          parts: [{ text: message }]
        }
      ]
    })
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to generate content');
  }
  
  const data = await response.json();
  return data.candidates[0]?.content?.parts[0]?.text || 'No response generated';
}



// import { MODEL_CONFIG } from "./config";

// declare const process: {
//   env: {
//     GEMINI_API_KEY?: string;
//   };
// };

// const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// export async function generateContent(message: string) {
//   if (!process.env.GEMINI_API_KEY) {
//     throw new Error("GEMINI_API_KEY is not configured");
//   }

//   const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${process.env.GEMINI_API_KEY}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       contents: [{ parts: [{ text: message }] }]
//     })
//   });
  
//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.error?.message || 'Failed to generate content');
//   }
  
//   const data = await response.json();
//   return data.candidates[0]?.content?.parts[0]?.text || 'No response generated';
// }