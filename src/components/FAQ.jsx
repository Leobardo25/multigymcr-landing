import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
  },
  {
    question: "¿El software se actualiza o puede integrarse con otras herramientas?",
    answer: "Sí. El sistema recibe mantenimiento continuo y actualizaciones sin costo para que nunca se vuelva obsoleto. Si tu gimnasio necesita una integración específica o un desarrollo a gran escala, lo cotizamos a la medida. Como valor agregado: si tu solicitud es una mejora que beneficia a toda nuestra comunidad de gimnasios, la desarrollamos y la incluimos totalmente gratis."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/30 to-surface-950 pointer-events-none" />
      <div 
        className="absolute inset-0 bg-dots opacity-15 pointer-events-none" 
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-surface-400">
            Resolvemos tus dudas más comunes de forma clara y directa.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass-card rounded-xl overflow-hidden transition-colors duration-300 transform-gpu will-change-transform ${
                activeIndex === index ? 'border-brand-500/30' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-5 sm:p-6 font-semibold text-white hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-[15px] sm:text-base pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 ${activeIndex === index ? 'text-brand-400' : 'text-surface-500'}`}
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
                    <div className="pb-1">
                      <div className="mx-5 sm:mx-6 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
                      <div className="p-5 sm:p-6 pt-4 text-surface-400 leading-relaxed text-[15px]">
                        {faq.answer}
                      </div>
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
