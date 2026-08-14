'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MessageSquare, X, ArrowUpRight } from 'lucide-react';

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string; isUser: boolean}>>([]);
  const [inputValue, setInputValue] = useState('');
  const [typing, setTyping] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const lastMessageTime = useRef(0);

  const welcomeMessage = "¡Hola! �� 👋 Soy el asistente virtual. ¿En qué área deseas potenciar tu negocio hoy?";

  const options = [
    { id: 1, text: "Quiero lanzar Campañas de Ads (Meta/Google/TikTok)", icon: "���🚀" },
    { id: 2, text: "Necesito una Tienda Virtual o Página Web", icon: "���🛍��️" },
    { id: 3, text: "Busco mejorar mi SEO y Marketing Digital", icon: "���📈" },
    { id: 4, text: "Quiero automatizar procesos con IA / LegalTech", icon: "��⚡" },
    { id: 5, text: "Hablar directamente por WhatsApp", icon: "���💬" }
  ];

  const responses: Record<string, string> = {
    "Quiero lanzar Campañas de Ads (Meta/Google/TikTok)": "¡Genial! Las campañas de Ads bien optimizadas pueden aumentar tus ventas significativamente. ¿Tienes algún presupuesto en mente para comenzar?",
    "Necesito una Tienda Virtual o Página Web": "Perfecto! Desarrollamos sitios web y tiendas e-commerce premium, optimizados para velocidad y conversión. ¿Ya tienes un dominio o necesitas ayuda con eso?",
    "Busco mejorar mi SEO y Marketing Digital": "Excelente elección. El SEO y el marketing digital integrado son clave para el crecimiento sostenible. ¿En qué plataformas actualmente estás activo?",
    "Quiero automatizar procesos con IA / LegalTech": "Increíble! La automatización puede ahorrarte horas de trabajo semanal. ¿Qué tipo de procesos estás buscando automatizar?",
    "Hablar directamente por WhatsApp": "Perfecto! Te redirigiré a WhatsApp para que puedas hablar directamente con nuestro equipo."
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Rate limit: 1 message per second
    const now = Date.now();
    if (now - lastMessageTime.current < 1000) {
      return;
    }
    lastMessageTime.current = now;

    // Max length: 500 characters
    if (text.length > 500) {
      return;
    }

    setMessages(prev => [...prev, { text, isUser: true }]);
    setInputValue('');
    setSelectedOption(null);

    // Simulate typing delay
    setTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const botResponse = responses[text] || "Lo siento, no entiendo esa opción. Por favor, selecciona una de las opciones disponibles.";
    setTyping(false);
    setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
  };

  const handleOptionSelect = (option: {id: number; text: string; icon: string}) => {
    handleSendMessage(option.text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent("Hola, vi tu página web y me gustaría cotizar sus servicios de software, marketing/ads y desarrollo.");
    window.open(`https://wa.me/5582485031?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 flex items-center justify-center rounded-full bg-primary-500/90 backdrop-blur-sm
                   border border-white/20 hover:bg-primary-500 transition-all duration-300
                   ${isOpen ? 'animate-pulse' : ''}`}
        aria-label="Abrir chat"
      >
        {!isOpen ? (
          <MessageCircle className="h-6 w-6 text-white" />
        ) : (
          <X className="h-5 w-5 text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-16 right-6 z-40 w-80 max-w-xs
                   ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col bg-background/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
            <h3 className="text-lg font-semibold text-primary-400">Asistente Virtual</h3>
            <motion.button
              onClick={() => setIsOpen(false)}
              className="text-muted-400 hover:text-white transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {/* Welcome Message */}
            {!isOpen && messages.length === 0 && (
              <div className="flex justify-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="max-w-xs rounded-lg bg-primary-500/20 px-4 py-2 text-sm text-muted-400"
                >
                  {welcomeMessage}
                </motion.div>
              </div>
            )}

            {/* Chat Messages */}
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} space-x-3`}>
                  <div className={`max-w-xs rounded-lg px-3 py-2
                                 ${msg.isUser ? 'bg-primary-500/30 text-white' : 'bg-muted-200/50 text-muted-400'}`}>
                    {msg.text}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {typing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start"
              >
                <div className="flex space-x-1">
                  {[1, 2, 3].map((dot) => (
                    <motion.span
                      key={dot}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.2, 0.5, 0.8][dot-1] }}
                      transition={{ duration: 0.8, delay: (dot-1) * 0.2, repeat: Infinity }}
                      className="h-2 w-2 rounded-full bg-primary-400"
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Options */}
            {!typing && !selectedOption && messages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-2 pt-2"
              >
                {options.map((option) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: option.id * 0.05 }}
                    onClick={() => handleOptionSelect(option)}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm hover:border-primary-500/50 hover:bg-primary-500/20 transition-all"
                  >
                    <span>{option.icon}</span>
                    <span>{option.text}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="flex px-4 py-3 border-t border-white/5">
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe un mensaje..."
              className="flex-1 rounded border-none px-3 py-2 focus:outline-none bg-muted-200/50 text-muted-400 placeholder-muted-400"
              disabled={typing || !isOpen}
            />
            {!typing && !selectedOption && (
              <motion.button
                key="send-button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || typing}
                className="ml-3 h-10 w-10 flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary-600 transition-all"
                aria-label="Enviar mensaje"
              >
                <ArrowUpRight className="h-4 w-4 text-white" />
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}