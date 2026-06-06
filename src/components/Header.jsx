import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { name: 'Solución', href: '#solucion' },
  { name: 'Funcionalidades', href: '#demo' },
  { name: 'Precios', href: '#precios' },
  { name: 'Integraciones', href: '#integraciones' },
  { name: 'Preguntas', href: '#faq' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveLink(`#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = [document.querySelector('#inicio'), ...navLinks.map((l) => document.querySelector(l.href))];
    
    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    const handleResize = () => window.innerWidth >= 768 && setIsMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      // El scroll behavior ya está definido en CSS como smooth, usar scrollIntoView nativo evita bugs de doble scroll.
      element.scrollIntoView();
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-surface-900/80 backdrop-blur-xl border-b border-white/5 shadow-glass'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80 }}
    >
      <div className="section-container">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
          }`}
        >
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2.5 group"
          >
            <motion.div
              className="bg-gradient-to-br from-brand-500 to-accent-500 text-white p-2 rounded-lg shadow-glow-sm"
              whileHover={{ scale: 1.1, rotate: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <BoltIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>
            <span className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
              MultiGymCR
            </span>
          </a>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-2 lg:px-4 text-sm lg:text-[15px] font-medium rounded-lg transition-all duration-300 ${
                  activeLink === link.href
                    ? 'text-white'
                    : 'text-surface-400 hover:text-white'
                }`}
              >
                {link.name}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/[0.06] rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Botones acción */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="hidden sm:inline-flex items-center bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold px-5 py-2.5 text-sm rounded-lg shadow-lg hover:shadow-glow-brand hover:from-brand-400 hover:to-brand-500 transition-all active:scale-95 btn-shimmer"
            >
              Agendar Demo
            </a>

            {/* Botón móvil */}
            <button
              className="md:hidden text-surface-300 p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className="absolute top-0 left-0 w-full bg-surface-900/95 backdrop-blur-xl shadow-glass-lg border-b border-white/5"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col p-5 pt-20 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-3.5 px-5 rounded-xl font-medium text-lg transition-all ${
                      activeLink === link.href
                        ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                        : 'text-surface-300 hover:bg-white/5 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contacto"
                  onClick={(e) => handleNavClick(e, '#contacto')}
                  className="bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold py-4 px-5 rounded-xl shadow-lg hover:shadow-glow-brand text-center text-lg mt-3 btn-shimmer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  Agendar Demo
                </motion.a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;