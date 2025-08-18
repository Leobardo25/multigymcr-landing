import React from 'react';

// Importación de todos los componentes de la landing page
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';       // <-- NUEVO
import Pricing from './components/Pricing';
import Integrations from './components/Integrations'; // <-- NUEVO
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';                 // <-- NUEVO
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Features />      
        <Pricing />
        <Integrations />  
        <Demo />
        <Testimonials />
        <FAQ />         
      </main>
      <Footer />
    </div>
  );
}

export default App;
