import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, ScanFace, Zap } from 'lucide-react';

const Integrations = () => {
  return (
    <section id="integraciones" className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Preparado para el Futuro: <br />
              <span className="text-indigo-400">Integraciones Avanzadas</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Nuestro sistema es el núcleo de tu gimnasio. Comienza con el acceso QR incluido y, cuando estés listo, expande tus capacidades con equipos biométricos de marcas líderes como ZKTeco.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span>Flexibilidad total para crecer a tu ritmo.</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span>Máxima seguridad y conveniencia para tus miembros.</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span>Proyecta una imagen moderna e innovadora.</span>
              </li>
            </ul>
             <p className="mt-6 text-sm text-gray-400">
              *Consúltanos sobre los equipos compatibles y el servicio de instalación.
            </p>
          </motion.div>

          {/* Columna visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gray-800/50 p-8 rounded-2xl text-center border border-gray-700 hover:border-indigo-500 transition-colors">
              <Fingerprint className="h-12 w-12 mx-auto text-indigo-400" />
              <p className="mt-4 font-semibold">Control de Huella</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl text-center border border-gray-700 hover:border-indigo-500 transition-colors">
              <ScanFace className="h-12 w-12 mx-auto text-indigo-400" />
              <p className="mt-4 font-semibold">Reconocimiento Facial</p>
            </div>
            <div className="col-span-2 bg-gray-800/50 p-8 rounded-2xl text-center border border-gray-700 hover:border-indigo-500 transition-colors">
                <img src="/logos/ZKTECO.png" alt="Logo de ZKTeco" className="h-8 mx-auto" />
                <p className="mt-4 text-sm text-gray-400">Compatible con marcas líderes</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;