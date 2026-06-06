import React from 'react';

// Importación de todos los componentes de la landing page
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import Integrations from './components/Integrations';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomLanding from './components/CustomLanding';

function App() {
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
