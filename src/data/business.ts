// ============================================================
// CLICKNX — Business Configuration
// Performance Marketing Agency | Abu Dhabi, UAE
// ============================================================

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  stateCode: string;
  zip: string;
  country: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Business {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneTel: string;
  phoneHref: string;
  phoneSecondary: string;
  email: string;
  address: Address;
  coordinates: Coordinates;
  siteUrl: string;
  googleBusinessUrl: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
    linkedin: string;
    nextdoor: string;
    yelp: string;
  };
  licenseNumber: string;
  license: string;
  foundedYear: number;
  yearEstablished: number;
  certifications: string[];
  hours: BusinessHours[];
  emergencyService: boolean;
  emergencyCta: string;
  logo: string;
  logoWhite: string;
  ogImage: string;
}

export const business: Business = {
  // --- Identity ---
  name: 'CLICKNX',
  shortName: 'CLICKNX',
  tagline: 'Click. Connect. Convert.',
  description: 'CLICKNX is a performance marketing agency based in Abu Dhabi, specializing in paid ads, conversion rate optimization, and landing page design. We help UAE businesses scale with data-driven Google Ads, Meta Ads, and programmatic campaigns.',

  // --- Contact ---
  phone: '+971 56 611 9525',
  phoneTel: '+971566119525',
  phoneHref: 'tel:+971566119525',
  phoneSecondary: '+971 50 611 5911',
  email: 'info@clicknx.com',

  // --- Location ---
  address: {
    street: 'Mazyad Mall, Tower 1, MBZ City',
    city: 'Abu Dhabi',
    state: 'Abu Dhabi',
    stateCode: 'AUH',
    zip: '132611',
    country: 'United Arab Emirates',
  },
  coordinates: {
    lat: 24.4539,
    lng: 54.3773,
  },

  // --- Online Presence ---
  siteUrl: 'https://www.clicknx.com',
  googleBusinessUrl: '',

  // --- Social Media ---
  socialMedia: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    linkedin: '',
    nextdoor: '',
    yelp: '',
  },

  // --- Credentials ---
  licenseNumber: '',
  license: 'Abu Dhabi DED Licensed',
  foundedYear: 2023,
  yearEstablished: 2023,
  certifications: [
    'Google Ads Certified Partner',
    'Meta Business Partner',
    'Google Analytics Certified',
  ],

  // --- Operations ---
  hours: [
    { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { days: 'Saturday', hours: 'Closed' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  emergencyService: false,
  emergencyCta: '',

  // --- Branding ---
  logo: '/images/logo.svg',
  logoWhite: '/images/logo-white.svg',
  ogImage: '/images/og-image.jpg',
};

// ============================================================
// Helper Functions
// ============================================================

export function yearsInBusiness(): number {
  return new Date().getFullYear() - business.foundedYear;
}
