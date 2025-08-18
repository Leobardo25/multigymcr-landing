import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BarChart3, Smartphone, KeyRound } from 'lucide-react';

const featureCategories = [
  {
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    title: "Gestión del Gimnasio",
    features: [
      "Dashboard con métricas clave",
      "Gestión completa de miembros",
      "Control de pagos y facturación automática",
      "Reportes de ingresos y asistencia",
      "Registro de historial de clientes"
    ]
  },
  {
    icon: <Smartphone className="w-8 h-8 text-white" />,
    title: "Para tus Clientes",
    features: [
      "App móvil para iOS y Android",
      "Visualización de rutinas asignadas",
      "Registro de su progreso y medidas",
      "Acceso a su historial de pagos",
      "Comunicación directa con el gimnasio"
    ]
  },
  {
    icon: <KeyRound className="w-8 h-8 text-white" />,
    title: "Control de Acceso y Rutinas",
    features: [
      "Acceso seguro con código QR desde la app",
      "Registro de entradas en tiempo real",
      "Creación de plantillas de rutinas",
      "Asignación de rutinas personalizadas",
      "Biblioteca de ejercicios en video"
    ]
  }
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Una plataforma completa para tu éxito
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Desde la administración hasta la experiencia de tus miembros, tenemos cada detalle cubierto.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600">
                {category.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{category.title}</h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                {category.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
