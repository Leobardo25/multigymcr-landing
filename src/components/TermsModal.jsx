import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TermsModal = ({ isOpen, onClose }) => {
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
            <h2 className="text-xl font-bold text-white font-display">Términos y Condiciones de Servicio</h2>
            <button
              onClick={onClose}
              className="text-surface-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
            >
              <X size={22} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto text-surface-400 space-y-4 text-sm leading-relaxed">
            <p><strong className="text-surface-300">Última actualización:</strong> 18 de agosto de 2025</p>
            <p>Bienvenido a MultiGymCR. Al utilizar nuestros servicios, usted acepta estar sujeto a los siguientes términos y condiciones. Por favor, léalos cuidadosamente.</p>

            <h3 className="font-bold text-surface-200 pt-2">1. Descripción del Servicio</h3>
            <p>MultiGymCR proporciona un software de gestión de gimnasios (SaaS) que incluye, entre otros, control de acceso, gestión de miembros, facturación y una aplicación móvil para los clientes del gimnasio.</p>

            <h3 className="font-bold text-surface-200 pt-2">2. Cuentas y Responsabilidades</h3>
            <p>El cliente (el gimnasio) es responsable de mantener la confidencialidad de su cuenta y contraseña y de restringir el acceso a su cuenta. El cliente acepta la responsabilidad de todas las actividades que ocurran bajo su cuenta.</p>

            <h3 className="font-bold text-surface-200 pt-2">3. Pagos y Suscripción</h3>
            <p>Los servicios se facturan de forma mensual o anual, según el plan seleccionado. Los pagos no son reembolsables. Las suscripciones se renuevan automáticamente a menos que se cancelen antes del final del período de facturación actual.</p>

            <h3 className="font-bold text-surface-200 pt-2">4. Limitación de Responsabilidad</h3>
            <p>MultiGymCR no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la incapacidad de usar el servicio. El uso del servicio es bajo su propio riesgo.</p>

            <h3 className="font-bold text-surface-200 pt-2">5. Modificaciones</h3>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Se notificará a los clientes de cualquier cambio significativo. El uso continuado del servicio después de dichos cambios constituirá su consentimiento a tales cambios.</p>

            <p className="pt-4 border-t border-white/5 mt-4">Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en info@multigymcr.com.</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TermsModal;
