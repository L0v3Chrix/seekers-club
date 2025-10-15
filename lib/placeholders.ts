/**
 * Gallery Space Data - All 18 Placeholder Configurations
 *
 * Complete data for all sanctuary spaces with CSS/SVG placeholder specifications
 */

import type { SpaceData } from './types'

export const GALLERY_SPACES: SpaceData[] = [
  // ===== COMMON AREAS (7) =====
  {
    id: 'meditation-1',
    type: 'meditation-1',
    category: 'common',
    label: 'Living Room Meditation Space',
    description: 'A serene meditation area with natural light and comfortable seating for group or individual practice.',
    aspectRatio: '16/9',
    colorPalette: {
      primary: '#5c3d99',
      secondary: '#3b5bdb',
      accent: '#d4a947',
    },
    animationPattern: 'gradient-shift',
    sacredGeometry: {
      type: 'flower-of-life',
      size: 64,
      color: '#d4a947',
      opacity: 0.4,
      animation: {
        type: 'rotate',
        duration: 60,
      },
    },
    particles: {
      count: 12,
      size: 4,
      colors: ['#ffffff'],
      animation: {
        duration: 8,
        delay: 0.5,
      },
      opacity: {
        min: 0.3,
        max: 0.6,
      },
    },
  },
  {
    id: 'meditation-2',
    type: 'meditation-2',
    category: 'common',
    label: 'Secondary Meditation Space',
    description: 'An intimate space perfect for solo meditation and deep contemplation.',
    aspectRatio: '16/9',
    colorPalette: {
      primary: '#2541a1',
      secondary: '#3f2a6b',
      accent: '#e6c566',
    },
    animationPattern: 'radial-pulse',
    sacredGeometry: {
      type: 'seed-of-life',
      size: 48,
      color: '#e6c566',
      opacity: 0.5,
      position: { x: '10%', y: '90%' },
      animation: {
        type: 'pulse',
        duration: 6,
      },
    },
  },
  {
    id: 'gathering-main',
    type: 'gathering-main',
    category: 'common',
    label: 'Main Gathering Room',
    description: 'A spacious area for group gatherings, wisdom sharing, and community connection.',
    aspectRatio: '16/9',
    colorPalette: {
      primary: '#7c4dbd',
      secondary: '#d946ef',
      accent: '#b89439',
    },
    animationPattern: 'conic-rotate',
    sacredGeometry: {
      type: 'metatron',
      size: 96,
      color: '#b89439',
      opacity: 0.35,
      animation: {
        type: 'rotate',
        duration: 90,
      },
    },
  },
  {
    id: 'gathering-secondary',
    type: 'gathering-secondary',
    category: 'common',
    label: 'Cozy Gathering Space',
    description: 'A warm, intimate space for smaller groups and deeper conversations.',
    aspectRatio: '4/3',
    colorPalette: {
      primary: '#2d1b4e',
      secondary: '#5c3d99',
      accent: '#fb7185',
    },
    animationPattern: 'static-gradient',
    sacredGeometry: {
      type: 'vesica-piscis',
      size: 72,
      color: '#fb7185',
      opacity: 0.4,
      animation: {
        type: 'pulse',
        duration: 8,
      },
    },
  },
  {
    id: 'crystal-bowl',
    type: 'crystal-bowl',
    category: 'common',
    label: 'Crystal Healing Bowl Room',
    description: 'Sacred space for crystal singing bowl sound healing and vibrational therapy.',
    aspectRatio: '3/4',
    colorPalette: {
      primary: '#d946ef',
      secondary: '#22d3ee',
      accent: '#10b981',
    },
    animationPattern: 'prismatic-shift',
    sacredGeometry: {
      type: 'sri-yantra',
      size: 128,
      color: '#d4a947',
      opacity: 0.5,
      animation: {
        type: 'rotate',
        duration: 120,
      },
    },
  },
  {
    id: 'library-main',
    type: 'library-main',
    category: 'common',
    label: 'Wisdom Library',
    description: 'Extensive collection of spiritual texts, philosophy, and wisdom literature.',
    aspectRatio: '16/9',
    colorPalette: {
      primary: '#0a1128',
      secondary: '#1a2f78',
      accent: '#d4a947',
    },
    animationPattern: 'gradient-slow',
    sacredGeometry: {
      type: 'torus',
      size: 64,
      color: '#d4a947',
      opacity: 0.4,
      position: { x: '85%', y: '15%' },
      animation: {
        type: 'rotate',
        duration: 45,
      },
    },
  },
  {
    id: 'library-cozy',
    type: 'library-cozy',
    category: 'common',
    label: 'Reading Nook',
    description: 'Intimate reading corner with comfortable seating and warm lighting.',
    aspectRatio: '4/3',
    colorPalette: {
      primary: '#3f2a6b',
      secondary: '#f59e0b',
      accent: '#f5e099',
    },
    animationPattern: 'radial-pulse',
    sacredGeometry: {
      type: 'seed-of-life',
      size: 32,
      color: '#f5e099',
      opacity: 0.3,
      position: { x: '85%', y: '15%' },
      animation: {
        type: 'breathe',
        duration: 10,
      },
    },
  },

  // ===== OUTDOOR SPACES (6) =====
  {
    id: 'backyard',
    type: 'backyard',
    category: 'outdoor',
    label: 'Sacred Backyard Space',
    description: 'Open backyard sanctuary with space for outdoor meditation and connection with nature.',
    aspectRatio: '16/9',
    colorPalette: {
      primary: '#1a2f78',
      secondary: '#10b981',
      accent: '#d4a947',
    },
    animationPattern: 'vertical-gradient-shift',
    sacredGeometry: {
      type: 'flower-of-life',
      size: 96,
      color: '#10b981',
      opacity: 0.3,
      position: { x: '50%', y: '75%' },
      animation: {
        type: 'pulse',
        duration: 12,
      },
    },
    particles: {
      count: 20,
      size: 2,
      colors: ['#ffffff'],
      animation: {
        duration: 10,
      },
      opacity: {
        min: 0.4,
        max: 0.8,
      },
    },
  },
  {
    id: 'firepit',
    type: 'firepit',
    category: 'outdoor',
    label: 'Sacred Fire Circle',
    description: 'Community fire pit for evening gatherings, ceremonies, and connection under the stars.',
    aspectRatio: '16/9',
    colorPalette: {
      primary: '#7c2d12',
      secondary: '#f59e0b',
      accent: '#fbbf24',
    },
    animationPattern: 'fire-flicker',
    particles: {
      count: 10,
      size: 3,
      colors: ['#f59e0b', '#fbbf24'],
      animation: {
        duration: 5,
      },
      opacity: {
        min: 0.5,
        max: 1,
      },
    },
  },
  {
    id: 'sauna',
    type: 'sauna',
    category: 'outdoor',
    label: 'Healing Sauna',
    description: 'Cleansing sauna for detoxification, meditation, and healing through heat.',
    aspectRatio: '4/3',
    colorPalette: {
      primary: '#78350f',
      secondary: '#92400e',
      accent: '#fbbf24',
    },
    animationPattern: 'static-gradient',
  },
  {
    id: 'outdoor-meditation-1',
    type: 'outdoor-meditation-1',
    category: 'outdoor',
    label: 'Garden Meditation Area',
    description: 'Peaceful garden area surrounded by plants, perfect for solo meditation.',
    aspectRatio: '16/9',
    colorPalette: {
      primary: '#059669',
      secondary: '#10b981',
      accent: '#d4a947',
    },
    animationPattern: 'gradient-shift',
    sacredGeometry: {
      type: 'flower-of-life',
      size: 72,
      color: '#10b981',
      opacity: 0.4,
      position: { x: '50%', y: '80%' },
      animation: {
        type: 'breathe',
        duration: 15,
      },
    },
  },
  {
    id: 'outdoor-meditation-2',
    type: 'outdoor-meditation-2',
    category: 'outdoor',
    label: 'Secluded Meditation Nook',
    description: 'Secluded meditation spot providing privacy and connection with nature.',
    aspectRatio: '3/4',
    colorPalette: {
      primary: '#064e3b',
      secondary: '#3b5bdb',
      accent: '#e6c566',
    },
    animationPattern: 'radial-pulse',
    sacredGeometry: {
      type: 'crescent-moon',
      size: 48,
      color: '#e6c566',
      opacity: 0.6,
      position: { x: '50%', y: '15%' },
      animation: {
        type: 'rotate',
        duration: 30,
      },
    },
  },
  {
    id: 'garden',
    type: 'garden',
    category: 'outdoor',
    label: 'Community Garden',
    description: 'Thriving garden space for connecting with the earth and growing consciousness.',
    aspectRatio: '16/9',
    colorPalette: {
      primary: '#065f46',
      secondary: '#10b981',
      accent: '#7a93f2',
    },
    animationPattern: 'static-gradient',
    sacredGeometry: {
      type: 'seed-of-life',
      size: 64,
      color: '#10b981',
      opacity: 0.4,
      position: { x: '50%', y: '60%' },
      animation: {
        type: 'scale',
        duration: 10,
      },
    },
  },

  // ===== ACTIVITY SPACES (5) =====
  {
    id: 'pingpong',
    type: 'pingpong',
    category: 'activity',
    label: 'Play & Connection Space',
    description: 'Active play area for ping pong, games, and lighthearted connection.',
    aspectRatio: '16/9',
    colorPalette: {
      primary: '#d946ef',
      secondary: '#22d3ee',
      accent: '#f59e0b',
    },
    animationPattern: 'gradient-fast',
  },
  {
    id: 'workout',
    type: 'workout',
    category: 'activity',
    label: 'Movement & Strength Space',
    description: 'Physical wellness area with equipment for strength, movement, and body care.',
    aspectRatio: '4/3',
    colorPalette: {
      primary: '#7c4dbd',
      secondary: '#b45309',
      accent: '#fb7185',
    },
    animationPattern: 'angular-gradient-shift',
    sacredGeometry: {
      type: 'hexagon',
      size: 80,
      color: '#d4a947',
      opacity: 0.3,
      animation: {
        type: 'pulse',
        duration: 8,
      },
    },
  },
  {
    id: 'bedroom-meditation-1',
    type: 'bedroom-meditation-1',
    category: 'activity',
    label: 'Private Meditation Room',
    description: 'Peaceful bedroom converted to private meditation sanctuary for deep personal practice.',
    aspectRatio: '3/4',
    colorPalette: {
      primary: '#6b7280',
      secondary: '#5472e8',
      accent: '#9d6dd4',
    },
    animationPattern: 'breathe-gradient',
    sacredGeometry: {
      type: 'crescent-moon',
      size: 48,
      color: '#e6c566',
      opacity: 0.5,
      position: { x: '80%', y: '20%' },
      animation: {
        type: 'rotate',
        duration: 25,
      },
    },
  },
  {
    id: 'bedroom-meditation-2',
    type: 'bedroom-meditation-2',
    category: 'activity',
    label: 'Quiet Reflection Room',
    description: 'Cozy private room for quiet reflection, journaling, and intimate meditation.',
    aspectRatio: '3/4',
    colorPalette: {
      primary: '#312e81',
      secondary: '#6366f1',
      accent: '#fbbf24',
    },
    animationPattern: 'static-gradient',
    sacredGeometry: {
      type: 'seed-of-life',
      size: 56,
      color: '#fbbf24',
      opacity: 0.4,
      animation: {
        type: 'pulse',
        duration: 12,
      },
    },
  },
  {
    id: 'movement-flow',
    type: 'movement-flow',
    category: 'activity',
    label: 'Dance & Flow Space',
    description: 'Open space for yoga, dance, tai chi, and any form of mindful movement.',
    aspectRatio: '16/9',
    colorPalette: {
      primary: '#d946ef',
      secondary: '#22d3ee',
      accent: '#10b981',
    },
    animationPattern: 'multi-gradient-flow',
    sacredGeometry: {
      type: 'torus',
      size: 88,
      color: '#d946ef',
      opacity: 0.4,
      animation: {
        type: 'rotate',
        duration: 20,
      },
    },
  },
]

// Helper function to get space by ID
export function getSpaceById(id: string): SpaceData | undefined {
  return GALLERY_SPACES.find((space) => space.id === id)
}

// Helper function to get spaces by category
export function getSpacesByCategory(category: 'all' | 'common' | 'outdoor' | 'activity'): SpaceData[] {
  if (category === 'all') return GALLERY_SPACES
  return GALLERY_SPACES.filter((space) => space.category === category)
}

// Export counts for reference
export const SPACE_COUNTS = {
  total: GALLERY_SPACES.length,
  common: GALLERY_SPACES.filter((s) => s.category === 'common').length,
  outdoor: GALLERY_SPACES.filter((s) => s.category === 'outdoor').length,
  activity: GALLERY_SPACES.filter((s) => s.category === 'activity').length,
} as const
