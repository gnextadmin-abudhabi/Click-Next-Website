// ============================================================
// CLICKNX — Service Areas
// UAE cities and districts served by CLICKNX
// ============================================================

export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  state: string;
  zipCodes: string[];
  population: number;
  lat: number;
  lng: number;
  description: string;
  featured: boolean;
  nearby: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'abu-dhabi',
    name: 'Abu Dhabi',
    county: 'Abu Dhabi Emirate',
    state: 'UAE',
    zipCodes: [],
    population: 1500000,
    lat: 24.4539,
    lng: 54.3773,
    description: 'Performance marketing and paid ads management in Abu Dhabi. CLICKNX helps local businesses scale with Google Ads, Meta Ads, and conversion rate optimization across the capital.',
    featured: true,
    nearby: ['khalifa-city', 'yas-island'],
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    county: 'Dubai Emirate',
    state: 'UAE',
    zipCodes: [],
    population: 3600000,
    lat: 25.2048,
    lng: 55.2708,
    description: 'Performance marketing agency in Dubai. Data-driven PPC campaigns, landing page optimization, and paid social ads for Dubai businesses looking to maximize ROI.',
    featured: true,
    nearby: ['abu-dhabi', 'sharjah'],
  },
  {
    slug: 'sharjah',
    name: 'Sharjah',
    county: 'Sharjah Emirate',
    state: 'UAE',
    zipCodes: [],
    population: 1800000,
    lat: 25.3463,
    lng: 55.4209,
    description: 'Targeted digital advertising and conversion optimization for Sharjah businesses. Google Ads, Meta campaigns, and data-driven growth strategies.',
    featured: true,
    nearby: ['dubai', 'ajman'],
  },
  {
    slug: 'ajman',
    name: 'Ajman',
    county: 'Ajman Emirate',
    state: 'UAE',
    zipCodes: [],
    population: 500000,
    lat: 25.4052,
    lng: 55.5136,
    description: 'Performance marketing services in Ajman. PPC management, social media advertising, and landing page design for businesses seeking measurable growth.',
    featured: false,
    nearby: ['sharjah', 'dubai'],
  },
  {
    slug: 'al-ain',
    name: 'Al Ain',
    county: 'Abu Dhabi Emirate',
    state: 'UAE',
    zipCodes: [],
    population: 770000,
    lat: 24.2075,
    lng: 55.7447,
    description: 'Digital marketing and paid search campaigns in Al Ain. CLICKNX delivers targeted ads, analytics setup, and conversion optimization for local businesses.',
    featured: false,
    nearby: ['abu-dhabi'],
  },
  {
    slug: 'ras-al-khaimah',
    name: 'Ras Al Khaimah',
    county: 'Ras Al Khaimah Emirate',
    state: 'UAE',
    zipCodes: [],
    population: 350000,
    lat: 25.7906,
    lng: 55.9592,
    description: 'Performance-driven digital advertising in Ras Al Khaimah. Google Ads, social media marketing, and analytics tracking for growing businesses.',
    featured: false,
    nearby: ['ajman'],
  },
  {
    slug: 'fujairah',
    name: 'Fujairah',
    county: 'Fujairah Emirate',
    state: 'UAE',
    zipCodes: [],
    population: 200000,
    lat: 25.1164,
    lng: 56.3422,
    description: 'PPC advertising and conversion rate optimization in Fujairah. CLICKNX delivers targeted campaigns that generate leads and measurable ROI.',
    featured: false,
    nearby: ['ras-al-khaimah'],
  },
  {
    slug: 'umm-al-quwain',
    name: 'Umm Al Quwain',
    county: 'Umm Al Quwain Emirate',
    state: 'UAE',
    zipCodes: [],
    population: 75000,
    lat: 25.5647,
    lng: 55.5521,
    description: 'Digital performance marketing in Umm Al Quwain. Paid search, social advertising, and landing page optimization for businesses ready to grow online.',
    featured: false,
    nearby: ['ajman', 'ras-al-khaimah'],
  },
  {
    slug: 'khalifa-city',
    name: 'Khalifa City',
    county: 'Abu Dhabi Emirate',
    state: 'UAE',
    zipCodes: [],
    population: 250000,
    lat: 24.4125,
    lng: 54.6078,
    description: 'Performance marketing and paid ads in Khalifa City, Abu Dhabi. CLICKNX helps local businesses generate qualified leads through data-driven campaigns.',
    featured: false,
    nearby: ['abu-dhabi', 'yas-island'],
  },
  {
    slug: 'yas-island',
    name: 'Yas Island',
    county: 'Abu Dhabi Emirate',
    state: 'UAE',
    zipCodes: [],
    population: 100000,
    lat: 24.4878,
    lng: 54.6082,
    description: 'Digital advertising and conversion optimization on Yas Island. Targeted Google Ads, Meta campaigns, and analytics tracking for Abu Dhabi businesses.',
    featured: false,
    nearby: ['abu-dhabi', 'khalifa-city'],
  },
];

// ============================================================
// Helper Functions
// ============================================================

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getNearbyAreas(slug: string): ServiceArea[] {
  const area = getAreaBySlug(slug);
  if (!area) return [];
  return area.nearby
    .map((nearbySlug) => getAreaBySlug(nearbySlug))
    .filter((a): a is ServiceArea => a !== undefined);
}

export function getAreaName(slug: string): string {
  const area = getAreaBySlug(slug);
  if (area) return area.name;
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getFeaturedAreas(): ServiceArea[] {
  return serviceAreas.filter((area) => area.featured);
}

export function getCounties(): string[] {
  return [...new Set(serviceAreas.map((area) => area.county))];
}
