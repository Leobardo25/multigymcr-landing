import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, ScanFace, Zap } from 'lucide-react';

const Integrations = () => {
  return (
    <section id="integraciones" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/40 to-surface-950 pointer-events-none" />
      <div 
        className="absolute inset-0 bg-dots opacity-10 pointer-events-none" 
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-center lg:text-left">
              Preparado para el Futuro: <br />
              <span className="text-gradient-static">Integraciones Avanzadas</span>
            </h2>
            <p className="mt-5 text-lg text-surface-400 leading-relaxed text-center lg:text-left">
              Nuestro sistema es el núcleo de tu gimnasio. Comienza con el acceso QR incluido y, cuando estés listo, expande tus capacidades con equipos biométricos de marcas líderes como ZKTeco.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Flexibilidad total para crecer a tu ritmo.",
                "Máxima seguridad y conveniencia para tus miembros.",
                "Proyecta una imagen moderna e innovadora."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-1 bg-yellow-500/10 rounded-lg">
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-surface-300 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-surface-600">
              *Consúltanos sobre los equipos compatibles y el servicio de instalación.
            </p>
          </motion.div>

          {/* Columna visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { icon: <Fingerprint className="h-12 w-12" />, label: "Control de Huella", desc: "Identificación biométrica precisa" },
              { icon: <ScanFace className="h-12 w-12" />, label: "Reconocimiento Facial", desc: "Acceso sin contacto" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, rotateY: 5 }}
                className="relative glass-card p-7 sm:p-8 rounded-2xl text-center hover:border-brand-500/30 transition-all duration-500 group overflow-hidden"
              >
                {/* Scan line animation */}
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent animate-scan-line pointer-events-none" />

                <div className="text-brand-400 mx-auto group-hover:text-accent-400 transition-colors duration-300">
                  {item.icon}
                </div>
                <p className="mt-4 font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-xs text-surface-500">{item.desc}</p>
              </motion.div>
            ))}

            {/* ZKTeco card */}
            <div className="col-span-2 glass-card p-7 sm:p-8 rounded-2xl text-center hover:border-brand-500/30 transition-all duration-500 group">
              <img
                src="/logos/ZKTECO.png"
                alt="Logo de ZKTeco"
                className="h-8 mx-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
              <p className="mt-4 text-sm text-surface-500">Compatible con marcas líderes</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;