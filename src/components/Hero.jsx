import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPromoBtn, setShowPromoBtn] = useState(false);
  const modalVideoRef = useRef(null);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView();
    }
  };

  const handleTimeUpdate = (e) => {
    const video = e.target;
    if (video.duration && video.duration - video.currentTime <= 10) {
      setShowPromoBtn(true);
    } else {
      setShowPromoBtn(false);
    }
  };

  // Bloquear/Desbloquear el scroll general cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      // Detener Lenis y bloquear scroll nativo
      window.lenis?.stop();
      document.documentElement.classList.add("lenis-stopped");
      document.body.style.overflow = "hidden";
      
      if (modalVideoRef.current) {
        modalVideoRef.current.play().catch((err) => {
          console.log("Autoplay con audio bloqueado por navegador, intentando con controles", err);
        });
      }
    } else {
      // Reanudar Lenis y restaurar scroll nativo
      window.lenis?.start();
      document.documentElement.classList.remove("lenis-stopped");
      document.body.style.overflow = "";
      setShowPromoBtn(false);
    }

    // Cleanup para reestablecer el scroll si el componente se desmonta inesperadamente
    return () => {
      window.lenis?.start();
      document.documentElement.classList.remove("lenis-stopped");
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center pt-20 md:pt-28 pb-16 overflow-hidden"
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

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto text-center lg:text-left">
          
          {/* Columna Izquierda: Contenido de Texto y CTAs */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] sm:leading-[1.05] tracking-tight px-2 lg:px-0"
            >
              Deje de Perder
              <br />
              <span className="text-gradient">Tiempo y Dinero.</span>
            </motion.h1>

            {/* Miniatura de Video en móvil (Oculta en PC) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 mb-6 block lg:hidden relative group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse" />
              <div className="relative w-[170px] sm:w-[215px] aspect-video rounded-2xl overflow-hidden border-[3px] border-surface-800 bg-surface-950 shadow-2xl transition-transform duration-300 group-hover:scale-105 group-active:scale-98">
                <img
                  src="/hero-gym.png"
                  alt="Ver video explicativo"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-surface-950/20 group-hover:bg-surface-950/10 transition-colors">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-brand-500/90 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:bg-brand-400 group-hover:scale-110 transition-all border border-white/20">
                    <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 translate-x-[2px]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Descripción ("las letras") */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-surface-400 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
            >
              El <strong>software de élite</strong> para gimnasios que automatiza accesos,
              suscripciones y rutinas desde una sola plataforma, a un <strong>precio sin competencia</strong> en el mercado. 💪🏽
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start px-4 lg:px-0 w-full sm:w-auto"
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
          </div>

          {/* Columna Derecha: Miniatura de Video en PC (Oculta en móvil) */}
          <div className="hidden lg:flex justify-end w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative group cursor-pointer lg:ml-auto"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Glow animado detrás de la miniatura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-accent-500 rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition duration-500 animate-pulse" />
              
              {/* Contenedor miniatura */}
              <div className="relative w-[220px] xl:w-[250px] aspect-video rounded-2xl overflow-hidden border-[4px] border-surface-900 bg-surface-950 shadow-2xl transition-all duration-300 group-hover:scale-[1.03] group-active:scale-98 ring-1 ring-white/5">
                {/* Micro-video de fondo silencioso en loop */}
                <img
                  src="/hero-gym.png"
                  alt="Ver video explicativo"
                  className="w-full h-full object-cover opacity-65 group-hover:opacity-55 transition-opacity"
                />
                {/* Overlay y Botón de Play */}
                <div className="absolute inset-0 flex items-center justify-center bg-surface-950/30 group-hover:bg-surface-950/15 transition-colors">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-500/90 text-white shadow-[0_0_20px_rgba(99,102,241,0.6)] group-hover:bg-brand-400 group-hover:scale-110 transition-all border border-white/20">
                    <PlayIcon className="w-7 h-7 translate-x-[2px]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent pointer-events-none" />

      {/* MODAL DE VIDEO EXPANDIDO */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-950/80 backdrop-blur-md"
            onClick={handleBackdropClick}
          >
            {/* Contenedor relativo de tamaño y altura flexibles para alojar video y botón */}
            <div className="relative w-[82%] max-w-[230px] md:max-w-[280px] lg:max-w-[320px] flex flex-col items-center">
              
              {/* Botón de Cerrar (Flota afuera del video, arriba a la derecha) */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 -right-2 md:-right-4 z-50 p-2 rounded-full bg-surface-950/80 text-white hover:bg-surface-900 border border-surface-800/50 transition-all backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>

              {/* Caja del Video */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border-[6px] sm:border-[8px] border-surface-900 bg-surface-950 ring-1 ring-white/10"
              >
                <video
                  ref={modalVideoRef}
                  src="/hero.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  onTimeUpdate={handleTimeUpdate} // Escuchar los cambios de tiempo
                  onEnded={() => setIsModalOpen(false)} // Se minimiza solo al terminar
                  className="w-full h-full object-contain bg-black"
                  style={{ WebkitTouchCallout: 'none' }}
                />
              </motion.div>

              {/* Botón de WhatsApp promocional cuando faltan 10s */}
              <AnimatePresence>
                {showPromoBtn && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-full mt-4 flex justify-center z-40"
                  >
                    <a
                      href="https://wa.me/50671850604?text=Hola!%20Quiero%20aplicar%20a%20la%20promo%20ahora%20💪🏽"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 sm:px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:scale-105 active:scale-98 text-center"
                    >
                      {/* Icono de WhatsApp oficial */}
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Quiero aplicar a la promo ahora
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;