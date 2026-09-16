import React from 'react';
import { MenuItem } from '../types';
import { useBooking } from '../context/BookingContext';
import { X, Sparkles, Star, Calendar, ShieldCheck, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const MenuItemModal: React.FC<MenuItemModalProps> = ({ item, onClose }) => {
  const { openBooking } = useBooking();

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl shadow-2xl border border-stone-200 max-w-2xl w-full overflow-hidden relative my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-white bg-espresso-900/70 hover:bg-espresso-900 p-2.5 rounded-full transition-colors backdrop-blur-md"
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Photography Image */}
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {item.isSignature && (
                <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Signature Dish
                </span>
              )}
              {item.isPopular && (
                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  Guest Favorite
                </span>
              )}
            </div>

            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-300 font-semibold block mb-1">
                  Artisanal Specialty
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {item.name}
                </h3>
              </div>
              <div className="bg-brand-500 text-white font-serif font-bold text-xl px-4 py-1.5 rounded-2xl shadow-lg border border-brand-300/30">
                {item.price}
              </div>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-stone-700 text-base leading-relaxed font-light">
              {item.description}
            </p>

            {/* Dietary Tags & Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100 text-xs sm:text-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-2">
                  Dietary Information
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.dietary?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-brand-50 text-brand-800 font-medium px-3 py-1 rounded-lg border border-brand-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-2">
                  Culinary Quality Guarantee
                </span>
                <div className="space-y-1.5 text-stone-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Non-GMO French Flours & Normandy Butter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Prepared Fresh Daily Every Morning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  openBooking();
                }}
                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3 rounded-xl shadow-luxury hover:shadow-glow transition-all text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table to Taste This Item</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
