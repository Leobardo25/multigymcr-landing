import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, ShieldAlert, Zap } from 'lucide-react';

const HardwareIntegration = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-surface-950 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/20 to-surface-950 pointer-events-none" />
      
      <div className="section-container relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-surface-800 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="/622f7d67-b561-4f2c-af78-583c82b288dc.jpeg" 
                alt="Integración con Torniquetes y Hardware de Acceso" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 backdrop-blur-md mb-3">
                  <Zap className="w-4 h-4 text-brand-400" />
                  <span className="text-xs font-bold text-brand-300 uppercase tracking-wider">Integración Total</span>
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight">Control de acceso físico de nivel empresarial</h3>
              </div>
            </div>
            {/* Glow Behind */}
            <div className="absolute -inset-4 bg-brand-500/20 blur-3xl -z-10 rounded-full opacity-50" />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-6">
              Compatible con cualquier <span className="text-gradient">Dispositivo de Acceso</span>
            </h2>
            
            <p className="text-surface-400 text-lg mb-8 leading-relaxed">
              Nuestro sistema está diseñado para conectarse con cualquier tipo de torniquete, puerta eléctrica o barrera de seguridad. Sin embargo, sabemos que cada gimnasio es único.
            </p>

            <div className="space-y-6">
              
              {/* Card 1: Cotización por aparte */}
              <div className="flex gap-4 p-5 rounded-2xl bg-surface-900/50 border border-surface-800 backdrop-blur-sm">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <ShieldAlert className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Torniquetes y Portones a la Medida</h4>
                  <p className="text-surface-400 text-sm leading-relaxed">
                    Además de conectarnos a sus dispositivos actuales, <strong className="text-white">fabricamos portones e instalamos torniquetes a la medida de su gimnasio</strong>. Estos equipos de control físico se cotizan por aparte según su infraestructura y no vienen incluidos en la suscripción de software.
                  </p>
                </div>
              </div>

              {/* Card 2: Recomendación Smart QR */}
              <div className="relative overflow-hidden flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-brand-900/20 to-surface-900/50 border border-brand-500/30 backdrop-blur-sm">
                <span className="absolute top-4 right-4 px-3 py-1 text-[10px] uppercase font-black tracking-widest text-green-400 rounded-full z-20 bg-surface-950/40 backdrop-blur-md">
                  Bajo Costo
                </span>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-2xl rounded-full pointer-events-none" />
                <div className="flex-shrink-0 mt-1 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center border border-brand-500/40 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                    <QrCode className="w-5 h-5 text-brand-400" />
                  </div>
                </div>
                <div className="relative z-10 pr-16 sm:pr-24">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h4 className="text-white font-bold text-lg">Nuestra Recomendación: Smart QR</h4>
                  </div>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    Para iniciar, le recomendamos nuestros <strong className="text-brand-300">Métodos Inteligentes QR</strong> con tecnología especial anti-duplicación. Solo necesitará una <strong className="text-white">tablet, un cartel inteligente o un simple monitor</strong> para controlar todo su acceso a un costo muy bajo.
                  </p>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HardwareIntegration;
