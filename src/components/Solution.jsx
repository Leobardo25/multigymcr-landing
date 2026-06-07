import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Smartphone, Check } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Control de Acceso & Seguridad",
    description: "Asegure el 100% de sus ingresos con bloqueo automático. Al instalar una cerradura electromagnética, la puerta no abre si hay morosidad. Compatible con biométricos (huella, facial) o nuestros métodos incluidos: Escáner QR y Carné Inteligente.",
    points: [
      "Acceso seguro por código QR",
      "Registro de entradas en tiempo real",
      "Integración con torniquetes y chapas"
    ],
    borderClass: "border-t-accent-500",
    iconColor: "text-accent-400",
    iconBg: "bg-accent-500/10 border-accent-500/20"
  },
  {
    icon: BarChart3,
    title: "Gestión Administrativa y Financiera",
    description: "Vea la salud de su negocio en segundos. Olvídese de Excel con reportes claros, facturación rápida y gestión ágil de pagos por SINPE. (La integración de pasarelas para cobro automático con tarjeta se cotiza a la medida).",
    points: [
      "Facturación automática y POS",
      "Reportes de ingresos en vivo",
      "Control estricto de morosidad"
    ],
    borderClass: "border-t-brand-500",
    iconColor: "text-brand-400",
    iconBg: "bg-brand-500/10 border-brand-500/20"
  },
  {
    icon: Smartphone,
    title: "App Exclusiva para Socios",
    description: "Fidelice a sus clientes brindándoles una app móvil premium para visualizar sus rutinas de ejercicio, registrar progresos y renovar membresías.",
    points: [
      "Planes de entreno en el celular",
      "Seguimiento de cargas y medidas",
      "Pase digital y estados de pago"
    ],
    borderClass: "border-t-purple-500",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20"
  }
];

const Solution = () => {
  return (
    <section
      id="solucion"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900 to-surface-950" />
      <div className="absolute inset-0 bg-mesh opacity-40" style={{
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
      }} />

      {/* Glow ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Encabezado centrado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Una Sola Plataforma.
              <br />
              <span className="text-gradient">Control Absoluto de tu Gimnasio.</span>
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto leading-relaxed">
              Simplificamos la administración y el control de acceso para que te enfoques únicamente en la experiencia de tus miembros.
            </p>

            <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Si la membresía no está al día, la puerta no abre.
            </div>
          </motion.div>
        </div>

        {/* Grilla de 3 Columnas de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className={`relative rounded-3xl border border-surface-800/80 bg-surface-900/90 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-glow-brand transition-colors transition-shadow duration-300 hover:border-surface-700/80 border-t-4 ${benefit.borderClass} group transform-gpu will-change-transform`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`flex-shrink-0 rounded-2xl h-12 w-12 flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${benefit.iconBg}`}>
                      <IconComponent className={`h-6 w-6 ${benefit.iconColor}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Description con alto contraste (text-surface-200) */}
                  <p className="text-surface-200 text-[14.5px] sm:text-[15px] leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>

                {/* Sub-puntos en formato lista inferior */}
                <div className="mt-8 border-t border-surface-800/80 pt-5 space-y-3">
                  {benefit.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-surface-300 font-medium group/point">
                      <div className="flex-shrink-0 w-4.5 h-4.5 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 mt-0.5">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="group-hover/point:text-white transition-colors duration-200">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Solution;