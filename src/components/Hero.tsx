'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <>
      <HeroBackground />
      <motion.section
        id="hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 z-10"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 text-6xl font-bold text-primary-400 hero-glow shadow-xl"
            >
              Impulsamos tu Negocio: Software, Automatización & Marketing Digital de Alto Rendimiento
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10 text-sm text-muted-400/50 max-w-xl mx-auto"
            >
              Desarrollamos soluciones integrales: páginas web y e-commerce premium, campañas de Ads altamente convertibles, posicionamiento orgánico SEO, automatizaciones avanzadas con n8n/Make y soluciones LegalTech impulsadas por IA.
            </motion.p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="#servicios"
                className="motion-button inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-xl hero-glow hover:shadow-2xl transition-shadow duration-300"
              >
                Explorar Servicios
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/5582485031?text=Hola,%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20cotizar%20sus%20servicios%20de%20software,%20marketing/ads%20y%20desarrollo."
                className="motion-button inline-flex items-center px-8 py-4 border border-primary-500 hover:border-primary-600 text-primary-400 hover:text-white rounded-lg shadow-xl hero-glow hover:shadow-2xl transition-shadow duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" alt="WhatsApp" className="mr-2 h-4 w-4" />
                Contactar por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}