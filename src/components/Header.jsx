import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

// Array de enlaces actualizado con las nuevas secciones
const navLinks = [
  { name: 'Solución', href: '#solucion' },
  { name: 'Funcionalidades', href: '#funcionalidades' },
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
      // Incluimos #inicio para el cálculo del enlace activo
      const sections = [{ href: '#inicio' }, ...navLinks].map((l) => document.querySelector(l.href));
      const scrollPos = window.scrollY + 150; // Ajuste de offset para mayor precisión

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && scrollPos >= sec.offsetTop) {
          setActiveLink(sec.getAttribute('id') ? `#${sec.id}` : '');
          break;
        }
      }
    };

    const handleResize = () => window.innerWidth >= 768 && setIsMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
          }`}
        >
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2 group"
          >
            <motion.div
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1, rotate: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <BoltIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>
            <span className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
              MultiGymCR
            </span>
          </a>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base font-medium rounded-md transition-all ${
                  activeLink === link.href
                    ? 'text-indigo-600 bg-indigo-50 shadow-sm'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botones acción */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="hidden sm:inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-4 py-2 text-sm sm:text-base sm:px-5 sm:py-2.5 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all active:scale-95"
            >
              Agendar Demo
            </a>

            {/* Botón móvil */}
            <button
              className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors"
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
            className="fixed inset-0 z-[99] bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className="absolute top-0 left-0 w-full bg-white shadow-xl rounded-b-lg overflow-hidden"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col p-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-3 px-4 rounded-md font-medium transition-colors ${
                      activeLink === link.href
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
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
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 active:scale-95 text-center mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
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