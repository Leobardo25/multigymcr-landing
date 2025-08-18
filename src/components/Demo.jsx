import React from 'react';
import { motion } from 'framer-motion';

const Demo = () => {
    return (
        <section id="demo" className="bg-gray-900 text-white py-20 md:py-28">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    Vea el Sistema Completo en Acción
                </motion.h2>
                <motion.p
                    className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    En esta demostración completa, verá paso a paso cómo MultiGymCr resuelve los problemas diarios de su gimnasio.
                </motion.p>

                <motion.div
                    className="mt-12 max-w-4xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-500/50">
                        {/* 👇 Se corrigió el enlace de YouTube 👇 */}
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/qmsklteIzXs" // URL corregida para embeber
                            title="Demostración de MultiGymCr"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Demo;