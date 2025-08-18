import React from "react";
import { motion } from "framer-motion";
import { BadgeCheckIcon } from "lucide-react"; // Asumiendo que usas lucide-react, si no, puedes usar heroicons

// Array de beneficios actualizado con las nuevas funcionalidades
const benefits = [
  {
    title: "Asegure el 100% de sus Ingresos",
    description:
      "Control de acceso automatizado: solo miembros activos pueden ingresar. Cada persona que entrena, paga.",
  },
  {
    title: "App Exclusiva para Miembros",
    description:
      "Tus clientes ven sus rutinas, progreso y estado de membresía en su celular, mejorando la retención y comunicación.",
  },
  {
    title: "Gestión de Rutinas Simplificada",
    description:
      "Asigna entrenamientos personalizados o usa plantillas. Ahorra tiempo y ofrece un servicio más profesional.",
  },
  {
    title: "Recupere su Tiempo",
    description:
      "Olvídese de hojas de cálculo. Vea en segundos quién está activo, por vencer o vencido, y quién ha ingresado.",
  },
];

const Solution = () => {
  return (
    <section
      id="solucion"
      className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Presentamos{" "}
              <span className="text-indigo-600">MultiGymCr:</span>
              <br />
              Control Total, Cero Estrés.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Automatizamos tus tareas repetitivas para que te enfoques en lo
              importante: tus clientes.
            </p>

            <div className="mt-2 inline-block px-4 py-2 bg-indigo-50 text-indigo-700 font-semibold rounded-lg text-sm shadow-sm">
              Si la membresía no está al día, la puerta no abre.
            </div>

            <div className="mt-8 space-y-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full h-10 w-10 flex items-center justify-center shadow-inner">
                    <BadgeCheckIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna del Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            >
              <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                {/* Header del mockup */}
                <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                  <span className="h-3 w-3 bg-red-400 rounded-full"></span>
                  <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
                  <span className="h-3 w-3 bg-green-400 rounded-full"></span>
                </div>
                {/* Contenido (Video) */}
                <div className="mt-4">
                  <video
                    className="rounded-lg w-full h-auto shadow-sm"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/mockups/0810.mp4" type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                  </video>
                  <p className="mt-3 text-center text-sm text-gray-500">
                    Interfaz simple, control total.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sombra decorativa */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl blur-2xl opacity-50 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;