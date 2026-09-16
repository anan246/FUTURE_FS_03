import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxModalProps {
  isOpen: boolean;
  currentItem: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  currentItem,
  items,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  const currentIndex = items.findIndex((i) => i.id === currentItem.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/95 backdrop-blur-xl p-4 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 text-stone-400 text-xs font-mono tracking-widest bg-white/10 px-3 py-1.5 rounded-full z-50">
          {currentIndex + 1} / {items.length}
        </div>

        {/* Previous Button */}
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 p-3 sm:p-4 rounded-full transition-all hover:scale-110 z-50"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Image Content Container */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center relative"
        >
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
          />

          {/* Caption info */}
          <div className="mt-4 text-center max-w-xl">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
              {currentItem.title}
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm font-light">
              {currentItem.caption}
            </p>
          </div>
        </motion.div>

        {/* Next Button */}
        <button
          onClick={() => onNavigate('next')}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 p-3 sm:p-4 rounded-full transition-all hover:scale-110 z-50"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

      </div>
    </AnimatePresence>
  );
};
