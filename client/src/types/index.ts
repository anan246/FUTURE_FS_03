export interface MenuItem {
  id: string;
  name: string;
  category: 'pastries' | 'coffee' | 'brunch' | 'desserts' | 'all';
  price: string;
  description: string;
  image: string;
  isPopular?: boolean;
  isSignature?: boolean;
  dietary?: ('Vegan' | 'Vegetarian' | 'Gluten-Free' | 'Chef Special')[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'pastries' | 'drinks' | 'dining' | 'ambiance';
  image: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
  caption: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  subTagline: string;
  type: string;
  storyTitle: string;
  storyParagraphs: string[];
  establishedYear: number;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    landmark: string;
    googleMapsEmbedUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    whatsapp: string;
    instagram: string;
    facebook: string;
  };
  hours: {
    weekday: string;
    weekend: string;
    sunday: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
  signatureItem: {
    title: string;
    subtitle: string;
    name: string;
    price: string;
    description: string;
    image: string;
    highlights: string[];
  };
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'indoor' | 'patio' | 'bar';
  specialRequests?: string;
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
