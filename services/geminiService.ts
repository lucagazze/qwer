import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual "Vitalis AI" de la Clínica Vitalis.
Tu objetivo es ayudar a los pacientes con información sobre la clínica, sus servicios, y responder preguntas generales de salud.

Reglas clave:
1. Sé amable, profesional y empático.
2. Tus respuestas deben ser concisas y claras.
3. Si te preguntan por diagnósticos médicos específicos, DEBES incluir un descargo de responsabilidad diciendo que no eres un médico y que deben agendar una cita con un especialista.
4. Los servicios de la clínica incluyen: Medicina General, Cardiología, Pediatría, Dermatología y Nutrición.
5. Puedes ayudar a explicar cómo agendar una cita (usando el formulario en la web).
6. Habla siempre en español.
`;

const getChatSession = () => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
  const chat = getChatSession();
  
  try {
    const streamResult = await chat.sendMessageStream({ message });
    
    // Create an async generator to yield text chunks
    async function* textGenerator() {
      for await (const chunk of streamResult) {
        // According to guidelines, access .text directly
        const text = chunk.text;
        if (text) {
          yield text;
        }
      }
    }

    return textGenerator();
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};