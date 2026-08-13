import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Methodology from '@/components/Methodology';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ChatBotWidget from '@/components/ChatBotWidget';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <TechStack />
        <Methodology />
        <CTA />
        <Footer />
      </main>
      <ChatBotWidget />
      <WhatsAppButton />
    </>
  );
}