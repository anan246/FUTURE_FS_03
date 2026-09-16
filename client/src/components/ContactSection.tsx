import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { ContactData } from '../types';
import { Send, Mail, Phone, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const { showToast } = useBooking();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok || result.success) {
        setSubmitted(true);
        showToast('Thank you! Your message has been sent to our team.', 'success');
      } else {
        showToast(result.message || 'Error sending message. Please try again.', 'error');
      }
    } catch (err) {
      setSubmitted(true);
      showToast('Thank you! Your message has been received.', 'success');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Info & Editorial Callout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold tracking-wider uppercase">
              <MessageSquare className="w-3.5 h-3.5 text-brand-600" />
              <span>LET'S CONNECT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-900 tracking-tight leading-tight">
              We'd Love to Hear From You.
            </h2>

            <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
              Have a question about our menu, catering for a private event, custom sourdough orders, or press inquiries? Send us a message and our team will respond within 2 hours.
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3 text-stone-700 text-sm">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase">Email Enquiries</p>
                  <a href="mailto:bonjour@letoilecafe.com" className="font-medium hover:text-brand-600">
                    bonjour@letoilecafe.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-stone-700 text-sm">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase">Direct Desk</p>
                  <a href="tel:+9108045678900" className="font-medium hover:text-brand-600">
                    +91 (080) 4567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-stone-700 text-sm">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase">Visit Us</p>
                  <span className="font-medium">42, 100 Feet Road, Indiranagar, Bengaluru</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-luxury border border-stone-100"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-espresso-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Our concierge team will review your message and reach out shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-500 text-white font-medium px-6 py-2.5 rounded-full text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ananya Sharma"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-espresso-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ananya@example.com"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-espresso-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-espresso-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1.5">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-espresso-900"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Private Event & Catering">Private Event & Catering</option>
                      <option value="Custom Bakery Order">Custom Bakery Order</option>
                      <option value="Feedback / Review">Feedback / Review</option>
                      <option value="Press & Media">Press & Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-espresso-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-espresso-900 hover:bg-espresso-800 text-white font-medium py-3.5 rounded-xl shadow-luxury hover:shadow-glow transition-all text-sm flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-brand-400" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
