'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER || '';
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=Hola,%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20cotizar%20sus%20servicios%20de%20software,%20marketing/ads%20y%20desarrollo.`
    : '#';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-primary-500/90 backdrop-blur-sm border border-white/20 hover:bg-primary-500 transition-all duration-300"
      aria-label="Abrir WhatsApp"
    >
      <motion.div
        whileHover={{ rotate: 10 }}
        whileTap={{ rotate: 0 }}
        className="h-6 w-6 text-white"
      >
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
      </motion.div>
    </motion.a>
  );
}