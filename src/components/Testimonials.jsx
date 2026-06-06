import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const mainTestimonial = {
  quote: "MultiGymCr no solo nos ahorró dinero al eliminar el acceso de miembros vencidos, sino que nos devolvió lo más valioso: tiempo. La administración ahora es tan simple que podemos enfocarnos 100% en nuestros clientes. Lo recomiendo sin dudarlo.",
  name: "Jimmy Barrantes",
  role: "Perfect Gym Sarchi",
  imageUrl: "/mockups/jimmy.png"
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900 to-surface-950" />
      <div className="absolute inset-0 bg-mesh opacity-40" style={{
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
      }} />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            No solo lo decimos nosotros
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-surface-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Vea lo que los dueños de gimnasios como usted dicen sobre MultiGymCr.
          </motion.p>
        </div>

        <motion.div
          className="mt-14 sm:mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <figure className="relative glass-card rounded-2xl p-8 md:p-12">
            {/* Decorative quote */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-brand-500/10 fill-brand-500/10" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-surface-200 relative z-10">
              <p>"{mainTestimonial.quote}"</p>
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4">
              <div className="relative">
                {/* Gradient ring around image */}
                <div className="absolute -inset-1 bg-gradient-to-br from-brand-500 to-accent-500 rounded-full opacity-60" />
                <img
                  className="relative h-14 w-14 rounded-full object-cover ring-2 ring-surface-900"
                  src={mainTestimonial.imageUrl}
                  alt={mainTestimonial.name}
                />
              </div>
              <div>
                <div className="font-bold text-white text-lg">{mainTestimonial.name}</div>
                <div className="text-surface-400">{mainTestimonial.role}</div>
              </div>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;