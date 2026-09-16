import React from 'react';
import { BUSINESS_DATA } from '../config/business';
import { useBooking } from '../context/BookingContext';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const SignatureSection: React.FC = () => {
  const { openBooking } = useBooking();
  const { signatureItem } = BUSINESS_DATA;

  return (
    <section id="signature" className="py-24 bg-espresso-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold tracking-wider uppercase border border-brand-500/30">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>{signatureItem.title}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-stone-100">
              {signatureItem.subtitle}
            </h2>

            <div className="inline-block bg-brand-500/20 text-brand-300 font-serif font-bold text-2xl px-4 py-1.5 rounded-xl border border-brand-500/40">
              Special Price: {signatureItem.price}
            </div>

            <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
              {signatureItem.description}
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {signatureItem.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={openBooking}
                className="bg-brand-500 hover:bg-brand-600 text-white font-medium px-8 py-3.5 rounded-full shadow-glow transition-all transform hover:-translate-y-0.5 text-sm flex items-center gap-2"
              >
                <span>Reserve Signature Tasting</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-500/30 group">
              <img
                src={signatureItem.image}
                alt={signatureItem.name}
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-espresso-900/90 backdrop-blur-md border border-white/10">
                <p className="text-xs uppercase tracking-widest text-brand-400 font-semibold mb-1">
                  Handmade Daily by Chef Julien
                </p>
                <h3 className="font-serif text-xl font-bold text-white">
                  {signatureItem.name}
                </h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
