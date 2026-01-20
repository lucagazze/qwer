import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Sparkles, Minimize2, Maximize2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '¡Hola! Soy Javier AI, el asistente virtual. ¿En qué puedo ayudarte hoy?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), role: 'user', text: inputValue.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const modelMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: modelMessageId, role: 'model', text: '', isStreaming: true }]);

    try {
      const stream = await sendMessageToGemini(userMessage.text);
      let fullText = '';
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(msg => msg.id === modelMessageId ? { ...msg, text: fullText } : msg));
      }
      setMessages(prev => prev.map(msg => msg.id === modelMessageId ? { ...msg, isStreaming: false } : msg));
    } catch (error) {
      setMessages(prev => prev.map(msg => msg.id === modelMessageId ? { ...msg, text: 'Error al procesar.', isStreaming: false } : msg));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="chatbot-trigger" aria-label="Abrir asistente virtual">
        <MessageCircle size={32} aria-hidden="true" />
      </button>
    );
  }

  return (
    <div className="chat-window" style={isMinimized ? { height: '60px' } : {}} role="dialog" aria-label="Chat con asistente virtual">
      <div className="chat-header" onClick={() => setIsMinimized(!isMinimized)} role="button" aria-expanded={!isMinimized} tabIndex={0}>
        <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
          <Sparkles size={18} aria-hidden="true" />
          <span style={{fontWeight:600}}>Javier AI</span>
        </div>
        <div style={{display:'flex', gap:'0.5rem'}} onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setIsMinimized(!isMinimized)} aria-label={isMinimized ? "Maximizar chat" : "Minimizar chat"}>
            {isMinimized ? <Maximize2 size={16}/> : <Minimize2 size={16}/>}
          </button>
          <button onClick={() => setIsOpen(false)} aria-label="Cerrar chat"><X size={16}/></button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="chat-body" role="log" aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id} className={`msg ${msg.role === 'user' ? 'msg-user' : 'msg-bot'}`}>
                {msg.text}
                {msg.isStreaming && <span className="animate-spin" style={{display:'inline-block', marginLeft:'5px'}}>...</span>}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe aquí..."
              className="input-field"
              disabled={isLoading}
              aria-label="Escribe tu mensaje"
            />
            <button onClick={handleSend} disabled={isLoading || !inputValue.trim()} style={{color:'var(--primary-dark)'}} aria-label="Enviar mensaje">
              <Send size={20} aria-hidden="true" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AIChatBot;