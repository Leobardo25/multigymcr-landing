import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CurrencyDollarIcon, ClockIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

const problems = [
  {
    icon: ClockIcon,
    title: "El caos de los Excel y las listas de papel.",
    description: "¿Sigue perdiendo horas cerrando cajas y buscando nombres en listas interminables? Su negocio merece automatización, no horas extra de trabajo administrativo.",
    color: "amber",
    iconBg: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-400",
    borderHover: "hover:border-amber-500/30",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Gente entrando gratis a su gimnasio.",
    description: "Cada persona que entra sin pagar es dinero que se evapora de su bolsillo. Tome el control total de quién entra y quién sale con validación automática.",
    color: "red",
    iconBg: "from-red-500/20 to-red-600/20",
    iconColor: "text-red-400",
    borderHover: "hover:border-red-500/30",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
  },
  {
    icon: ShieldExclamationIcon,
    title: "Clientes que se van y usted ni cuenta se da.",
    description: "¿Sabe quién dejó de pagar hoy? ¿Cuántos clientes perdió esta semana? Si no tiene datos en tiempo real, está gestionando su gimnasio a ciegas.",
    color: "orange",
    iconBg: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-400",
    borderHover: "hover:border-orange-500/30",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
};

const Problem = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="problema" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/45 to-surface-950" />
      <div 
        className="absolute inset-0 bg-dots opacity-20 pointer-events-none" 
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />

      <div className="section-container relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            ¿Le suena familiar?
            <span className="block mt-2 text-gradient pb-2">
              Los 3 problemas que frenan su gimnasio
            </span>
          </motion.h2>

          <motion.p
            className="mt-5 text-lg text-surface-400 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            La administración manual es el enemigo silencioso de sus ganancias.
            Nuestro sistema los elimina de raíz.
          </motion.p>
        </div>

        {/* Tarjetas */}
        {isMobile ? (
          /* Vista Móvil: Marquee Continuo Infinito (Estilo SocialProof) */
          <div 
            className="mt-12 overflow-hidden relative w-full py-4"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            }}
          >

            <div 
              className="flex gap-5 w-max animate-marquee"
              style={{ animationDuration: '22s' }}
            >
              {[...problems, ...problems].map((problem, idx) => {
                const Icon = problem.icon;
                return (
                  <div
                    className="group text-center p-6 bg-surface-900/90 backdrop-blur-md border border-surface-800/80 rounded-3xl w-[280px] flex-shrink-0 cursor-default hover:bg-surface-900 transition-colors"
                  >
                    <div className={`mx-auto bg-gradient-to-br ${problem.iconBg} ${problem.iconColor} rounded-2xl h-14 w-14 flex items-center justify-center ring-1 ring-white/5`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">
                      {problem.title}
                    </h3>
                    <p className="mt-3 text-sm text-surface-400 max-w-xs mx-auto leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Vista Desktop: Grilla Estática con Animación */
          <motion.div
            className="mt-16 grid grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`group text-center p-8 bg-surface-900/90 backdrop-blur-md border border-surface-800/80 rounded-3xl ${problem.borderHover} ${problem.glowColor} transition-all duration-500 cursor-default hover:bg-surface-900 transform-gpu will-change-transform`}
                >
                  <div className={`mx-auto bg-gradient-to-br ${problem.iconBg} ${problem.iconColor} rounded-2xl h-16 w-16 flex items-center justify-center ring-1 ring-white/5`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-surface-400 max-w-xs mx-auto leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Problem;
