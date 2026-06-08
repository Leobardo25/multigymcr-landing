import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-surface-900 border border-white/10 rounded-2xl shadow-glass-lg w-full max-w-2xl max-h-[90vh] flex flex-col"
        >
          <div className="flex justify-between items-center p-5 border-b border-white/5">
            <h2 className="text-xl font-bold text-white font-display">Política de Privacidad</h2>
            <button
              onClick={onClose}
              className="text-surface-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
            >
              <X size={22} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto text-surface-400 space-y-4 text-sm leading-relaxed">
            <p><strong className="text-surface-300">Última actualización:</strong> 18 de agosto de 2025</p>
            <p>En MultiGymCR, respetamos su privacidad y nos comprometemos a proteger los datos personales que manejamos.</p>

            <h3 className="font-bold text-surface-200 pt-2">1. Información que Recopilamos</h3>
            <p>Recopilamos información de nuestros clientes (los gimnasios), como datos de contacto y facturación. Nuestro software también almacena la información que los gimnasios recopilan de sus miembros (nombres, contacto, asistencia, etc.). El gimnasio es el responsable final de los datos de sus miembros.</p>

            <h3 className="font-bold text-surface-200 pt-2">2. Cómo Usamos la Información</h3>
            <p>Utilizamos la información para proporcionar y mejorar nuestro servicio, procesar pagos, ofrecer soporte técnico y comunicarnos con nuestros clientes sobre actualizaciones importantes.</p>

            <h3 className="font-bold text-surface-200 pt-2">3. Compartir Información</h3>
            <p>No vendemos ni alquilamos datos personales a terceros. Podemos compartir información con proveedores de servicios que nos ayudan a operar, como procesadores de pago, siempre bajo estrictos acuerdos de confidencialidad.</p>

            <h3 className="font-bold text-surface-200 pt-2">4. Seguridad de los Datos</h3>
            <p>Implementamos medidas de seguridad técnicas y organizativas para proteger los datos contra el acceso no autorizado, la alteración o la destrucción. Sin embargo, ningún sistema es 100% seguro.</p>

            <p className="pt-4 border-t border-white/5 mt-4">Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos en multigymcr25@gmail.com.</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PrivacyModal;