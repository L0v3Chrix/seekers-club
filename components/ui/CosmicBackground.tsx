'use client'

import { motion } from 'framer-motion'
import { CosmicBackgroundProps } from '@/lib/types'

/**
 * CosmicBackground Component
 *
 * Animated gradient background with optional particle effects
 * Used throughout the site for consistent cosmic aesthetic
 */
export default function CosmicBackground({
  variant = 'default',
  particles = true,
  animated = true,
  className = '',
}: CosmicBackgroundProps) {
  // Variant-specific gradient classes
  const variantStyles = {
    default: 'from-cosmic-purple-900 via-cosmic-blue-900 to-cosmic-purple-800',
    'purple-blue': 'from-cosmic-purple-800 via-cosmic-blue-800 to-cosmic-purple-700',
    'deep-space': 'from-cosmic-purple-950 via-black to-cosmic-blue-950',
  }

  const gradientClass = variantStyles[variant]

  return (
    <div className={`fixed inset-0 -z-50 overflow-hidden ${className}`}>
      {/* Main gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} ${
          animated ? 'animate-cosmicGradient' : ''
        }`}
        style={{
          backgroundSize: animated ? '400% 400%' : '100% 100%',
        }}
      />

      {/* Radial overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-cosmic-purple-900/20 to-black/40" />

      {/* Particle field */}
      {particles && (
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [
                  Math.random() * 0.5 + 0.2,
                  Math.random() * 0.3 + 0.1,
                  Math.random() * 0.5 + 0.2,
                ],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
