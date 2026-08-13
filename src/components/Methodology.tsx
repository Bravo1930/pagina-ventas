'use client';

import { motion } from 'framer-motion';
import { ArrowRightFromLine, Zap, Rocket, TrendingUp } from 'lucide-react';
import HeroBackground from './HeroBackground';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico & Estrategia',
    description: 'Analizamos tu negocio, competencia y público objetivo para definir una estrategia integral de crecimiento.',
    icon: ArrowRightFromLine,
  },
  {
    number: '02',
    title: 'Desarrollo & Configuración de Campañas',
    description: 'Desarrollamos la solución tecnológica y configuramos las campañas de marketing automation.',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Lanzamiento & Automatización',
    description: 'Ponemos en marcha el producto y activamos los flujos de automatización para máxima eficiencia.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'Optimización Continua & Escala',
    description: 'Monitoreamos resultados, optimizamos y escalamos lo que funciona para crecimiento sostenible.',
    icon: TrendingUp,
  },
];

export default function Methodology() {
  return (
    <motion.section
      id="metodologia"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 bg-background"
    >
      <HeroBackground includeReds={true} />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary-400">
          Nuestra Metodología
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols=4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary-500 bg-primary-500/10">
                  <step.icon className="h-5 w-5 text-primary-400" />
                </div>
                <div className="text-right text-sm text-muted-400">{step.number}</div>
                <h3 className="mb-2 text-xl font-semibold text-primary-400">{step.title}</h3>
                <p className="text-sm text-muted-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}