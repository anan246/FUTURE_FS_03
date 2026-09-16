import React from 'react';
import { CHEF_PROFILES } from '../config/business';
import { Award, Sparkles, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

export const ChefSection: React.FC = () => {
  return (
    <section className="py-24 bg-espresso-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-brand-500/30">
            <Utensils className="w-3.5 h-3.5 text-brand-400" />
            <span>BEHIND THE APRON</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-stone-100">
            Master Artisans & Craftsmanship
          </h2>

          <p className="text-stone-400 text-base sm:text-lg font-light">
            Meet the visionary founders behind L'Étoile's French sourdough tradition and single-origin coffee program.
          </p>
        </div>

        {/* Chef Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CHEF_PROFILES.map((chef, idx) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-espresso-900/90 rounded-3xl overflow-hidden border border-brand-500/20 shadow-2xl flex flex-col sm:flex-row group hover:border-brand-500/40 transition-colors"
            >
              {/* Image */}
              <div className="sm:w-1/2 relative h-72 sm:h-auto overflow-hidden shrink-0">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent sm:hidden" />
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{chef.role}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    {chef.name}
                  </h3>

                  <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {chef.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-300 font-medium">
                  <Award className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{chef.accolades}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
