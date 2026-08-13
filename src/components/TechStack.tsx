'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Server,
  Database,
  Link,
  GitBranch,
  Megaphone,
  LineChart,
  Search,
  ShoppingCart
} from 'lucide-react';

const techStack = {
  development: [
    { name: 'Next.js', icon: Code2 },
    { name: 'React', icon: Code2 },
    { name: 'Tailwind CSS', icon: Code2 },
    { name: 'Python', icon: Terminal },
    { name: 'Docker', icon: Server },
    { name: 'PostgreSQL', icon: Database },
    { name: 'n8n', icon: Link },
    { name: 'Ollama / OpenAI API', icon: GitBranch },
  ],
  marketing: [
    { name: 'Google Ads', icon: Megaphone },
    { name: 'Meta Ads Manager', icon: Megaphone },
    { name: 'TikTok Ads', icon: Megaphone },
    { name: 'Google Analytics 4', icon: LineChart },
    { name: 'Tag Manager', icon: Code2 },
    { name: 'SEO Tools', icon: Search },
    { name: 'Shopify/WooCommerce', icon: ShoppingCart },
  ],
};

export default function TechStack() {
  return (
    <motion.section
      id="stack"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary-400">
          Tecnologías y Herramientas
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="mb-4 text-2xl font-semibold text-primary-400">
              Desarrollo & Tech
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.development.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm">
                    <tech.icon className="h-4 w-4" />
                    {tech.name}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="mb-4 text-2xl font-semibold text-primary-400">
              Growth & Marketing
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.marketing.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm">
                    <tech.icon className="h-4 w-4" />
                    {tech.name}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}