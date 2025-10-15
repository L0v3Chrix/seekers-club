'use client'

import { motion } from 'framer-motion'

interface SacredDividerProps {
  className?: string
  iconType?: 'flower-of-life' | 'seed-of-life' | 'metatron' | 'vesica-piscis'
}

/**
 * SacredDivider Component
 *
 * Section divider with sacred geometry icon and decorative lines
 * Following design spec lines 627-657
 */
export default function SacredDivider({
  className = '',
  iconType = 'flower-of-life'
}: SacredDividerProps) {

  const getGeometryIcon = () => {
    switch (iconType) {
      case 'flower-of-life':
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="text-cosmic-gold-500"
          >
            <g fill="none" stroke="currentColor" strokeWidth="2">
              {/* Center circle */}
              <circle cx="50" cy="50" r="15" />
              {/* Six petals around center */}
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180
                const x = 50 + 15 * Math.cos(angle)
                const y = 50 + 15 * Math.sin(angle)
                return <circle key={i} cx={x} cy={y} r="15" />
              })}
            </g>
          </svg>
        )

      case 'seed-of-life':
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="text-cosmic-gold-500"
          >
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="50" cy="50" r="15" />
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180
                const x = 50 + 15 * Math.cos(angle)
                const y = 50 + 15 * Math.sin(angle)
                return <circle key={i} cx={x} cy={y} r="15" />
              })}
            </g>
          </svg>
        )

      case 'metatron':
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="text-cosmic-gold-500"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              {/* Outer circle */}
              <circle cx="50" cy="50" r="35" />
              {/* Inner hexagon */}
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180
                const nextAngle = ((i + 1) * 60 * Math.PI) / 180
                const x1 = 50 + 25 * Math.cos(angle)
                const y1 = 50 + 25 * Math.sin(angle)
                const x2 = 50 + 25 * Math.cos(nextAngle)
                const y2 = 50 + 25 * Math.sin(nextAngle)
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
              })}
            </g>
          </svg>
        )

      case 'vesica-piscis':
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="text-cosmic-gold-500"
          >
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="40" cy="50" r="20" />
              <circle cx="60" cy="50" r="20" />
            </g>
          </svg>
        )

      default:
        return null
    }
  }

  return (
    <motion.div
      className={`flex items-center justify-center gap-4 my-16 opacity-60 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.6, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Left line */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cosmic-purple-500 to-cosmic-purple-500" />

      {/* Sacred geometry icon */}
      <motion.div
        className="flex-shrink-0"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(212, 169, 71, 0.3))',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {getGeometryIcon()}
      </motion.div>

      {/* Right line */}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-cosmic-purple-500 to-cosmic-purple-500" />
    </motion.div>
  )
}
