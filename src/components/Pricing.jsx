import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, TrendingDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const planFeatures = [
  "App 100% personalizada con el branding y colores de tu gimnasio",
  "Todos los módulos de Dashboard en tiempo real",
  "Control de Acceso Inteligente (Métodos QR Incluidos)",
  "Usuarios en la App ILIMITADOS",
  "Facturación digital",
  "Creador de Rutinas y biblioteca de Ejercicios con Inteligencia Artificial",
  "Punto de Venta (POS) integrado en recepción",
  "Tienda en línea integrada para venta de productos",
  "Configuración General y Roles personalizados",
  "Landing Page dedicada de alto impacto",
  "Soporte técnico prioritario 24/7 vía WhatsApp",
  "Huéspedes y pases diarios ilimitados",
  "Copias de seguridad diarias y seguridad SSL"
];

const Pricing = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <section
      id="precios"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-surface-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/30 to-surface-950 pointer-events-none" />
      <div className="absolute inset-0 bg-mesh opacity-20" />

      {/* Spotlight radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-brand-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[12px] font-black uppercase tracking-widest mb-6">
            <TrendingDown className="w-4 h-4" />
            Rompiendo el mercado
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] pb-2">
            Software de Élite.
            <br />
            <span className="text-gradient">Precio Accesible.</span>
          </h2>
          <p className="mt-5 text-lg text-surface-400 max-w-2xl mx-auto leading-relaxed">
            Las plataformas completas para gimnasios suelen ser caras y complejas. Nosotros te ofrecemos tecnología de primer nivel a una fracción del costo, sin sacrificar ni una sola función.
          </p>
        </motion.div>

        {/* Única tarjeta Premium centrada */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto mt-14 sm:mt-16 relative rounded-3xl overflow-hidden shadow-2xl bg-surface-900 p-8 sm:p-10 border border-brand-500/30"
        >
          {/* Badge superior */}
          <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-red-600 via-brand-500 to-accent-500 text-white text-[13px] font-black uppercase tracking-widest text-center py-2.5 flex items-center justify-center gap-2 shadow-lg">
            <Sparkles className="w-5 h-5 animate-pulse text-yellow-300" />
            OFERTA PARA GIMNASIOS PIONEROS
          </div>

          <div className="pt-8 text-center">
            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Plan Élite Todo Incluido
            </h3>
            
            <p className="mt-4 text-surface-400 text-[15px] font-medium px-4 leading-relaxed max-w-lg mx-auto">
              Incluye acceso total al sistema, landing page y configuración técnica integral <span className="text-surface-300">(Valorado en ₡120,000)</span>. Por tiempo limitado: <strong className="text-white">₡0 costo de implementación.</strong>
            </p>

            {/* Precios */}
            <div className="mt-8 flex flex-col items-center justify-center gap-2">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-surface-500 text-xl font-bold line-through decoration-red-500/70 decoration-2">
                  Setup inicial: ₡120,000
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-black tracking-widest uppercase border border-green-500/30">
                  ¡Gratis Hoy!
                </span>
              </div>
              
              <div className="flex items-baseline justify-center gap-2 mt-2 relative">
                <span className="text-6xl sm:text-7xl font-black text-white tracking-tight font-display bg-gradient-to-r from-white via-brand-100 to-brand-300 bg-clip-text text-transparent drop-shadow-lg pb-1">
                  ₡30,000
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-surface-400 text-xl font-semibold">/ mes</span>
                  <span className="text-brand-400 text-[10px] font-black uppercase tracking-widest -mt-1">Para siempre</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                🔒 Precio bloqueado de por vida
              </span>
              <span className="inline-flex items-center gap-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                Cero cobros ocultos
              </span>
            </div>

            {/* Urgency / Scarcity Box */}
            <div className="max-w-sm mx-auto relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
              <div className="relative bg-surface-950 border border-red-500/30 rounded-xl p-4 shadow-xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Cupos Fundador
                  </span>
                  <span className="text-white font-black text-sm">Disponibles: 3 de 5</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-surface-800 rounded-full h-1.5 mb-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-brand-400 h-1.5 rounded-full w-[40%]" />
                </div>
                <p className="text-surface-300 text-[13px] text-left leading-relaxed">
                  <strong className="text-white">2 gimnasios</strong> ya reclamaron esta oferta. Al llenarse los 3 cupos restantes, el sistema volverá a su valor comercial de ₡120,000 mensuales.
                </p>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          {/* Grilla de Funcionalidades */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-surface-400 mb-5 text-left pl-1">
              Todo esto está incluido:
            </h4>
            
            {/* Primeras 8 características */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-left">
              {planFeatures.slice(0, 8).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 py-1 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-500/10 rounded-full flex items-center justify-center border border-brand-500/20 group-hover:bg-brand-500/30 transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  <span className="text-surface-200 text-[15px] leading-snug font-medium group-hover:text-white transition-colors duration-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Resto de características animadas */}
            <AnimatePresence initial={false}>
              {showAllFeatures && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-left mt-4 border-t border-surface-800/50 pt-4">
                    {planFeatures.slice(8).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 py-1 group">
                        <div className="flex-shrink-0 w-6 h-6 bg-brand-500/10 rounded-full flex items-center justify-center border border-brand-500/20 group-hover:bg-brand-500/30 transition-colors duration-300">
                          <Check className="w-3.5 h-3.5 text-brand-400" />
                        </div>
                        <span className="text-surface-200 text-[15px] leading-snug font-medium group-hover:text-white transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botón Ver Más/Menos */}
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-400 hover:text-white transition-colors py-2 px-5 rounded-full bg-surface-950/50 border border-surface-800/80 hover:border-surface-700/80 shadow-md active:scale-95 transition-transform"
              >
                {showAllFeatures ? "Ver menos características" : "Ver todo el paquete élite"}
                <span className={`transition-transform duration-300 text-[10px] ${showAllFeatures ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
            </div>
          </div>

          {/* Botón WhatsApp de Acción */}
          <div className="mt-10">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/50671850604"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white font-black text-lg py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-400/50"
            >
              <FaWhatsapp className="h-6 w-6" />
              Reclamar Oferta Pioneros
            </motion.a>
            <p className="mt-4 text-xs text-surface-400 text-center font-medium">
              Cupos limitados para gimnasios fundadores. Configuramos todo sin costo inicial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
