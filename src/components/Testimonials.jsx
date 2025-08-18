import React from 'react';
import { motion } from 'framer-motion';

// ✅ Reemplaza estos datos con los de tu cliente real
const mainTestimonial = {
    quote: "MultiGymCr no solo nos ahorró dinero al eliminar el acceso de miembros vencidos, sino que nos devolvió lo más valioso: tiempo. La administración ahora es tan simple que podemos enfocarnos 100% en nuestros clientes. Lo recomiendo sin dudarlo.",
    name: "Jimmy Barrantes",
    role: "Perfect Gym Sarchi",
    imageUrl: "/mockups/jimmy.png" // <-- Pon una foto de tu cliente en `public/testimonials/cliente.jpg`
};

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        No solo lo decimos nosotros
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Vea lo que los dueños de gimnasios como usted dicen sobre MultiGymCr.
                    </p>
                </div>

                <motion.div
                    className="mt-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <figure className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                        <blockquote className="text-xl md:text-2xl font-semibold leading-snug text-gray-900">
                            <p>“{mainTestimonial.quote}”</p>
                        </blockquote>
                        <figcaption className="mt-8 flex items-center gap-4">
                            <img className="h-14 w-14 rounded-full object-cover" src={mainTestimonial.imageUrl} alt={mainTestimonial.name} />
                            <div>
                                <div className="font-bold text-gray-900">{mainTestimonial.name}</div>
                                <div className="text-gray-600">{mainTestimonial.role}</div>
                            </div>
                        </figcaption>
                    </figure>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;