import React, { useState } from 'react';
import { MENU_ITEMS } from '../config/business';
import { MenuItem } from '../types';
import { MenuItemModal } from './MenuItemModal';
import { useBooking } from '../context/BookingContext';
import { Sparkles, Search, Utensils, Star, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MenuSection: React.FC = () => {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState<'all' | 'pastries' | 'coffee' | 'brunch' | 'desserts'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'pastries', label: 'Artisanal Pastries' },
    { id: 'coffee', label: 'Specialty Coffee' },
    { id: 'brunch', label: 'All-Day Brunch' },
    { id: 'desserts', label: 'Gourmet Desserts' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-warmCard/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Utensils className="w-3.5 h-3.5 text-brand-600" />
            <span>WHAT WE OFFER</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-900 tracking-tight mb-4">
            Handcrafted Menu & Culinary Crafts
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-light">
            Every item is baked fresh, brewed to gold standards, and prepared using non-GMO local ingredients and Normandy cultured butter.
          </p>

          {/* Search bar & Category Tabs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-brand-500 text-white shadow-luxury scale-105'
                      : 'bg-white text-espresso-700 hover:bg-brand-100 border border-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menu..."
                className="w-full bg-white text-sm pl-10 pr-4 py-2 rounded-full border border-stone-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-espresso-900 placeholder:text-stone-400"
              />
            </div>

          </div>
        </div>

        {/* Menu Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-luxury border border-stone-100 hover:border-brand-300 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Card Image Header */}
                    <div
                      onClick={() => setSelectedItem(item)}
                      className="relative h-56 overflow-hidden cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-espresso-900/90 backdrop-blur-md text-amber-300 font-serif font-bold text-lg px-3.5 py-1 rounded-full shadow-lg border border-brand-500/30">
                        {item.price}
                      </div>

                      {/* Quick Inspect Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-espresso-900/90 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                          <Eye className="w-3.5 h-3.5 text-brand-400" />
                          <span>View Details</span>
                        </span>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                        {item.isSignature && (
                          <span className="bg-brand-500 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Signature
                          </span>
                        )}
                        {item.isPopular && (
                          <span className="bg-amber-500 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                            <Star className="w-3 h-3 fill-white" />
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Dietary Badges overlay */}
                      {item.dietary && item.dietary.length > 0 && (
                        <div className="absolute bottom-3 left-4 flex flex-wrap gap-1">
                          {item.dietary.map((tag) => (
                            <span
                              key={tag}
                              className="bg-white/85 backdrop-blur-md text-espresso-900 text-[11px] font-medium px-2 py-0.5 rounded-md shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3
                        onClick={() => setSelectedItem(item)}
                        className="font-serif text-xl font-bold text-espresso-900 mb-2 group-hover:text-brand-600 transition-colors cursor-pointer"
                      >
                        {item.name}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed font-light mb-4">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="px-6 pb-6 pt-0 flex gap-2">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="w-1/2 border border-stone-200 hover:bg-stone-100 text-stone-700 font-medium py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-stone-500" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={openBooking}
                      className="w-1/2 bg-brand-500 hover:bg-brand-600 text-white font-medium py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1 shadow-md"
                    >
                      <span>Reserve</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-stone-500 text-lg">No items match your search. Try another category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Dish Detail Modal */}
      <MenuItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
