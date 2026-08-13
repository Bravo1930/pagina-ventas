import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Tech Agency',
  description: 'Desarrollo de Software, Automatización, LegalTech/AI, Web/E-commerce y Marketing Digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.className} ${spaceGrotesk.className} dark`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}