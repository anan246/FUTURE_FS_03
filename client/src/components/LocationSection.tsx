import React from 'react';
import { BUSINESS_DATA } from '../config/business';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const LocationSection: React.FC = () => {
  const { location, contact } = BUSINESS_DATA;

  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS_DATA.name} ${location.address} ${location.city}`
  )}`;

  return (
    <section id="location" className="py-24 bg-warmCard/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>VISIT US</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-900 tracking-tight mb-4">
            Location & Opening Hours
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-light">
            Conveniently located on 100 Feet Road in Indiranagar. Stop by for breakfast, coffee, or dinner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: Business Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-luxury border border-stone-100 flex flex-col justify-between"
          >
            <div className="space-y-8">
              
              {/* Address Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-espresso-900 mb-1">
                    Our Address
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {location.address}<br />
                    {location.city}, {location.state} {location.zip}<br />
                    <span className="text-xs text-brand-700 font-medium">Landmark: {location.landmark}</span>
                  </p>
                </div>
              </div>

              {/* Opening Hours Schedule */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-xl font-bold text-espresso-900 mb-2">
                    Opening Hours
                  </h3>
                  <div className="space-y-2 text-sm text-stone-700 font-sans">
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="font-medium text-espresso-900">Mon – Thu:</span>
                      <span className="text-stone-600">7:30 AM – 10:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="font-medium text-espresso-900">Fri – Sat:</span>
                      <span className="text-brand-700 font-medium">7:30 AM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-medium text-espresso-900">Sunday:</span>
                      <span className="text-stone-600">8:00 AM – 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-espresso-900 mb-1">
                    Direct Contact
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    Phone: <a href={`tel:${contact.phone}`} className="text-brand-600 hover:underline font-medium">{contact.phone}</a><br />
                    WhatsApp: <a href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} className="text-emerald-600 hover:underline font-medium">{contact.displayPhone}</a><br />
                    Email: <a href={`mailto:${contact.email}`} className="text-brand-600 hover:underline">{contact.email}</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Directions Action Button */}
            <div className="pt-8 mt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3 px-6 rounded-xl shadow-luxury transition-all text-center flex items-center justify-center gap-2 text-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-200" />
              </a>
            </div>

          </motion.div>

          {/* RIGHT: Embedded Google Map / Location Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-stone-900 rounded-3xl overflow-hidden shadow-luxury border border-stone-100 relative min-h-[440px] flex flex-col group"
          >
            <iframe
              title="L'Étoile Artisanal Cafe Location Map"
              src={location.googleMapsEmbedUrl}
              className="w-full h-full min-h-[440px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlapping Map Badge */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto bg-espresso-900/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-xl border border-brand-500/30 flex items-center justify-between gap-4 pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 border border-brand-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-100 leading-tight">
                    {BUSINESS_DATA.name}
                  </h4>
                  <p className="text-xs text-stone-300 font-light">
                    42, 100 Feet Road, Indiranagar
                  </p>
                </div>
              </div>

              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-500 hover:bg-brand-600 text-white text-xs font-medium px-3.5 py-2 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-1.5"
              >
                <span>Open Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
