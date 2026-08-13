'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-50 flex h-16 items-center justify-between px-6 lg:px-12 bg-background/80 backdrop-blur-sm border-b border-white/10 shadow-primary"
    >
      <div className="flex flex-1 items-center justify-start">
        <Link href="/" className="text-xl font-bold text-primary-400">
          Modern Tech Agency
        </Link>
      </div>
      <div className="hidden lg:flex lg:flex-1 items-center justify-center space-x-8">
        <Link href="#servicios" className="hover:text-primary-400 transition-colors">
          Servicios
        </Link>
        <Link href="#metodologia" className="hover:text-primary-400 transition-colors">
          Estrategia
        </Link>
        <Link href="#metodologia" className="hover:text-primary-400 transition-colors">
          Metodología
        </Link>
        <Link href="#contacto" className="hover:text-primary-400 transition-colors">
          Contacto
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <span className="flex items-center gap-2 text-base font-medium text-green-400">
          <motion.span
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.7 }}
            className="animate-pulse"
          >
            ●
          </motion.span> Disponible para nuevos proyectos
        </span>
      </div>
    </motion.nav>
  );
}