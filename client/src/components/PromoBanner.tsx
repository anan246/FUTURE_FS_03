import React from 'react';
import { useBooking } from '../context/BookingContext';
import { Sparkles, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const PromoBanner: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Editorial Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80&auto=format&fit=crop"
          alt="L'Étoile Barista roasting coffee"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-espresso-950/80 backdrop-blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold tracking-wider uppercase mb-4 border border-brand-500/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>EXQUISITE EXPERIENCES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-stone-100 leading-tight"
          >
            Good Food. Good Mood. <br />
            <span className="text-brand-300 italic font-normal">Made Fresh Daily.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-300 text-base sm:text-lg font-light leading-relaxed mb-8"
          >
            Planning a morning breakfast meeting, an afternoon coffee date, or a weekend family brunch? Reserve your favorite table in advance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={openBooking}
              className="bg-brand-500 hover:bg-brand-600 text-white font-medium px-8 py-3.5 rounded-full shadow-glow transition-all transform hover:-translate-y-0.5 text-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Table Now</span>
            </button>

            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white font-medium px-7 py-3.5 rounded-full border border-white/20 transition-all text-sm"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
