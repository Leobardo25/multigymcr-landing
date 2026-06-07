import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center pt-24 md:pt-28 pb-20 overflow-hidden"
    >
      {/* Background layers base */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-surface-950" />
        <div className="absolute inset-0 bg-mesh opacity-50" />
      </div>

      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" 
        style={{ backgroundImage: 'url(/hero-gym.png)' }}
      />
      
      {/* Gradient Overlay para asegurar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950/40 via-surface-950/60 to-surface-950" />
      
      {/* Capa de puntos por encima del canvas */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />


      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] sm:leading-[1.05] tracking-tight px-2"
          >
            Deje de Perder
            <br />
            <span className="text-gradient">Tiempo y Dinero.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-surface-400 max-w-xl mx-auto leading-relaxed px-4"
          >
            El <strong>software de élite</strong> para gimnasios que automatiza accesos,
            suscripciones y rutinas desde una sola plataforma, a un <strong>precio sin competencia</strong> en el mercado. 💪🏽
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto p-[1px] rounded-xl bg-gradient-to-r from-brand-500/60 via-accent-500/60 to-brand-500/60 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            >
              <a
                onClick={(e) => handleNavClick(e, "#demo")}
                href="#demo"
                className="w-full sm:max-w-none flex items-center justify-center gap-2 bg-surface-950/90 backdrop-blur-sm text-white font-semibold text-base px-6 py-3 rounded-xl hover:bg-surface-900/80 transition-all"
              >
                Ver Funcionalidades
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRightIcon className="ml-1 h-4 w-4 sm:h-5 sm:w-5 text-accent-400" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* Se eliminaron los Floating Metrics a favor de la Red Interactiva 3D */}


        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-[4.5rem] sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center cursor-pointer"
        onClick={(e) => handleNavClick(e, '#problema')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-surface-900/80 p-2 rounded-full border border-surface-800/50 shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:bg-surface-800 transition-colors backdrop-blur-sm"
        >
          <ChevronDownIcon className="w-5 h-5 text-brand-400" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;

/*
 * ────────────────────────────────────────────────────────
 * MOCKUP DEVICES (OCULTO — NO ELIMINAR)
 * Código de la alternancia mobile/desktop mockup.
 * Reactivar cuando se tengan mockups de mayor calidad.
 * ────────────────────────────────────────────────────────
 *
 * import { AnimatePresence } from "framer-motion";
 *
 * // Dentro del componente:
 * const [currentDevice, setCurrentDevice] = useState(0);
 * const devices = ['mobile', 'desktop'];
 *
 * useEffect(() => {
 *   const interval = setInterval(() => {
 *     setCurrentDevice(prev => (prev + 1) % devices.length);
 *   }, 4000);
 *   return () => clearInterval(interval);
 * }, []);
 *
 * // JSX del mockup:
 * <motion.div className="relative w-full h-full flex items-center justify-center min-h-[350px]">
 *   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
 *     <div className="w-[80%] h-[80%] bg-gradient-to-tr from-brand-500/20 to-accent-500/10 rounded-full blur-[80px] animate-glow-pulse" />
 *   </div>
 *   <AnimatePresence mode="wait">
 *     {currentDevice === 0 && (
 *       <motion.div key="mobile" ...>
 *         <img src="/mockups/panel-admin-mobile.jpg" alt="Panel móvil" />
 *       </motion.div>
 *     )}
 *     {currentDevice === 1 && (
 *       <motion.div key="desktop" ...>
 *         <img src="/mockups/panel-admin-pc.jpg" alt="Panel desktop" />
 *       </motion.div>
 *     )}
 *   </AnimatePresence>
 * </motion.div>
 */