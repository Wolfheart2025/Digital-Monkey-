import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { SYSTEM_INSTRUCTION } from '../constants';

const GeminiAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hola. Soy Jorge de Digital Monkey (versión IA). He analizado tu reporte. ¿Tienes preguntas sobre la estrategia o necesitas ayuda redactando algún email?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-2.5-flash';
      
      const chatHistory = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: model,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: chatHistory
      });

      const result = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, hubo un error al conectar con el servidor de análisis. Por favor intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!process.env.API_KEY) {
    return (
      <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 text-center">
        <Sparkles className="w-12 h-12 text-zinc-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Consultor IA No Disponible</h3>
        <p className="text-zinc-400">Configura la API Key para interactuar con el reporte.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[500px] bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-black p-4 border-b border-zinc-800 flex items-center gap-3">
        <div className="bg-white/10 p-2 rounded-full">
            <Bot className="w-6 h-6 text-green-400" />
        </div>
        <div>
          <h3 className="font-bold text-white">Digital Monkey AI Advisor</h3>
          <p className="text-xs text-zinc-400">Basado en tu auditoría Body4Combat</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 text-sm ${
                msg.role === 'user'
                  ? 'bg-green-600 text-white rounded-br-none'
                  : 'bg-zinc-800 text-zinc-200 rounded-bl-none border border-zinc-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-1 opacity-50 text-xs">
                 {msg.role === 'user' ? <User size={12}/> : <Bot size={12}/>}
                 <span>{msg.role === 'user' ? 'Tú' : 'Jorge G.'}</span>
              </div>
              <div className="whitespace-pre-wrap">{msg.text}</div>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-lg p-3 rounded-bl-none flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-green-400" />
                    <span className="text-xs text-zinc-400">Analizando estrategia...</span>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-zinc-900 border-t border-zinc-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ej: Escribe un asunto para el email de bienvenida..."
            className="flex-1 bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiAdvisor;