'use client';

import { motion } from 'framer-motion';
import { Megaphone, ShoppingCart, Search, Zap, Activity, MessageSquare, Code2, Terminal } from 'lucide-react';
import HeroBackground from './HeroBackground';

const services = [
  {
    title: 'Publicidad Digital & Ads',
    icon: Megaphone,
    description: 'Diseño, ejecución y optimización de campañas de alta conversión orientadas a máximo ROAS en Facebook, Instagram, TikTok y Google Search/Display/YouTube.',
    bg: 'primary-500/10',
    hover: 'hover:bg-primary-500/20',
  },
  {
    title: 'Páginas Web & Tiendas Virtuales',
    icon: ShoppingCart,
    description: 'Desarrollo de sitios web corporativos premium y tiendas e-commerce de alto rendimiento, optimizadas para velocidad y ventas.',
    bg: 'primary-500/10',
    hover: 'hover:bg-primary-500/20',
  },
  {
    title: 'SEO & Marketing Digital Integrado',
    icon: Search,
    description: 'Posicionamiento orgánico en motores de búsqueda (SEO técnico, local y de contenidos) y estrategia global de crecimiento digital.',
    bg: 'primary-500/10',
    hover: 'hover:bg-primary-500/20',
  },
  {
    title: 'Automatización & Workflows',
    icon: Zap,
    description: 'Integración con n8n/Make, webhooks, CRM, bases de datos y bots conversacionales.',
    bg: 'primary-500/10',
    hover: 'hover:bg-primary-500/20',
  },
  {
    title: 'Desarrollo de Software & Agentes AI',
    icon: Activity,  // Changed from Brain to Activity
    description: 'Sistemas web a medida, integraciones de IA, asistentes locales y modelos inteligentes.',
    bg: 'primary-500/10',
    hover: 'hover:bg-primary-500/20',
  },
  {
    title: 'LegalTech & Soluciones Especializadas',
    icon: MessageSquare,
    description: 'Herramientas para la gestión jurídica, análisis de documentos y generación automatizada de contratos.',
    bg: 'primary-500/10',
    hover: 'hover:bg-primary-500/20',
  },
];

const techStackBadges = [
  { name: 'Next.js', icon: Code2 },
  { name: 'React', icon: Code2 },
  { name: 'Tailwind', icon: Terminal },
  { name: 'Framer Motion', icon: Megaphone },
];

export default function Services() {
  return (
    <motion.section
      id="servicios"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 bg-background section-separator"
    >
      <HeroBackground includeReds={true} />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary-400">
          Nuestros Servicios
        </h2>
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {techStackBadges.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="flex items-center gap-2 px-4 py-2 rounded border border-primary-500/30 bg-primary-500/10 text-primary-400 text-base">
                <tech.icon className="h-5 w-5" />
                {tech.name}
              </span>
            </motion.span>
          ))}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols=3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative group">
                <div className="relative h-[200px] w-full rounded-xl overflow-hidden border border-white/10 bg-background/50 backdrop-blur-sm shadow-primary-xl hover:shadow-primary-2x transition-shadow duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-t from-${service.bg} to-transparent pointer-events-none`}></div>
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <service.icon className="h-9 w-9 text-primary-400 mb-4" />
                    <h3 className="mb-3 text-2xl font-semibold text-primary-400">{service.title}</h3>
                    <p className="text-base text-muted-400">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}