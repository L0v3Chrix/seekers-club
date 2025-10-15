'use client'

import { motion } from 'framer-motion'
import { PlaceholderImageProps } from '@/lib/types'
import SacredGeometry from './SacredGeometry'

/**
 * PlaceholderImage Component
 *
 * Renders CSS/SVG placeholder images for gallery spaces
 * Each placeholder is unique based on space data configuration
 */
export default function PlaceholderImage({
  space,
  onClick,
  priority = false,
}: PlaceholderImageProps) {
  const {
    aspectRatio,
    colorPalette,
    animationPattern,
    sacredGeometry,
    particles,
  } = space

  // Get animation class based on pattern
  const getAnimationClass = () => {
    switch (animationPattern) {
      case 'gradient-shift':
        return 'animate-cosmicGradient'
      case 'radial-pulse':
        return 'animate-pulse'
      case 'gradient-slow':
        return 'animate-cosmicGradient'
      case 'gradient-fast':
        return 'animate-cosmicGradient'
      default:
        return ''
    }
  }

  // Build gradient background style
  const getGradientStyle = () => {
    const { primary, secondary, accent } = colorPalette

    switch (animationPattern) {
      case 'gradient-shift':
        return {
          background: `linear-gradient(135deg, ${primary}, ${secondary}, ${accent})`,
          backgroundSize: '400% 400%',
        }
      case 'radial-pulse':
        return {
          background: `radial-gradient(circle at center, ${primary}, ${secondary}, ${accent})`,
        }
      case 'conic-rotate':
        return {
          background: `conic-gradient(from 0deg, ${primary}, ${secondary}, ${accent}, ${primary})`,
        }
      case 'static-gradient':
        return {
          background: `linear-gradient(to bottom, ${primary}, ${secondary})`,
        }
      case 'prismatic-shift':
        return {
          background: `linear-gradient(45deg, ${primary}, ${secondary}, ${accent}, ${secondary}, ${primary})`,
          backgroundSize: '400% 400%',
        }
      case 'vertical-gradient-shift':
        return {
          background: `linear-gradient(to bottom, ${primary}, ${secondary}, ${accent})`,
          backgroundSize: '100% 400%',
        }
      case 'fire-flicker':
        return {
          background: `radial-gradient(ellipse at bottom, ${accent}, ${secondary}, ${primary})`,
        }
      case 'breathe-gradient':
        return {
          background: `radial-gradient(ellipse at center, ${primary}, ${secondary}, ${accent})`,
        }
      case 'multi-gradient-flow':
        return {
          background: `linear-gradient(45deg, ${primary}, ${secondary}), linear-gradient(135deg, ${secondary}, ${accent})`,
          backgroundBlendMode: 'overlay',
        }
      case 'angular-gradient-shift':
        return {
          background: `linear-gradient(120deg, ${primary}, ${secondary}, ${accent})`,
          backgroundSize: '400% 400%',
        }
      default:
        return {
          background: `linear-gradient(135deg, ${primary}, ${secondary})`,
        }
    }
  }

  const animationClass = getAnimationClass()
  const gradientStyle = getGradientStyle()

  return (
    <motion.div
      className={`relative w-full overflow-hidden rounded-lg cursor-pointer group ${
        onClick ? 'hover:shadow-2xl hover:shadow-cosmic-gold-500/20' : ''
      }`}
      style={{ aspectRatio }}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Main gradient background */}
      <div
        className={`absolute inset-0 ${animationClass}`}
        style={gradientStyle}
      />

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Particle effects */}
      {particles && (
        <div className="absolute inset-0">
          {Array.from({ length: particles.count }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: particles.size,
                height: particles.size,
                background: particles.colors[i % particles.colors.length],
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: particles.opacity.min,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
                opacity: [
                  particles.opacity.min,
                  particles.opacity.max,
                  particles.opacity.min,
                ],
              }}
              transition={{
                duration: particles.animation.duration,
                delay: particles.animation.delay
                  ? (particles.animation.delay * i) / particles.count
                  : 0,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Sacred geometry overlay */}
      {sacredGeometry && (
        <div
          className="absolute flex items-center justify-center"
          style={{
            top: sacredGeometry.position?.y || '50%',
            left: sacredGeometry.position?.x || '50%',
            transform: 'translate(-50%, -50%)',
            opacity: sacredGeometry.opacity,
          }}
        >
          <SacredGeometry
            type={sacredGeometry.type}
            size={sacredGeometry.size}
            color={sacredGeometry.color}
            animate={!!sacredGeometry.animation}
          />
        </div>
      )}

      {/* Hover overlay */}
      {onClick && (
        <div className="absolute inset-0 bg-cosmic-gold-500/0 group-hover:bg-cosmic-gold-500/10 transition-all duration-300" />
      )}

      {/* Title overlay on hover */}
      {onClick && (
        <motion.div
          className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
        >
          <h3 className="text-white font-display text-lg">{space.label}</h3>
          <p className="text-cosmic-gray-300 text-sm line-clamp-2">
            {space.description}
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}
