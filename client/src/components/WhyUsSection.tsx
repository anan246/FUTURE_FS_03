import React from 'react';
import { VALUES_LIST } from '../config/business';
import { Wheat, Coffee, Sparkles, Heart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wheat':
        return <Wheat className="w-6 h-6 text-brand-500" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-brand-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-500" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-brand-500" />;
      default:
        return <Shield className="w-6 h-6 text-brand-500" />;
    }
  };

  return (
    <section className="py-20 bg-cream border-y border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-700 block mb-2">
            THE L'ÉTOILE DIFFERENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900">
            Why Food & Coffee Lovers Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES_LIST.map((value, idx) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-luxury border border-stone-100 hover:border-brand-300 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                {getIcon(value.icon)}
              </div>

              <h3 className="font-serif text-xl font-bold text-espresso-900 mb-3 group-hover:text-brand-600 transition-colors">
                {value.title}
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
