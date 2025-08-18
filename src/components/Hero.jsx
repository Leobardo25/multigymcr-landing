import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp } from 'react-icons/fa';

const Hero = ({ onMenuToggle }) => {
  const [currentDevice, setCurrentDevice] = useState(0);
  const devices = ['mobile', 'desktop'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice(prev => (prev + 1) % devices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    if (onMenuToggle) onMenuToggle(false);
  };

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-50 pt-20 md:pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-indigo-200 rounded-full blur-xl sm:blur-3xl opacity-20 sm:opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 rounded-full blur-xl sm:blur-3xl opacity-20 sm:opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* 👇 LÍNEA CORREGIDA 👇 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug sm:leading-tight">
              Deje de Perder Dinero.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-1 sm:mt-2">
                Modernice su Gimnasio.
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Controle accesos, suscripciones y estadísticas desde una sola
              plataforma intuitiva y multi-dispositivo.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/50663313764"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-semibold sm:font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-md hover:shadow-green-300 transition-all active:bg-green-600"
              >
                <FaWhatsapp className="h-6 w-6" />
                Agendar Demo
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleNavClick(e, "#funcionalidades")}
                href="#funcionalidades"
                className="inline-flex items-center justify-center bg-white text-gray-700 font-medium sm:font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg border border-gray-200 hover:text-indigo-600 hover:border-indigo-300 transition-colors active:bg-gray-50"
              >
                Ver Funcionalidades
                <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Columna de Imagen con alternancia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full h-full flex items-center justify-center min-h-[300px] md:min-h-[400px]"
          >
            <AnimatePresence mode="wait">
              {currentDevice === 0 && (
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full max-w-[160px] mx-auto">
                    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-[1.5rem] shadow-2xl">
                      <div className="rounded-[1.2rem] overflow-hidden bg-white">
                        <img
                          src="/mockups/panel-admin-mobile.jpg"
                          alt="Panel de administración en celular"
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentDevice === 1 && (
                <motion.div
                  key="desktop"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full max-w-[480px] mx-auto">
                    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[260px]">
                      <div className="rounded-lg overflow-hidden h-full bg-white">
                        <img
                          src="/mockups/panel-admin-pc.jpg"
                          alt="Panel de administración en portátil"
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                    </div>
                    <div className="relative mx-auto bg-gray-900 rounded-b-xl h-[21px]">
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[96px] h-[8px] bg-gray-800"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="absolute -inset-2 sm:-inset-4 -z-20 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;