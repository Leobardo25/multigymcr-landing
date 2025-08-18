import React from 'react';
import { motion } from 'framer-motion';
import { CurrencyDollarIcon, ClockIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

const problems = [
  {
    icon: CurrencyDollarIcon,
    title: "Fugas de Ingresos",
    description: "Cada mes pierde clientes y dinero porque las membresías vencidas siguen entrando sin pagar."
  },
  {
    icon: ClockIcon,
    title: "Tiempo Perdido",
    description: "Horas valiosas gastadas revisando hojas de cálculo en lugar de hacer crecer el negocio."
  },
  {
    icon: ShieldExclamationIcon,
    title: "Acceso Inseguro",
    description: "Personal distraído actuando como guardia, en vez de atender y vender."
  }
];

// Variantes para animación en cascada
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
  return (
    <section id="problema" className="bg-white py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            ¿Le suena familiar?
            <span className="block mt-2 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Los 3 problemas que frenan su gimnasio
            </span>
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-xl mx-auto"
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
        <motion.div
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.03] hover:border-indigo-300 transition-all duration-300"
              >
                <div className="mx-auto bg-gradient-to-tr from-indigo-500 to-pink-500 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {problem.title}
                </h3>
                <p className="mt-3 text-gray-600 max-w-xs mx-auto">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
