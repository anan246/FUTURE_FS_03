import { BusinessConfig, MenuItem, GalleryItem, Review, ValueItem } from '../types';

export interface ChefProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  accolades: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const CHEF_PROFILES: ChefProfile[] = [
  {
    id: "c1",
    name: "Chef Julien Vance",
    role: "Executive Pastry Chef & Co-Founder",
    bio: "Trained at the prestigious École Lenôtre in Paris, Chef Julien brings over 15 years of classical French boulangerie experience. His signature 72-hour cold-fermentation process is celebrated across South Asia.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80&auto=format&fit=crop",
    accolades: "Grand Diplôme de Pâtisserie • Paris"
  },
  {
    id: "c2",
    name: "Meera Rao",
    role: "Head of Coffee & Co-Founder",
    bio: "National Barista Champion and certified Q-Grader. Meera personally visits micro-lot coffee estates in Chikmagalur & Coorg every harvest to select single-origin crops roasted in-house.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80&auto=format&fit=crop",
    accolades: "SCA Certified Q-Grader & Roaster"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "fq1",
    question: "Do I need a reservation or can I walk in?",
    answer: "Walk-ins are always welcome! However, for weekend brunches (Friday – Sunday 9:00 AM – 3:00 PM) and evening dining, we strongly recommend reserving a table in advance to guarantee your preferred seating area."
  },
  {
    id: "fq2",
    question: "Are your outdoor patio tables pet-friendly?",
    answer: "Yes! Our garden patio is 100% pet-friendly. We even provide complimentary organic treats and fresh water bowls for your furry companions."
  },
  {
    id: "fq3",
    question: "Do you accommodate vegan, gluten-free, or nut-free dietary needs?",
    answer: "Absolutely. Over 40% of our menu features vegan and gluten-free items clearly labeled with dietary tags. Please let your server know of any severe allergies so our kitchen can take extra precautions."
  },
  {
    id: "fq4",
    question: "Is valet parking available at Indiranagar?",
    answer: "Yes, complimentary valet parking is available right in front of our main entrance on 100 Feet Road every day from 8:00 AM until closing."
  },
  {
    id: "fq5",
    question: "Can I order custom cakes or sourdough loaves for private events?",
    answer: "Yes! We craft custom artisanal celebration tarts, wedding cakes, and catering boxes. Please submit a request via our Contact form at least 48 hours in advance."
  }
];

export const BUSINESS_DATA: BusinessConfig = {
  name: "L'Étoile Artisanal Cafe & Bistro",
  tagline: "Made With Passion. Shared With Everyone.",
  subTagline: "Authentic French sourdough baking, single-origin estate coffee craft, and seasonal farm-to-table bistro dining in an intimate European setting.",
  type: "Artisanal Bakery & Gourmet Bistro",
  storyTitle: "A Culinary Sanctuary in the Heart of the City.",
  storyParagraphs: [
    "Founded in 2019 by Master Pastry Chef Julien Vance and Barista Champion Meera Rao, L'Étoile was born out of a shared dream: to create an sanctuary where slow-fermented French baking meets ethical single-origin coffee craft.",
    "Every morning before dawn, our bakers laminate pure European butter into 84-layer croissants using a traditional 72-hour cold fermentation process. Our espresso beans are hand-selected from micro-lot farms in Coorg and Chikmagalur, roasted weekly in small batches to preserve their floral and chocolate notes.",
    "Whether you're stopping by for your morning cortado, lingering over a sourdough brunch on our sunlit patio, or sharing an evening dessert with someone special, L'Étoile is crafted to feel like your second home."
  ],
  establishedYear: 2019,
  location: {
    address: "42, 100 Feet Road, Indiranagar",
    city: "Bengaluru",
    state: "Karnataka",
    zip: "560038",
    landmark: "Opposite Metro Pillar 84, Indiranagar 1st Stage",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=100+Feet+Road,+Indiranagar,+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      lat: 12.972741,
      lng: 77.641186,
    },
  },
  contact: {
    phone: "+91 (080) 4567-8900",
    displayPhone: "+91 98765 43210",
    email: "bonjour@letoilecafe.com",
    whatsapp: "+919876543210",
    instagram: "https://instagram.com/letoile.bistro",
    facebook: "https://facebook.com/letoilecafe",
  },
  hours: {
    weekday: "7:30 AM – 10:00 PM (Mon - Thu)",
    weekend: "7:30 AM – 11:00 PM (Fri - Sat)",
    sunday: "8:00 AM – 10:00 PM (Sun)",
  },
  stats: [
    { label: "Sourdough Cold Fermentation", value: "72h" },
    { label: "Freshly Baked Batches", value: "100%" },
    { label: "Micro-Lot Coffee Beans", value: "12+" },
    { label: "Five-Star Community Reviews", value: "4.9 ★" },
  ],
  signatureItem: {
    title: "THE CHEF'S SIGNATURE PAIRING",
    subtitle: "Golden Butter Croissant & Wildflower Truffle Honey Cortado",
    name: "Golden Normandy Croissant & Smoked Truffle Cortado",
    price: "₹480",
    description: "An iconic combination featuring our 84-layer flaky butter croissant baked fresh every 3 hours, paired with a velvety cortado infused with organic Wildflower Truffle Honey and single-origin espresso.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000&q=80&auto=format&fit=crop",
    highlights: [
      "84 Layers of European Cultured Butter",
      "72-Hour Cold Fermentation Dough",
      "Ethically Sourced Single-Origin Coffee",
      "Freshly Baked Every 3 Hours"
    ],
  },
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Classic French Butter Croissant",
    category: "pastries",
    price: "₹220",
    description: "Golden, crisp on the outside with light, airy honeycomb interior. Crafted with 84% French Normandy cultured butter.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80&auto=format&fit=crop",
    isPopular: true,
    isSignature: true,
    dietary: ["Vegetarian", "Chef Special"]
  },
  {
    id: "m2",
    name: "Valrhona Pain au Chocolat",
    category: "pastries",
    price: "₹260",
    description: "Flaky laminated pastry filled with double batons of rich 64% Valrhona dark chocolate from France.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80&auto=format&fit=crop",
    isPopular: true,
    dietary: ["Vegetarian"]
  },
  {
    id: "m3",
    name: "Almond & Vanilla Frangipane Flake",
    category: "pastries",
    price: "₹290",
    description: "Double-baked croissant soaked in Madagascar vanilla syrup, stuffed with rich almond cream and toasted almond flakes.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80&auto=format&fit=crop",
    dietary: ["Vegetarian"]
  },
  {
    id: "m4",
    name: "Chikmagalur Single-Origin V60",
    category: "coffee",
    price: "₹240",
    description: "Precision V60 pour-over using light-roasted beans. Delicate tasting notes of jasmine, wild blueberry, and subtle milk chocolate.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80&auto=format&fit=crop",
    isPopular: true,
    dietary: ["Vegan"]
  },
  {
    id: "m5",
    name: "Smoked Honey & Cinnamon Oat Latte",
    category: "coffee",
    price: "₹280",
    description: "Double espresso shot shaken with creamy oat milk, infused with house-smoked organic honey and a dusted cinnamon crown.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80&auto=format&fit=crop",
    isSignature: true,
    dietary: ["Vegetarian"]
  },
  {
    id: "m6",
    name: "Iced Spanish Cortado",
    category: "coffee",
    price: "₹260",
    description: "Concentrated Ristretto over chilled condensed milk and milk ice sphere for an intoxicating sweet balance.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80&auto=format&fit=crop",
    dietary: ["Vegetarian"]
  },
  {
    id: "m7",
    name: "Avocado & Truffle Burrata Sourdough",
    category: "brunch",
    price: "₹490",
    description: "Toasted sourdough slice, smashed Hass avocado, fresh Italian burrata, heirloom cherry tomatoes, and black truffle oil drizzle.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80&auto=format&fit=crop",
    isPopular: true,
    isSignature: true,
    dietary: ["Vegetarian", "Chef Special"]
  },
  {
    id: "m8",
    name: "Wild Mushroom & Aged Gruyère Brioche",
    category: "brunch",
    price: "₹450",
    description: "Sautéed shiitake and oyster mushrooms in garlic thyme butter, melted aged Gruyère cheese on toasted house brioche.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80&auto=format&fit=crop",
    dietary: ["Vegetarian"]
  },
  {
    id: "m9",
    name: "Eggs Benedict Royale",
    category: "brunch",
    price: "₹520",
    description: "Poached free-range eggs, smoked Norwegian salmon, silky saffron hollandaise on a split warm butter muffin.",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80&auto=format&fit=crop",
    isPopular: true,
    dietary: ["Chef Special"]
  },
  {
    id: "m10",
    name: "Bronte Pistachio & Raspberry Tart",
    category: "desserts",
    price: "₹340",
    description: "Crisp sweet pastry crust, Bronte pistachio mousse, fresh raspberries, and edible 24k gold leaf accent.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=800&q=80&auto=format&fit=crop",
    isSignature: true,
    dietary: ["Vegetarian"]
  },
  {
    id: "m11",
    name: "Classic French Opera Gateau",
    category: "desserts",
    price: "₹360",
    description: "Layers of almond sponge soaked in coffee syrup, dark chocolate ganache, and coffee buttercream.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80&auto=format&fit=crop",
    dietary: ["Vegetarian"]
  },
  {
    id: "m12",
    name: "Artisanal Basque Burnt Cheesecake",
    category: "desserts",
    price: "₹320",
    description: "Caramelized crust with an ultra-creamy, melt-in-the-mouth center. Served with seasonal berry compote.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80&auto=format&fit=crop",
    isPopular: true,
    dietary: ["Gluten-Free", "Vegetarian"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Handcrafted Sourdough Loaves",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&q=80&auto=format&fit=crop",
    aspectRatio: "portrait",
    caption: "Our 72-hour sourdough loaves freshly pulled from our stone deck ovens."
  },
  {
    id: "g2",
    title: "Master Barista Pour-Over",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&q=80&auto=format&fit=crop",
    aspectRatio: "square",
    caption: "Precision coffee extraction using single-origin beans roasted weekly."
  },
  {
    id: "g3",
    title: "Sunlit Courtyard Dining",
    category: "ambiance",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=80&auto=format&fit=crop",
    aspectRatio: "wide",
    caption: "Our outdoor garden patio illuminated by natural daylight and lush greenery."
  },
  {
    id: "g4",
    title: "Golden Butter Croissants",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000&q=80&auto=format&fit=crop",
    aspectRatio: "square",
    caption: "84 layers of European butter baked to crisp perfection."
  },
  {
    id: "g5",
    title: "Avocado Burrata Brunch",
    category: "dining",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1000&q=80&auto=format&fit=crop",
    aspectRatio: "portrait",
    caption: "Signature brunch dish served on warm rustic artisan sourdough."
  },
  {
    id: "g6",
    title: "Artisan Espresso Bar",
    category: "ambiance",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&q=80&auto=format&fit=crop",
    aspectRatio: "landscape",
    caption: "Sleek brass and marble coffee bar designed for the ultimate coffee experience."
  },
  {
    id: "g7",
    title: "Velvety Latte Art",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1000&q=80&auto=format&fit=crop",
    aspectRatio: "square",
    caption: "Creamy micro-foam poured with care into every single cup."
  },
  {
    id: "g8",
    title: "French Pastry Display Case",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1000&q=80&auto=format&fit=crop",
    aspectRatio: "landscape",
    caption: "Our morning selection of tarts, eclairs, and pain au chocolat."
  },
  {
    id: "g9",
    title: "Cozy Evening Interiors",
    category: "ambiance",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80&auto=format&fit=crop",
    aspectRatio: "portrait",
    caption: "Warm pendant lights and leather banquettes for intimate conversations."
  },
  {
    id: "g10",
    title: "Basque Burnt Cheesecake",
    category: "dining",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=1000&q=80&auto=format&fit=crop",
    aspectRatio: "square",
    caption: "Fresh out of the oven cheesecake with rustic caramelized crust."
  }
];

export const VALUES_LIST: ValueItem[] = [
  {
    id: "v1",
    title: "72-Hour Fermentation",
    description: "Our sourdough doughs undergo slow cold fermentation over 3 days, yielding complex aromas, honeycomb aeration, and optimal digestibility.",
    icon: "Wheat"
  },
  {
    id: "v2",
    title: "Ethically Sourced Beans",
    description: "Direct-trade beans directly sourced from sustainable high-altitude estates in South India, roasted in small batches every Monday.",
    icon: "Coffee"
  },
  {
    id: "v3",
    title: "Zero Artificial Additives",
    description: "We use 100% natural ingredients—pure Normandy butter, organic flour, real Madagascar vanilla, and zero preservatives.",
    icon: "Sparkles"
  },
  {
    id: "v4",
    title: "Warm Local Community",
    description: "Proudly serving Indiranagar with pet-friendly outdoor seating, complimentary valet parking, high-speed WiFi, and genuine warmth every day.",
    icon: "Heart"
  }
];

export const REVIEWS_LIST: Review[] = [
  {
    id: "r1",
    name: "Ananya Sharma",
    role: "Food & Lifestyle Critic",
    rating: 5,
    comment: "L'Étoile has completely raised the bar for bakeries in Bengaluru. The croissant is flakey perfection—literally 84 layers of heaven! The truffle honey cortado is a masterpiece.",
    date: "2 days ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80&auto=format&fit=crop"
  },
  {
    id: "r2",
    name: "Rohan Kulkarni",
    role: "Local Resident",
    rating: 5,
    comment: "My morning ritual for the last 2 years! The ambiance is so calming, the staff remembers your name and order, and the sourdough avocado toast is unmatched.",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&auto=format&fit=crop"
  },
  {
    id: "r3",
    name: "Claire Dubois",
    role: "Parisian Traveler",
    rating: 5,
    comment: "Being from Paris, I am very picky about my pastries. L'Étoile's pain au chocolat tastes like it came straight out of a boulangerie in Montmartre. Outstanding!",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80&auto=format&fit=crop"
  },
  {
    id: "r4",
    name: "Vikram Nair",
    role: "Tech Entrepreneur",
    rating: 5,
    comment: "Great wifi, exquisite pour-overs, and an outdoor patio that feels like a quiet sanctuary right on 100 Feet Road. Hosted several client catchups here.",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80&auto=format&fit=crop"
  }
];
