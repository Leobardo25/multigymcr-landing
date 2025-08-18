import React from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

// Definimos los niveles de precios
const tiers = [
  {
    name: "Gimnasio Pequeño",
    memberCount: "Hasta 100 miembros",
    price: "27,900",
    description: "Ideal para estudios y gimnasios que inician su crecimiento.",
    isPopular: false,
  },
  {
    name: "Gimnasio Mediano",
    memberCount: "101-300 miembros",
    price: "38,900",
    description: "La solución perfecta para la mayoría de gimnasios establecidos.",
    isPopular: true,
  },
  {
    name: "Gimnasio Grande",
    memberCount: "Más de 300 miembros",
    price: "49,900",
    description: "Potencia ilimitada para gimnasios con alto volumen de clientes.",
    isPopular: false,
  },
];

// Lista unificada de todas las funcionalidades. ¡TODO INCLUIDO!
const allFeatures = [
  "Gestión de Miembros Ilimitados",
  "App Móvil para Clientes (iOS & Android)",
  "Control de Acceso con QR",
  "Registro de Pagos y Facturación",
  "Gestión de Rutinas Personalizadas y Plantillas",
  "Dashboard de Reportes y Estadísticas",
  "Soporte Técnico Prioritario",
  "Actualizaciones Constantes",
];

const Pricing = () => {
  return (
    <section
      id="precios"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-indigo-50 to-white overflow-hidden"
    >
      {/* Partículas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Un solo plan. Simple y transparente.
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos todas nuestras funcionalidades en un único plan. El precio
            solo se ajusta al tamaño de tu gimnasio. Sin costos ocultos, sin
            sorpresas.
          </p>
        </motion.div>

        {/* Tarjetas de Precios por Niveles */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 sm:mt-16"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`rounded-2xl shadow-lg overflow-hidden border ${
                tier.isPopular
                  ? "border-indigo-500 shadow-indigo-200/50 ring-4 ring-indigo-500/20"
                  : "border-gray-200"
              } bg-white flex flex-col`}
            >
              {tier.isPopular && (
                 <div className="bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider text-center py-1.5">
                   Más Popular
                 </div>
              )}
              <div className="px-6 sm:px-8 py-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-indigo-600 font-semibold">{tier.memberCount}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                    ₡{tier.price}
                  </span>
                  <span className="text-gray-600 ml-2 text-lg">/ mes</span>
                </div>
                <p className="mt-4 text-gray-600 text-sm flex-1">{tier.description}</p>
                
                <a
                  href="#contacto"
                  className={`mt-8 block w-full text-center py-3 px-6 text-lg font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                    tier.isPopular
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105"
                      : "bg-white text-indigo-600 border-2 border-indigo-300 hover:bg-indigo-50"
                  }`}
                >
                  Agendar Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección "Todo Incluido" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-20"
        >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 text-yellow-500" />
                Todas las funcionalidades incluidas
            </h3>
            <p className="mt-4 text-gray-600">
                Tu éxito es nuestro éxito. Por eso, cada plan incluye nuestro set completo de herramientas.
            </p>
            <div className="mt-8 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
                {allFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="ml-3 text-gray-700">{feature}</span>
                    </div>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
