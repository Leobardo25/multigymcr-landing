import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BoltIcon } from '@heroicons/react/24/solid';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';

const footerLinks = [
  { name: 'Solución', href: '#solucion' },
  { name: 'Funcionalidades', href: '#funcionalidades' },
  { name: 'Precios', href: '#precios' },
  { name: 'Integraciones', href: '#integraciones' },
  { name: 'FAQ', href: '#faq' },
];

const Footer = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <>
      <footer id="contacto" className="relative bg-surface-950">
        {/* Divisor superior desvanecido premium */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-800/40 to-transparent" />
        <div className="section-container py-14 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

            {/* Column 1: Brand */}
            <div className="text-center md:text-left">
              <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="inline-flex items-center gap-2.5 group">
                <motion.div
                  className="bg-gradient-to-br from-brand-500 to-accent-500 text-white p-2 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BoltIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
                <span className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                  MultiGymCR
                </span>
              </a>

              <p className="mt-4 text-sm text-surface-500 max-w-xs mx-auto md:mx-0 leading-relaxed">
                Transformando la gestión de gimnasios en Costa Rica con tecnología simple y efectiva.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex gap-3 justify-center md:justify-start">
                {[
                  { icon: <FaInstagram className="h-4 w-4" />, href: "#", label: "Instagram" },
                  { icon: <FaFacebookF className="h-4 w-4" />, href: "#", label: "Facebook" },
                  { icon: <FaWhatsapp className="h-4 w-4" />, href: "https://wa.me/50663313764", label: "WhatsApp" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-surface-400 hover:bg-brand-500/10 hover:text-brand-400 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-4">Navegación</h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-surface-500 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-4">Contacto</h3>
              <a
                href="https://wa.me/50663313764"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-glow-green transition-all active:scale-95 btn-shimmer"
              >
                <FaWhatsapp className="h-5 w-5" />
                Contactar por WhatsApp
              </a>

              <p className="mt-4 text-sm text-surface-600">
                info@multigymcr.com
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-surface-600">
              &copy; {new Date().getFullYear()} MultiGymCR. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-4 text-xs text-surface-600">
              <button onClick={() => setIsTermsOpen(true)} className="hover:text-surface-300 transition-colors">Términos</button>
              <span className="text-surface-800">|</span>
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-surface-300 transition-colors">Privacidad</button>
            </div>

            <p className="text-xs text-surface-700">
              Desarrollado con ❤️ por <span className="text-surface-500">Presencia Digital CR</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Modales */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
};

export default Footer;