import React from 'react';
import { BUSINESS_DATA } from '../config/business';
import { useBooking } from '../context/BookingContext';
import { Phone, MessageCircle, Calendar, MapPin } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const { openBooking } = useBooking();
  const { contact, location } = BUSINESS_DATA;

  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    "Hello L'Étoile Cafe! I'd like to inquire about table availability and bakery items."
  )}`;

  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS_DATA.name} ${location.address} ${location.city}`
  )}`;

  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
        
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          
          {/* Tooltip */}
          <span className="absolute right-14 bg-espresso-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-stone-700 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${contact.phone}`}
          className="bg-espresso-900 hover:bg-espresso-800 text-brand-300 p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-brand-500/30 group relative"
          aria-label="Call L'Étoile Cafe"
        >
          <Phone className="w-6 h-6" />

          {/* Tooltip */}
          <span className="absolute right-14 bg-espresso-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-stone-700 pointer-events-none">
            Call Us: {contact.displayPhone}
          </span>
        </a>

      </div>

      {/* Mobile Sticky Action Bar (Bottom Fixed) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-espresso-950/95 backdrop-blur-lg border-t border-brand-500/20 py-2.5 px-4 md:hidden flex items-center justify-between shadow-2xl">
        <a
          href={`tel:${contact.phone}`}
          className="flex flex-col items-center gap-1 text-stone-300 hover:text-white transition-colors text-[11px]"
        >
          <Phone className="w-4 h-4 text-brand-400" />
          <span>Call Us</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-stone-300 hover:text-emerald-400 transition-colors text-[11px]"
        >
          <MessageCircle className="w-4 h-4 text-emerald-500" />
          <span>WhatsApp</span>
        </a>

        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-stone-300 hover:text-white transition-colors text-[11px]"
        >
          <MapPin className="w-4 h-4 text-brand-400" />
          <span>Map</span>
        </a>

        <button
          onClick={openBooking}
          className="bg-brand-500 text-white font-medium text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Table</span>
        </button>
      </div>
    </>
  );
};
