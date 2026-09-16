import React from 'react';
import { BUSINESS_DATA } from '../config/business';
import { ArrowRight, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&q=80&auto=format&fit=crop"
                alt="Bakers preparing artisanal sourdough bread"
                className="w-full h-[480px] sm:h-[560px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:bottom-6 sm:-right-6 bg-espresso-900 text-white p-6 rounded-2xl shadow-2xl border border-brand-500/30 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-300">Est. {BUSINESS_DATA.establishedYear}</h4>
                  <p className="text-xs text-stone-400">Authentic French Craft</p>
                </div>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                "Every sourdough loaf undergoes a 72-hour slow cold fermentation for unparalleled flavor & crisp crust."
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold tracking-wider uppercase">
              <HeartHandshake className="w-3.5 h-3.5 text-brand-600" />
              <span>OUR STORY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-900 tracking-tight leading-tight">
              {BUSINESS_DATA.storyTitle}
            </h2>

            <div className="space-y-4 text-espresso-700 text-base sm:text-lg leading-relaxed font-normal">
              {BUSINESS_DATA.storyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Key Stats Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-brand-500/15">
              {BUSINESS_DATA.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-600 block">
                    {stat.value}
                  </span>
                  <span className="text-xs text-espresso-600 font-medium leading-snug block mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-espresso-900 hover:bg-espresso-800 text-white font-medium px-7 py-3.5 rounded-full shadow-luxury transition-all transform hover:-translate-y-0.5 text-sm"
              >
                <span>Discover Our Menu</span>
                <ArrowRight className="w-4 h-4 text-brand-400" />
              </a>

              <div className="flex items-center gap-2 text-xs font-medium text-espresso-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Organic Flours & Pure French Butter</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
