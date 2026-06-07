import React, { useEffect } from 'react';
import Lenis from 'lenis';

// Importación de todos los componentes de la landing page
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import Integrations from './components/Integrations';
import HardwareIntegration from './components/HardwareIntegration';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomLanding from './components/CustomLanding';

function App() {
  // Inicialización de Smooth Scroll Premium (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });
    
    // Exponer globalmente para los enlaces de navegación ancla
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="bg-surface-950 text-surface-200 antialiased font-sans">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Demo />
        <CustomLanding />
        <Solution />
        <Pricing />
        <Integrations />
        <HardwareIntegration />
        <Testimonials />
        <FAQ />
        <SocialProof />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
