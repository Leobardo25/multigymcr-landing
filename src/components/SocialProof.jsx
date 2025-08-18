import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: "Perfect Gym Sarchi", logo: "/logos/bgGym.png" },
  { name: "StrongFit CR", logo: "/logos/pngw.png" },
  { name: "PowerHouse Gym", logo: "/logos/pngwing.com.png" },
  { name: "FitLife Studio", logo: "/logos/pngwing.png" },
  { name: "Iron Will Fitness", logo: "/logos/pngwin.png" },
];

const SocialProof = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        
        {/* Título */}
        <motion.h2
          className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3 }}
        >
          Con la confianza de gimnasios en Costa Rica
        </motion.h2>

        {/* Lista de clientes */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-shadow sm:hover:scale-105 active:scale-95"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 10
              }}
              aria-label={`Cliente: ${client.name}`}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="h-8 sm:h-10 grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
              ) : (
                <p className="text-sm sm:text-base md:text-lg font-medium sm:font-bold text-gray-700">
                  {client.name}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Testimonio */}
        <motion.blockquote
          className="mt-8 sm:mt-10 max-w-2xl mx-auto px-4 py-4 sm:py-5 bg-white rounded-lg shadow-sm border border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
        <p className="text-sm sm:text-base text-gray-600 italic">
  "Desde que implementamos el sistema, redujimos las fugas de dinero en un 40%. 
  Ahora tenemos un control total de nuestro gimnasio, operamos de forma más inteligente 
  y hemos mejorado significativamente la experiencia de nuestros clientes."
</p>
<footer className="mt-2 text-xs sm:text-sm font-medium text-gray-500">
  — Gerente de Perfect Gym Sarchí
</footer>

        </motion.blockquote>
      </div>
    </section>
  );
};

export default SocialProof;
