'use client'

import { motion } from 'framer-motion'
import { CardProps } from '@/lib/types'

/**
 * Card Component - ENHANCED WITH LIGHT VARIANT
 *
 * Two visual modes for alternating sections:
 * - Dark mode (default): Purple/blue glassmorphism
 * - Light mode: Golden/cream glassmorphism for contrast
 * Strong backdrop blur and glowing borders for dimension
 */

interface EnhancedCardProps extends CardProps {
  variant?: 'dark' | 'light'
}

export default function Card({
  children,
  className = '',
  hover = false,
  onClick,
  variant = 'dark',
}: EnhancedCardProps) {
  // Dark variant (default cosmic purple/blue)
  const darkStyles =
    'backdrop-blur-xl bg-cosmic-purple-900/40 border-2 border-cosmic-purple-600/60 shadow-2xl shadow-cosmic-purple-900/40'

  // Light variant (cosmic gold/cream for contrast)
  const lightStyles =
    'backdrop-blur-xl bg-cosmic-gold-500/15 border-2 border-cosmic-gold-400/50 shadow-2xl shadow-cosmic-gold-900/30'

  const baseStyles = variant === 'light' ? lightStyles : darkStyles

  // Enhanced hover with glowing effect
  const darkHoverStyles = hover
    ? 'cursor-pointer transition-all duration-300 hover:bg-cosmic-purple-800/50 hover:border-cosmic-gold-500/70 hover:shadow-2xl hover:shadow-cosmic-gold-500/30 hover:scale-[1.01]'
    : ''

  const lightHoverStyles = hover
    ? 'cursor-pointer transition-all duration-300 hover:bg-cosmic-gold-500/25 hover:border-cosmic-gold-300/80 hover:shadow-2xl hover:shadow-cosmic-gold-500/40 hover:scale-[1.01]'
    : ''

  const hoverStyles = variant === 'light' ? lightHoverStyles : darkHoverStyles

  const combinedClasses = `${baseStyles} ${hoverStyles} rounded-xl p-6 ${className}`

  // Add a subtle inner glow for more dimension
  const innerGlowStyle = {
    boxShadow:
      variant === 'light'
        ? 'inset 0 0 40px rgba(212, 169, 71, 0.1), 0 0 60px rgba(212, 169, 71, 0.15)'
        : 'inset 0 0 40px rgba(92, 61, 153, 0.2), 0 0 60px rgba(92, 61, 153, 0.15)',
  }

  if (hover) {
    return (
      <motion.div
        className={combinedClasses}
        onClick={onClick}
        style={innerGlowStyle}
        whileHover={{
          scale: 1.03,
          y: -6,
          boxShadow:
            variant === 'light'
              ? 'inset 0 0 50px rgba(212, 169, 71, 0.15), 0 0 80px rgba(212, 169, 71, 0.25)'
              : 'inset 0 0 50px rgba(92, 61, 153, 0.3), 0 0 80px rgba(124, 77, 189, 0.25)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={combinedClasses} style={innerGlowStyle}>
      {children}
    </div>
  )
}
