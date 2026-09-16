# L'Étoile Artisanal Cafe & Bistro — Local Business Website

> **Future Interns — Full Stack Web Development Task 3 (2026)**

A production-quality, image-rich local business website built for **L'Étoile Artisanal Cafe & Bistro**, an ultra-premium local bakery and bistro located in Indiranagar, Bengaluru.

---

## 🌟 Key Features

* **Image-First Photography Layout:** Large hero photography, split story layout, signature spotlight, and full-width promotional banner.
* **Interactive Table Booking System:** Instant table reservation modal with guest count, date/time picker, seating preferences (Indoor, Garden Patio, Coffee Bar), and confetti celebration.
* **Interactive Filterable Menu:** Search bar & category filtering (Pastries, Coffee, Brunch, Desserts) with price tags and dietary badges (Vegan, Gluten-Free, Chef Special).
* **Fullscreen Lightbox Image Gallery:** Responsive masonry grid with 10+ high-resolution photographs, category filters, fullscreen view, previous/next controls, and keyboard Escape key support.
* **Centralized Data Configuration (`src/config/business.ts`):** 100% of the business name, address, hours, contact info, menu items, gallery images, and reviews are stored in a single TypeScript file for rapid re-branding.
* **Floating Mobile Action Bar & WhatsApp Integration:** 1-tap floating WhatsApp chat button, call button, and sticky mobile action bar for maximum customer reach.
* **Express.js API Backend:** Node/Express API routes (`/api/bookings`, `/api/contact`, `/api/health`) for receiving reservations and inquiries.
* **Local SEO & Schema.org JSON-LD:** Structured metadata for Google LocalBusiness ranking.

---

## 🎨 Visual Design System

* **Typography:** Elegant Playfair Display for headings paired with Plus Jakarta Sans for body readability.
* **Color Palette:** Warm European Espresso (`#1C1917`), Bronze Gold (`#B08857`), Soft Warm Cream (`#FAF8F5`).
* **Micro-Animations:** Framer Motion scroll animations, subtle zoom effects on hover, glassmorphism headers, and smooth section transitions.

---

## 🛠️ Project Structure

```
future_interns_task3/
├── client/                     # Vite + React + TypeScript Frontend
│   ├── index.html              # Entry HTML with SEO & Google Fonts
│   ├── vite.config.ts          # Vite configuration & proxy settings
│   ├── tailwind.config.js      # Custom theme, colors, and animations
│   └── src/
│       ├── config/
│       │   └── business.ts     # Central configuration file for all business data!
│       ├── context/
│       │   └── BookingContext.tsx # Global booking modal & toast state
│       ├── components/         # Modular UI section components
│       │   ├── Navbar.tsx
│       │   ├── Hero.tsx
│       │   ├── StorySection.tsx
│       │   ├── MenuSection.tsx
│       │   ├── SignatureSection.tsx
│       │   ├── WhyUsSection.tsx
│       │   ├── GallerySection.tsx
│       │   ├── LightboxModal.tsx
│       │   ├── PromoBanner.tsx
│       │   ├── ReviewsSection.tsx
│       │   ├── LocationSection.tsx
│       │   ├── BookingModal.tsx
│       │   ├── ContactSection.tsx
│       │   ├── FloatingActions.tsx
│       │   ├── Footer.tsx
│       │   └── Toast.tsx
│       ├── types/              # TypeScript interfaces
│       ├── App.tsx             # Main Application layout
│       └── main.tsx            # React DOM render entry point
├── server/                     # Node.js + Express API Backend
│   ├── src/
│   │   ├── index.ts            # Express server initialization
│   │   └── routes/
│   │       ├── bookings.ts     # Booking POST & GET endpoints
│   │       └── contact.ts      # Contact inquiry endpoints
│   └── package.json
├── CLIENT_PITCH.md             # Client pitch presentation
├── README.md                   # Project documentation
├── .env.example                # Environment variables template
└── package.json                # Root package for running both client & server
```

---

## 🚀 Installation & Setup

1. **Install Dependencies for Root, Client, and Server:**
   ```bash
   npm run install:all
   ```

2. **Run Environment Setup:**
   Copy `.env.example` to `.env` in both client and server directories if needed:
   ```bash
   cp .env.example .env
   ```

3. **Start Local Development Server (Client + Backend API):**
   ```bash
   npm run dev
   ```
   * Frontend: `http://localhost:3000`
   * Backend API: `http://localhost:5000`

---

## 🛠️ How to Customize for Another Local Business

To adapt this website for another local business (e.g. Salon, Gym, Boutique, Italian Restaurant):

1. Open `client/src/config/business.ts`.
2. Update the `BUSINESS_DATA` object (Business Name, Type, Address, Phone, Email, Tagline, Story).
3. Update `MENU_ITEMS` or `SERVICES` with relevant photography URLs, prices, and descriptions.
4. Update `GALLERY_ITEMS` and `REVIEWS_LIST`.
5. Save the file—the entire site updates automatically!

---

## 📝 Future Improvements

* MongoDB Persistent Schema Integration.
* Automated SMS/WhatsApp booking confirmation notifications via Twilio API.
* Online payment gateway integration for advance table reservation deposits.

---

*Submitted for Future Interns Full Stack Web Development Task 3 (2026).*
