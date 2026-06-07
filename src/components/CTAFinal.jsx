import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const CTAFinal = () => {
  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-surface-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px]" />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            🎁 Demo gratuita — Cupos limitados este mes
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            ¿Listo para dejar de
            <span className="block text-gradient mt-2">perder dinero?</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-surface-300 max-w-2xl mx-auto">
            Únase a los gimnasios que ya modernizaron su operación.
            Comience hoy con una demostración sin compromiso.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/50671850604"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-green-600 hover:shadow-glow-green transition-all btn-shimmer"
            >
              <FaWhatsapp className="h-6 w-6" />
              Agendar Demo Gratis
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#demo"
              onClick={(e) => handleNavClick(e, '#demo')}
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Ver Demo en Video
              <ArrowRightIcon className="h-5 w-5" />
            </motion.a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-surface-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sin compromiso
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Configuración en 24 horas
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Soporte 24/7
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinal;
