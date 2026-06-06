import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Rocket, Target, Zap } from 'lucide-react';

const CustomLanding = () => {
  return (
    <section id="custom-landing" className="relative pt-20 pb-32 lg:pt-28 lg:pb-40 bg-surface-950 overflow-hidden">
      {/* Divisor superior desvanecido premium */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-800/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/40 to-surface-950 pointer-events-none" />

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" style={{
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
      }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-center lg:text-left">
              Landing Page de <br />
              <span className="text-gradient">Alto Impacto</span>
            </h2>
            
            <p className="mt-6 text-lg sm:text-xl text-surface-300 leading-relaxed font-medium text-center lg:text-left">
              No solo te entregamos un sistema de gestión. Diseñamos y desarrollamos una página web personalizada a las necesidades de tu gimnasio, creada específicamente para convertir visitantes en socios activos.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 p-3.5 bg-surface-900 rounded-2xl border border-surface-800 text-brand-400 group-hover:scale-110 group-hover:border-brand-500/50 transition-all duration-300 shadow-md">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black text-lg tracking-wide">Arquitectura de Alta Conversión</h4>
                  <p className="text-surface-400 mt-1.5 text-[15px] leading-relaxed">Estructura persuasiva, botones de llamado a la acción estratégicos y velocidad de carga ultrarrápida para captar más clientes 24/7.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 p-3.5 bg-surface-900 rounded-2xl border border-surface-800 text-accent-400 group-hover:scale-110 group-hover:border-accent-500/50 transition-all duration-300 shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black text-lg tracking-wide">100% Personalizada a tu Identidad</h4>
                  <p className="text-surface-400 mt-1.5 text-[15px] leading-relaxed">Adaptamos los colores, tipografías, logotipos y fotografías para que tu presencia online respire la esencia única de tu marca.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna de Video Premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative group perspective-1000"
          >
            {/* Decorator Glow Frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 via-purple-500 to-accent-500 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-accent-500 rounded-[2rem] opacity-50" />
            
            {/* Video Container */}
            <div className="relative rounded-[1.8rem] overflow-hidden shadow-2xl border border-surface-700/50 bg-black aspect-[16/10] flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-500">
              
              {/* Aquí irá el video (se usará un div decorativo oscuro si no hay src todavía) */}
              <video 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/videos/landing-impact.mp4" type="video/mp4" />
              </video>
              
              {/* Gradiente oscuro inferior para dar profundidad */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CustomLanding;
