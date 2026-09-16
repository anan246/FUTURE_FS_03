import React from 'react';
import { REVIEWS_LIST } from '../config/business';
import { Star, Quote, MessageSquareHeart } from 'lucide-react';
import { motion } from 'framer-motion';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-brand-600" />
            <span>TESTIMONIALS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-900 tracking-tight mb-4">
            Loved By Local Foodies
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-light">
            Read authentic experiences shared by our cherished guests from Indiranagar and beyond.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_LIST.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-luxury border border-stone-100 flex flex-col justify-between hover:border-brand-300 transition-all duration-300 group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-brand-200 group-hover:text-brand-400 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-espresso-800 text-sm leading-relaxed font-light italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-300 shadow-sm"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-espresso-900 leading-none mb-1">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-sans">
                    {review.role} • <span className="text-stone-400">{review.date}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
