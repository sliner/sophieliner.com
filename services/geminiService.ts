
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

/**
 * Service for generating creative content if needed in the future.
 * Currently unused per minimalist design update.
 */
export const generateCreativeText = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating text:", error);
    return null;
  }
};
