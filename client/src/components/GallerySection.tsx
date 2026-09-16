import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../config/business';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Camera, Eye, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pastries' | 'drinks' | 'dining' | 'ambiance'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Moments' },
    { id: 'pastries', label: 'Pastries & Breads' },
    { id: 'drinks', label: 'Coffee & Drinks' },
    { id: 'dining', label: 'Brunch Dishes' },
    { id: 'ambiance', label: 'Cafe Ambiance' },
  ];

  const filteredGallery = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredGallery.findIndex((i) => i.id === activeLightboxItem.id);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredGallery.length;
      setActiveLightboxItem(filteredGallery[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
      setActiveLightboxItem(filteredGallery[prevIndex]);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-brand-600" />
            <span>TAKE A LOOK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-900 tracking-tight mb-4">
            Visual Gallery & Moments
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-light">
            Step inside L'Étoile through our lens—from morning sourdough pulls to golden evening conversations.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-brand-500 text-white shadow-luxury scale-105'
                    : 'bg-white text-espresso-700 hover:bg-brand-100 border border-stone-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Responsive Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative rounded-2xl overflow-hidden shadow-luxury border border-stone-100 bg-espresso-900 cursor-pointer h-72 sm:h-80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Hover Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center gap-1.5 text-xs text-brand-300 uppercase tracking-widest font-semibold mb-1">
                      <Eye className="w-3.5 h-3.5" />
                      View Image
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-stone-300 text-xs font-light line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Corner Sparkle indicator */}
                <div className="absolute top-4 right-4 bg-espresso-900/60 backdrop-blur-md p-2 rounded-full text-white/80 group-hover:scale-110 group-hover:bg-brand-500 transition-all">
                  <Sparkles className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={!!activeLightboxItem}
        currentItem={activeLightboxItem}
        items={filteredGallery}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
};
