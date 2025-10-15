/**
 * TypeScript Type Definitions for The Seekers Club
 *
 * Central type definitions used throughout the application
 */

// Space Categories
export type SpaceCategory = 'common' | 'outdoor' | 'activity'

// Space Type IDs (all 18 spaces)
export type SpaceType =
  // Common Areas (7)
  | 'meditation-1'
  | 'meditation-2'
  | 'gathering-main'
  | 'gathering-secondary'
  | 'crystal-bowl'
  | 'library-main'
  | 'library-cozy'
  // Outdoor Spaces (6)
  | 'backyard'
  | 'firepit'
  | 'sauna'
  | 'outdoor-meditation-1'
  | 'outdoor-meditation-2'
  | 'garden'
  // Activity Spaces (5)
  | 'pingpong'
  | 'workout'
  | 'bedroom-meditation-1'
  | 'bedroom-meditation-2'
  | 'movement-flow'

// Aspect Ratios for Placeholders
export type AspectRatio = '16/9' | '4/3' | '3/4'

// Animation Pattern Types
export type AnimationPattern =
  | 'gradient-shift'
  | 'radial-pulse'
  | 'conic-rotate'
  | 'static-gradient'
  | 'prismatic-shift'
  | 'gradient-slow'
  | 'vertical-gradient-shift'
  | 'fire-flicker'
  | 'breathe-gradient'
  | 'multi-gradient-flow'
  | 'angular-gradient-shift'
  | 'gradient-fast'

// Sacred Geometry Types
export type SacredGeometryType =
  | 'flower-of-life'
  | 'metatron'
  | 'sri-yantra'
  | 'seed-of-life'
  | 'vesica-piscis'
  | 'torus'
  | 'hexagon'
  | 'crescent-moon'

// Color Palette for Placeholders
export interface ColorPalette {
  primary: string
  secondary: string
  accent: string
}

// Sacred Geometry Configuration
export interface GeometryConfig {
  type: SacredGeometryType
  size: number // in pixels
  color: string
  opacity: number
  position?: {
    x?: string // CSS position (e.g., '50%', 'center')
    y?: string
  }
  animation?: {
    type: 'rotate' | 'pulse' | 'scale' | 'breathe'
    duration: number // in seconds
  }
}

// Particle Configuration
export interface ParticleConfig {
  count: number
  size: number
  colors: string[]
  animation: {
    duration: number
    delay?: number
  }
  opacity: {
    min: number
    max: number
  }
}

// Shape Configuration (flames, leaves, etc)
export interface ShapeConfig {
  id: string
  type: 'flame' | 'leaf' | 'circle' | 'wave' | 'custom'
  svg?: string // SVG path data
  color: string
  size: { width: number; height: number }
  position: { x: string; y: string }
  animation?: {
    type: string
    duration: number
  }
}

// Complete Space Data Definition
export interface SpaceData {
  id: string
  type: SpaceType
  category: SpaceCategory
  label: string
  description: string
  aspectRatio: AspectRatio

  // Placeholder styling configuration
  colorPalette: ColorPalette
  animationPattern: AnimationPattern
  sacredGeometry?: GeometryConfig
  particles?: ParticleConfig
  shapes?: ShapeConfig[]
}

// Gallery Filter Type
export type GalleryFilter = 'all' | SpaceCategory

// Navigation Link
export interface NavLink {
  href: string
  label: string
}

// Activity Definition
export interface Activity {
  id: string
  name: string
  icon: string
  description: string
}

// Contact Form Data (keeping structure even though not using form)
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  hearAboutUs?: string
}

// SEO Metadata
export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

// Framer Motion Variants Type (for reusable animations)
export interface MotionVariants {
  hidden: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      ease?: string | number[]
      delay?: number
      staggerChildren?: number
      delayChildren?: number
    }
  }
  exit?: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      ease?: string | number[]
    }
  }
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'default' | 'large'
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'default' | 'narrow' | 'wide' | 'full'
}

// Lightbox Props
export interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  space: SpaceData
  allSpaces: SpaceData[]
  currentIndex: number
  onNavigate: (direction: 'prev' | 'next') => void
}

// Gallery Props
export interface GalleryGridProps {
  spaces: SpaceData[]
  onSpaceClick: (space: SpaceData, index: number) => void
}

export interface GalleryCardProps {
  space: SpaceData
  onClick: () => void
  index: number
}

export interface CategoryFilterProps {
  currentFilter: GalleryFilter
  onFilterChange: (filter: GalleryFilter) => void
}

// Placeholder Image Props
export interface PlaceholderImageProps {
  space: SpaceData
  onClick?: () => void
  priority?: boolean
}

// Text Andy Button Props
export interface TextAndyButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'large'
  className?: string
}

// Sacred Geometry SVG Props
export interface SacredGeometryProps {
  type: SacredGeometryType
  size?: number
  color?: string
  className?: string
  animate?: boolean
}

// Cosmic Background Props
export interface CosmicBackgroundProps {
  variant?: 'default' | 'purple-blue' | 'deep-space'
  particles?: boolean
  animated?: boolean
  className?: string
}

// Particle Field Props
export interface ParticleFieldProps {
  count?: number
  size?: number
  color?: string
  className?: string
}

// Navigation Props
export interface NavigationProps {
  currentPath: string
}

export interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  currentPath: string
}

// Footer Props
export interface FooterProps {
  className?: string
}

// Hero Section Props
export interface HeroSectionProps {
  title?: string
  subtitle?: string
  children?: React.ReactNode
}

// Utility Types
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

// Conditional rendering helper
export type ConditionalRender<T extends boolean> = T extends true
  ? React.ReactElement
  : null
