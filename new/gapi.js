import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';

// The SDK automatically grabs process.env.GEMINI_API_KEY
const ai = new GoogleGenAI(); 

async function generateAIResponse() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Use a free-tier eligible Flash model
      contents: "Write a short poem about coding in JavaScript.",
    });

    console.log("AI Response:", response.text);
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
  }
}

generateAIResponse();
