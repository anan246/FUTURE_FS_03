import React, { useState } from 'react';
import { BUSINESS_DATA } from '../config/business';
import { useBooking } from '../context/BookingContext';
import { Instagram, Facebook, MapPin, Phone, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { showToast } = useBooking();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast("Thank you for subscribing to L'Étoile Morning Newsletter!", 'success');
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso-950 text-stone-300 pt-20 pb-24 md:pb-12 border-t border-brand-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-serif font-bold text-xl shadow-glow">
                LÉ
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                L'ÉTOILE
              </span>
            </div>

            <p className="text-stone-400 text-sm font-light leading-relaxed">
              {BUSINESS_DATA.subTagline}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_DATA.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-500 hover:text-white flex items-center justify-center transition-colors text-stone-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_DATA.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-500 hover:text-white flex items-center justify-center transition-colors text-stone-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-white font-bold text-base tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-stone-400 font-sans">
              <li><a href="#hero" className="hover:text-brand-300 transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-brand-300 transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-brand-300 transition-colors">Menu & Offerings</a></li>
              <li><a href="#signature" className="hover:text-brand-300 transition-colors">Signature Item</a></li>
              <li><a href="#gallery" className="hover:text-brand-300 transition-colors">Visual Gallery</a></li>
              <li><a href="#reviews" className="hover:text-brand-300 transition-colors">Reviews</a></li>
              <li><a href="#location" className="hover:text-brand-300 transition-colors">Location & Hours</a></li>
              <li><a href="#contact" className="hover:text-brand-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Opening Hours & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-white font-bold text-base tracking-wide">
              Hours & Contact
            </h4>
            <div className="space-y-2 text-xs text-stone-400 leading-relaxed font-sans">
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>Mon-Thu: 7:30 AM – 10:00 PM</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>Fri-Sat: 7:30 AM – 11:00 PM</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>Sun: 8:00 AM – 10:00 PM</span>
              </p>
              <p className="flex items-center gap-2 pt-2">
                <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>{BUSINESS_DATA.location.address}, {BUSINESS_DATA.location.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>{BUSINESS_DATA.contact.phone}</span>
              </p>
            </div>
          </div>

          {/* Newsletter Signup (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-white font-bold text-base tracking-wide">
              Join Our Club
            </h4>
            <p className="text-xs text-stone-400 font-light">
              Receive invitations to private sourdough workshops, seasonal menu previews, and coffee tastings.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white/5 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium text-xs py-2.5 rounded-xl shadow-md transition-all"
              >
                Subscribe to Dispatch
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 {BUSINESS_DATA.name}. All rights reserved.</p>

          <p className="flex items-center gap-1 text-stone-400">
            <span>Crafted for</span>
            <span className="text-brand-300 font-semibold">Future Interns Full Stack Web Development – Task 3 (2026)</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
