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
    if (window.lenis) {
      window.lenis.scrollTo(target);
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView();
      }
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
                <motion.img
                  src="/logo.jpeg"
                  alt="MultiGymCR Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl object-cover shadow-glow-sm border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
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
                  { icon: <FaFacebookF className="h-4 w-4" />, href: "https://www.facebook.com/profile.php?id=61579264718532", label: "Facebook" },
                  { icon: <FaWhatsapp className="h-4 w-4" />, href: "https://wa.me/50671850604", label: "WhatsApp" },
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
                href="https://wa.me/50671850604"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-glow-green transition-all active:scale-95 btn-shimmer"
              >
                <FaWhatsapp className="h-5 w-5" />
                Contactar por WhatsApp
              </a>

              <p className="mt-4 text-sm text-surface-600">
                multigymcr@gmail.com
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-surface-800/60 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <p className="text-xs text-surface-500 font-medium">
                &copy; {new Date().getFullYear()} MultiGymCR. Todos los derechos reservados.
              </p>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-surface-800" />
              <div className="flex items-center gap-4 text-xs text-surface-500 font-medium">
                <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors">Términos de Servicio</button>
                <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors">Aviso de Privacidad</button>
              </div>
            </div>

            <a href="https://nexoradigitalcr.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center lg:items-end gap-1.5 px-4 py-2.5 rounded-xl bg-surface-900/50 border border-surface-800/50 hover:border-brand-500/30 hover:bg-surface-800/50 transition-all group cursor-pointer">
              <p className="text-[10px] uppercase tracking-widest text-surface-500 font-bold group-hover:text-surface-400 transition-colors">
                Software Desarrollado Por
              </p>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-brand-500 group-hover:text-brand-400 transition-colors" />
                <span className="text-[15px] font-black tracking-tight text-white">
                  NEXORA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">DIGITAL CR</span>
                </span>
              </div>
            </a>
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