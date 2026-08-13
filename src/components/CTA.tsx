'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <motion.section
      id="contacto"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative pt-24 pb-28 lg:pt-32 lg:pb-36 bg-primary-500/5 section-separator"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-4xl font-bold text-primary-500"
          >
            ¿Listo para transformar tu negocio?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 text-xl text-muted-400 max-w-xl mx-auto"
          >
            Hagamos crecer tu negocio con software a medida, automatizaciones inteligentes y estrategias de marketing que generan resultados reales.
          </motion.p>
          <div className="flex flex-col gap-8 md:flex-row md:justify-center">
            <Link
              href="#servicios"
              className="motion-button inline-flex items-center px-10 py-5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-xl hero-glow hover:shadow-2xl transition-shadow duration-300"
            >
              Ver Servicios Detallados
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="https://wa.me/5582485031?text=Hola,%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20cotizar%20sus%20servicios%20de%20software,%20marketing/ads%20y%20desarrollo."
              className="motion-button inline-flex items-center px-10 py-5 border border-primary-500 hover:border-primary-600 text-primary-500 hover:text-white rounded-lg shadow-xl hero-glow hover:shadow-2xl transition-shadow duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Conversar por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}