'use client'

import { motion } from 'framer-motion'
import { CardProps } from '@/lib/types'

/**
 * Card Component
 *
 * Versatile card container with cosmic glassmorphism styling
 * Optional hover effects for interactive elements
 */
export default function Card({
  children,
  className = '',
  hover = false,
  onClick,
}: CardProps) {
  const baseStyles =
    'backdrop-blur-md bg-cosmic-purple-900/30 border border-cosmic-purple-700/40 rounded-xl p-6 shadow-lg'

  const hoverStyles = hover
    ? 'cursor-pointer transition-all duration-300 hover:bg-cosmic-purple-800/40 hover:border-cosmic-gold-500/50 hover:shadow-xl hover:shadow-cosmic-gold-500/20'
    : ''

  const combinedClasses = `${baseStyles} ${hoverStyles} ${className}`

  if (hover) {
    return (
      <motion.div
        className={combinedClasses}
        onClick={onClick}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={combinedClasses}>{children}</div>
}
