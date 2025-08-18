import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Array de preguntas y respuestas actualizado
const faqs = [
  {
    question: "¿La instalación y el equipo tienen un costo adicional?",
    answer: "Sí. La suscripción mensual cubre el software y la app. El hardware para el control de acceso (cerraduras, portones, etc.) y la instalación profesional se cotizan por separado, ya que dependen de las necesidades específicas de cada gimnasio."
  },
  {
    question: "¿Qué equipo necesito para el control de acceso con QR?",
    answer: "Para escanear los códigos QR y gestionar los accesos, puedes usar cualquier dispositivo que ya tengas: una tablet, un celular o una computadora portátil con cámara. Si deseas automatizar una puerta o torniquete, te asesoraremos sobre el hardware adicional necesario."
  },
  {
    question: "¿Hay algún contrato de permanencia mínima?",
    answer: "No. Creemos en la calidad de nuestro servicio. Puedes cancelar tu suscripción en cualquier momento sin penalizaciones. Tu satisfacción es nuestra prioridad."
  },
  {
    question: "¿El soporte técnico está incluido en el plan?",
    answer: "¡Por supuesto! Todos nuestros planes incluyen soporte técnico prioritario a través de WhatsApp y correo electrónico para resolver cualquier duda o inconveniente que puedas tener."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Resolvemos tus dudas más comunes de forma clara y directa.
          </p>
        </motion.div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-5 font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 text-gray-600 bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
