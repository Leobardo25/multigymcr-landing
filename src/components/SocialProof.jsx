import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const clients = [
  { name: "Perfect Gym Sarchi", logo: "/logos/bgGym.png" },
  { name: "StrongFit CR", logo: "/logos/pngw.png" },
  { name: "PowerHouse Gym", logo: "/logos/pngwing.com.png" },
  { name: "FitLife Studio", logo: "/logos/pngwing.png" },
  { name: "Iron Will Fitness", logo: "/logos/pngwin.png" },
];

// Duplicar para scroll infinito
const marqueeClients = [...clients, ...clients];

const SocialProof = () => {
  return (
    <section className="relative bg-surface-950 py-14 sm:py-16 overflow-hidden">
      {/* Divisor superior desvanecido premium */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-800/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/20 to-surface-950 pointer-events-none" />
      <div className="section-container text-center">

        {/* Título */}
        <motion.p
          className="text-xs sm:text-sm font-semibold text-surface-500 uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          Con la confianza de gimnasios en Costa Rica
        </motion.p>

        {/* Marquee de logos */}
        <div 
          className="mt-8 relative"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >

          <div className="flex animate-marquee gap-8 sm:gap-12">
            {marqueeClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center px-6 py-3 glass-light rounded-xl hover:border-brand-500/20 transition-all duration-300"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`Logo de ${client.name}`}
                    className="h-10 sm:h-12 object-contain opacity-90 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300"
                    loading="lazy"
                  />
                ) : (
                  <p className="text-sm sm:text-base font-bold text-surface-400">
                    {client.name}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonio destacado */}
        <motion.blockquote
          className="mt-10 sm:mt-12 max-w-2xl mx-auto glass-card rounded-2xl p-6 sm:p-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Gradient left border */}
          <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-500 to-accent-500 rounded-full" />

          {/* Stars */}
          <div className="flex gap-1 mb-4 justify-center sm:justify-start">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-sm sm:text-base text-surface-300 italic leading-relaxed">
            "Desde que implementamos el sistema, redujimos las fugas de dinero en un 40%.
            Ahora tenemos un control total de nuestro gimnasio, operamos de forma más inteligente
            y hemos mejorado significativamente la experiencia de nuestros clientes."
          </p>
          <footer className="mt-4 text-sm font-medium text-surface-500">
            — Gerente de Perfect Gym Sarchí
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default SocialProof;
