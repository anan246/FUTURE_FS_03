import React from 'react';
import { BookingProvider } from './context/BookingContext';
import { ToastContainer } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { ChefSection } from './components/ChefSection';
import { MenuSection } from './components/MenuSection';
import { SignatureSection } from './components/SignatureSection';
import { WhyUsSection } from './components/WhyUsSection';
import { GallerySection } from './components/GallerySection';
import { PromoBanner } from './components/PromoBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { BookingModal } from './components/BookingModal';
import { ContactSection } from './components/ContactSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-cream flex flex-col font-sans selection:bg-brand-500 selection:text-white">
        <ToastContainer />
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <StorySection />
          <ChefSection />
          <MenuSection />
          <SignatureSection />
          <WhyUsSection />
          <GallerySection />
          <PromoBanner />
          <ReviewsSection />
          <FaqSection />
          <LocationSection />
          <ContactSection />
        </main>

        <Footer />
        <BookingModal />
        <FloatingActions />
      </div>
    </BookingProvider>
  );
};

export default App;
