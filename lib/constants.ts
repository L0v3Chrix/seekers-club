/**
 * Site Constants for The Seekers Club
 *
 * Contains all constant values used throughout the application
 * including location details, contact information, and configuration
 */

export const SITE_NAME = 'The Seekers Club'
export const SITE_TAGLINE = 'A Sanctuary for the Soul'

// Location Information
export const LOCATION = {
  name: 'The Seekers Club',
  address: {
    street: '1203 Quail Park Dr',
    city: 'Austin',
    state: 'TX',
    zip: '78758',
    country: 'US',
  },
  formatted: '1203 Quail Park Dr, Austin, TX 78758',
  coordinates: {
    lat: 30.3672, // Approximate - update with actual coordinates if needed
    lng: -97.7131,
  },
  googleMapsUrl: 'https://www.google.com/maps/place/1203+Quail+Park+Dr,+Austin,+TX+78758',
}

// Operating Hours
export const HOURS = {
  open: '8:00 AM',
  close: '8:00 PM',
  days: 'Monday - Sunday',
  description: 'Open Daily, Year-Round',
  formatted: '8 AM - 8 PM',
}

// Contact Information
export const CONTACT = {
  custodian: 'Andy',
  phone: '+17377032243',
  phoneFormatted: '+1 (737) 703-2243',
  phoneDisplay: '(737) 703-2243',
  smsMessage: 'seeker seeking seeker',
  // Future contact methods
  email: null, // To be added if needed
  socialMedia: {
    instagram: null,
    facebook: null,
  },
}

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/activities', label: 'Activities' },
  { href: '/contact', label: 'Contact' },
] as const

// Gallery Categories
export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Spaces', value: 'all' },
  { id: 'common', label: 'Common Areas', value: 'common' },
  { id: 'outdoor', label: 'Outdoor Spaces', value: 'outdoor' },
  { id: 'activity', label: 'Activity Spaces', value: 'activity' },
] as const

// Activity Offerings
export const ACTIVITIES = [
  {
    id: 'meditation',
    name: 'Meditation Sessions',
    icon: '🧘',
    description: 'Guided and silent meditation for all levels',
  },
  {
    id: 'breathwork',
    name: 'Breathwork',
    icon: '🌬️',
    description: 'Conscious breathing practices and circles',
  },
  {
    id: 'book-studies',
    name: 'Book Studies',
    icon: '📚',
    description: 'Shared wisdom through transformative texts',
  },
  {
    id: 'wisdom-circles',
    name: 'Wisdom Sharing',
    icon: '🤝',
    description: 'Authentic connection and sharing circles',
  },
  {
    id: 'open-hours',
    name: 'Open Gathering',
    icon: '✨',
    description: 'Unstructured community time for connection',
  },
] as const

// Social Proof / Trust Indicators
export const TRUST_INDICATORS = [
  'Recovery-Friendly',
  'Judgment-Free Zone',
  'All Levels Welcome',
  'Drop-In Friendly',
  'Community-Focused',
] as const

// SEO Keywords
export const SEO_KEYWORDS = [
  'meditation Austin',
  'sanctuary space Austin',
  'healing space Austin',
  'breathwork Austin',
  'recovery-friendly meditation',
  'spiritual community Austin',
  'The Seekers Club',
  'Austin meditation center',
  'judgment-free sanctuary',
] as const

// Performance & Tech Config
export const CONFIG = {
  // Feature flags
  enableLightbox: true,
  enableAnimations: true,
  enableAnalytics: false, // Set to true when analytics added

  // Animation settings
  animations: {
    reducedMotion: false, // Will be detected at runtime
    duration: {
      fast: 150,
      base: 250,
      slow: 400,
      slower: 600,
    },
  },

  // Gallery settings
  gallery: {
    gridColumns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    imageAspectRatios: ['16/9', '4/3', '3/4'] as const,
  },
} as const

// External Links
export const EXTERNAL_LINKS = {
  raizeTheVibe: 'https://raizethevibe.com',
  // Add other external links as needed
} as const
