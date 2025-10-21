/**
 * Site Constants for The Seekers Club
 *
 * Contains all constant values used throughout the application
 * including location details, contact information, and configuration
 */

export const SITE_NAME = 'The Seekers Club'
export const SITE_TAGLINE = 'A Recovery Sanctuary in Austin'

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
    id: 'recovery-meetings',
    name: 'Recovery Meetings',
    icon: '🙏',
    description: 'The heart of our community. 12-step meetings and fellowship grounded in AA principles, welcoming all recovery pathways.',
  },
  {
    id: 'meditation',
    name: 'Meditation & Contemplation',
    icon: '🧘',
    description: 'Spiritual practice for recovery. Guided meditation, silent sitting, and mindfulness for consciousness expansion.',
  },
  {
    id: 'fellowship',
    name: 'Fellowship & Community',
    icon: '🤝',
    description: 'Connection and support. Coffee, conversation, shared meals, and authentic relationships with others in recovery.',
  },
  {
    id: 'breathwork',
    name: 'Breathwork & Healing',
    icon: '🌬️',
    description: 'Conscious breathing practices for consciousness expansion and healing in a safe, held space.',
  },
  {
    id: 'book-studies',
    name: 'Recovery Literature',
    icon: '📚',
    description: 'Big Book, 12 & 12, and spiritual texts. Deep dives into recovery literature and wisdom.',
  },
  {
    id: 'service',
    name: 'Service & Support',
    icon: '✨',
    description: 'Practice the principle of service. Support newcomers, maintain the space, and give back to the recovery community.',
  },
] as const

// Social Proof / Trust Indicators
export const TRUST_INDICATORS = [
  'AA Principles Grounded',
  'All Pathways Worthy',
  'Judgment-Free Fellowship',
  'Newcomer Friendly',
  'Substance-Free Space',
  'Community-Focused',
] as const

// SEO Keywords
export const SEO_KEYWORDS = [
  'recovery meetings Austin',
  'AA meetings Austin',
  '12-step fellowship Austin',
  'recovery sanctuary Austin',
  'sober community Austin',
  'recovery-friendly meditation',
  'spiritual recovery Austin',
  'The Seekers Club',
  'Austin recovery space',
  'fellowship Austin',
  'judgment-free recovery',
  'recovery literature study',
  'consciousness expansion recovery',
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
