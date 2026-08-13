'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative pt-12 pb-8 bg-background/90 backdrop-blur-sm border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* About */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-xl font-bold text-primary-400">
              Modern Tech Agency
            </h3>
            <p className="text-muted-400 space-y-2">
              Desarrollo de Software, Automatización, LegalTech/AI, Web/E-commerce y Marketing Digital
            </p>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 text-xl font-bold text-primary-400">
              Servicios
            </h3>
            <div className="space-y-2">
              <Link href="#servicios" className="hover:text-primary-400 transition-colors">
                Todos los Servicios
              </Link>
              <Link href="#servicios" className="hover:text-primary-400 transition-colors">
                Publicidad Digital & Ads
              </Link>
              <Link href="#servicios" className="hover:text-primary-400 transition-colors">
                Páginas Web & Tiendas Virtuales
              </Link>
              <Link href="#servicios" className="hover:text-primary-400 transition-colors">
                SEO & Marketing Digital
              </Link>
              <Link href="#servicios" className="hover:text-primary-400 transition-colors">
                Automatización & Workflows
              </Link>
              <Link href="#servicios" className="hover:text-primary-400 transition-colors">
                Desarrollo de Software & Agentes AI
              </Link>
              <Link href="#servicios" className="hover:text-primary-400 transition-colors">
                LegalTech & Soluciones Especializadas
              </Link>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="mb-4 text-xl font-bold text-primary-400">
              Contacto
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-muted-400">info@moderntechagency.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-muted-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://wa.me/5582485031?text=Hola,%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20cotizar%20sus%20servicios%20de%20software,%20marketing/ads%20y%20desarrollo."
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                  <MessageCircle className="h-4 w-4 text-primary-400" />
                  <span className="text-muted-400">WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="mb-4 text-xl font-bold text-primary-400">
              Síguenos
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="#" className="hover:text-primary-400 transition-colors">
                <Github className="h-5 w-5 text-primary-400" />
              </Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5 text-primary-400" />
              </Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5 text-primary-400" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-muted-400">
          © {new Date().getFullYear()} Modern Tech Agency. Todos los derechos reservados.
        </div>
      </div>
    </motion.footer>
  );
}