import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BoltIcon } from '@heroicons/react/24/solid';
import { FaWhatsapp } from 'react-icons/fa';
import TermsModal from './TermsModal';     // <-- Importar Modal
import PrivacyModal from './PrivacyModal'; // <-- Importar Modal

const Footer = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer id="contacto" className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="text-center">
            {/* Logo */}
            <a href="#inicio" className="inline-flex items-center gap-2 mb-3 sm:mb-4 group">
              <motion.div
                className="bg-indigo-600 text-white p-1.5 sm:p-2 rounded-md sm:rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <BoltIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
              <span className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                MultiGymCR
              </span>
            </a>

            {/* Texto descriptivo */}
            <p className="max-w-md mx-auto text-sm sm:text-base text-gray-400 px-2">
              Transformando la gestión de gimnasios en Costa Rica con tecnología simple y efectiva.
            </p>

            {/* Botón de WhatsApp */}
            <div className="mt-6 sm:mt-8">
              <a
                href="https://wa.me/50663313764"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold sm:font-bold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <FaWhatsapp className="h-6 w-6" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* División y copyright */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              &copy; {new Date().getFullYear()} MultiGymCR. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Desarrollado con ❤️ por Leonardo
            </p>

            {/* Enlaces legales actualizados */}
            <div className="mt-4 flex justify-center gap-4 text-xs text-gray-500">
              <button onClick={() => setIsTermsOpen(true)} className="hover:text-gray-300 transition-colors">Términos</button>
              <span className="text-gray-600">|</span>
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-gray-300 transition-colors">Privacidad</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Renderizar los modales */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
};

export default Footer;