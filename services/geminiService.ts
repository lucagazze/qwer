import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chatSession: Chat | null = null;

export const sendMessageToGemini = async function* (message: string) {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: 'Eres Javier AI, el asistente virtual de Clínica Javier. Tu misión es responder preguntas sobre servicios dentales (Odontología General, Ortodoncia, Cosmética, Odontopediatría, Cirugía Oral, Urgencias) y ayudar a agendar citas dirigiendo a los usuarios a la sección de contacto o WhatsApp. Sé amable, conciso y profesional. No des diagnósticos médicos.',
      },
    });
  }

  const response = await chatSession.sendMessageStream({ message });

  for await (const chunk of response) {
    const c = chunk as GenerateContentResponse;
    if (c.text) {
      yield c.text;
    }
  }
};