import React from 'react';
import { BUSINESS_DATA } from '../config/business';
import { useBooking } from '../context/BookingContext';
import { ChevronDown, MapPin, Sparkles, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* High Quality Background Image with subtle slow zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=85&auto=format&fit=crop"
          alt="L'Étoile Artisanal Cafe & Bistro interior and courtyard"
          className="w-full h-full object-cover object-center animate-slow-zoom scale-105"
          loading="eager"
        />
        {/* Soft luxury vignette & dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-espresso-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,10,9,0.5)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        
        {/* Small Label Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/40 backdrop-blur-md text-brand-300 text-xs sm:text-sm font-medium uppercase tracking-widest mb-6 shadow-glow"
        >
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span>WELCOME TO {BUSINESS_DATA.name.toUpperCase()}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.15] mb-6"
        >
          Made With Passion. <br />
          <span className="bg-gradient-to-r from-brand-200 via-brand-400 to-amber-200 bg-clip-text text-transparent italic font-normal">
            Shared With Everyone.
          </span>
        </motion.h1>

        {/* Short Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-stone-300 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {BUSINESS_DATA.subTagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-medium px-8 py-3.5 rounded-full shadow-luxury hover:shadow-glow transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
          >
            <span>Explore Menu</span>
            <span className="text-brand-200">→</span>
          </a>

          <button
            onClick={openBooking}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-medium px-8 py-3.5 rounded-full shadow-lg transition-all text-center hover:border-brand-400/50"
          >
            Book a Table
          </button>

          <a
            href="#location"
            className="w-full sm:w-auto text-stone-300 hover:text-white font-medium px-6 py-3.5 text-sm flex items-center justify-center gap-2 transition-colors group"
          >
            <MapPin className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
            <span>Get Directions</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10 text-stone-300 text-xs sm:text-sm"
        >
          <div className="flex items-center justify-center gap-2 py-2">
            <Award className="w-4 h-4 text-brand-400 shrink-0" />
            <span>French Pastry Artisans</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2">
            <Sparkles className="w-4 h-4 text-brand-400 shrink-0" />
            <span>72h Sourdough Process</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
            <span>4.9 ★ Community Rating</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2">
            <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
            <span>Indiranagar 100 Ft Rd</span>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow indicator */}
      <a
        href="#story"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone-400 hover:text-white transition-colors animate-bounce p-2"
        aria-label="Scroll to story"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
