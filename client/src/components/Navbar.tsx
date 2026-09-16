import React, { useState, useEffect } from 'react';
import { BUSINESS_DATA } from '../config/business';
import { useBooking } from '../context/BookingContext';
import { Menu, X, Phone, Clock, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Story', href: '#story' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Signature', href: '#signature' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-luxury border-b border-brand-500/10 text-espresso-900'
          : 'bg-gradient-to-b from-espresso-950/95 via-espresso-950/70 to-transparent text-white'
      }`}
    >
      {/* Top Banner Info Line */}
      <div
        className={`bg-espresso-950/80 border-b border-white/10 text-stone-300 text-xs transition-all duration-300 ${
          isScrolled ? 'max-h-0 py-0 opacity-0 overflow-hidden border-none' : 'max-h-12 py-2 opacity-100'
        } hidden md:block font-sans px-4`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-brand-300 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              {BUSINESS_DATA.location.address}, {BUSINESS_DATA.location.city}
            </span>
            <span className="flex items-center gap-1.5 hover:text-brand-300 transition-colors">
              <Clock className="w-3.5 h-3.5 text-brand-400" />
              Open Daily: {BUSINESS_DATA.hours.weekday.split('(')[0]}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_DATA.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-brand-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              {BUSINESS_DATA.contact.phone}
            </a>
            <span className="bg-brand-500/20 text-brand-300 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-brand-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-400" />
              Fresh Bakery Batch at 8 AM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-serif font-bold text-xl shadow-glow group-hover:scale-105 transition-transform">
            LÉ
          </div>
          <div>
            <span className={`font-serif text-2xl font-bold tracking-tight block leading-none ${isScrolled ? 'text-espresso-900' : 'text-white'}`}>
              L'ÉTOILE
            </span>
            <span className={`text-[10px] tracking-widest uppercase font-sans font-semibold block mt-0.5 ${isScrolled ? 'text-brand-700' : 'text-brand-300'}`}>
              Artisanal Cafe & Bistro
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-brand-500 ${
                isScrolled ? 'text-espresso-800' : 'text-stone-200'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={openBooking}
            className="bg-brand-500 hover:bg-brand-600 text-white font-medium text-sm px-6 py-2.5 rounded-full shadow-luxury hover:shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Book a Table
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={openBooking}
            className="bg-brand-500 text-white text-xs px-3.5 py-1.5 rounded-full font-medium shadow-md"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-espresso-900 hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-espresso-900/98 backdrop-blur-xl border-b border-brand-500/20 text-stone-200 lg:hidden shadow-2xl py-6 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-wide py-2 border-b border-white/5 text-stone-100 hover:text-brand-400 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-brand-400">→</span>
                </a>
              ))}
              
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBooking();
                  }}
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white py-3 rounded-xl font-medium text-center shadow-lg"
                >
                  Book a Table Now
                </button>

                <a
                  href={`tel:${BUSINESS_DATA.contact.phone}`}
                  className="w-full border border-stone-700 text-stone-300 py-2.5 rounded-xl font-medium text-center text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-400" />
                  Call Us: {BUSINESS_DATA.contact.displayPhone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
