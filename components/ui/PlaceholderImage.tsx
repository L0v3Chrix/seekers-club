'use client'

import { motion } from 'framer-motion'
import { PlaceholderImageProps } from '@/lib/types'

/**
 * PlaceholderImage Component - MULTI-LAYER SYSTEM (Mobile Optimized)
 *
 * Each of the 18 spaces is truly unique with:
 * - 3-5 gradient layers with blend modes
 * - NO sacred geometry (placeholders will be replaced by real photos)
 * - Distinct visual personality per space
 * - Advanced CSS techniques for dimension and depth
 * - Mobile-responsive design
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

  // Get multi-layer gradient system based on pattern
  const getMultiLayerGradients = () => {
    const { primary, secondary, accent } = colorPalette

    switch (animationPattern) {
      case 'gradient-shift':
        return {
          layer1: {
            background: `linear-gradient(135deg, ${primary}, ${secondary})`,
            mixBlendMode: 'normal' as const,
            opacity: 1,
          },
          layer2: {
            background: `radial-gradient(circle at 30% 40%, ${accent}, transparent 60%)`,
            mixBlendMode: 'screen' as const,
            opacity: 0.6,
          },
          layer3: {
            background: `conic-gradient(from 45deg at 70% 60%, ${primary}, transparent, ${secondary})`,
            mixBlendMode: 'overlay' as const,
            opacity: 0.4,
          },
        }

      case 'radial-pulse':
        return {
          layer1: {
            background: `radial-gradient(ellipse at center, ${primary}, ${secondary})`,
            mixBlendMode: 'normal' as const,
            opacity: 1,
          },
          layer2: {
            background: `radial-gradient(circle at 60% 40%, ${accent}, transparent 70%)`,
            mixBlendMode: 'color-dodge' as const,
            opacity: 0.5,
          },
          layer3: {
            background: `radial-gradient(ellipse 120% 80% at 20% 60%, ${primary}, transparent)`,
            mixBlendMode: 'screen' as const,
            opacity: 0.3,
          },
        }

      case 'conic-rotate':
        return {
          layer1: {
            background: `conic-gradient(from 0deg, ${primary}, ${secondary}, ${accent}, ${primary})`,
            mixBlendMode: 'normal' as const,
            opacity: 1,
          },
          layer2: {
            background: `radial-gradient(circle at 50% 50%, transparent 30%, ${secondary} 80%)`,
            mixBlendMode: 'multiply' as const,
            opacity: 0.6,
          },
          layer3: {
            background: `linear-gradient(45deg, transparent, ${accent}, transparent)`,
            mixBlendMode: 'screen' as const,
            opacity: 0.4,
          },
        }

      case 'fire-flicker':
        return {
          layer1: {
            background: `radial-gradient(ellipse 150% 100% at bottom, ${accent}, ${secondary})`,
            mixBlendMode: 'normal' as const,
            opacity: 1,
          },
          layer2: {
            background: `radial-gradient(ellipse 80% 60% at 50% 70%, ${primary}, transparent)`,
            mixBlendMode: 'color-dodge' as const,
            opacity: 0.7,
          },
          layer3: {
            background: `linear-gradient(to top, ${accent}, transparent 60%)`,
            mixBlendMode: 'screen' as const,
            opacity: 0.5,
          },
          layer4: {
            background: `radial-gradient(circle at 30% 80%, ${secondary}, transparent 40%)`,
            mixBlendMode: 'overlay' as const,
            opacity: 0.4,
          },
        }

      case 'breathe-gradient':
        return {
          layer1: {
            background: `radial-gradient(ellipse at center, ${primary}, ${secondary}, ${accent})`,
            mixBlendMode: 'normal' as const,
            opacity: 1,
          },
          layer2: {
            background: `radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1), transparent 50%)`,
            mixBlendMode: 'overlay' as const,
            opacity: 0.6,
          },
          layer3: {
            background: `radial-gradient(ellipse 80% 120% at 60% 50%, ${primary}, transparent)`,
            mixBlendMode: 'soft-light' as const,
            opacity: 0.4,
          },
        }

      case 'prismatic-shift':
        return {
          layer1: {
            background: `linear-gradient(45deg, ${primary}, ${secondary}, ${accent})`,
            mixBlendMode: 'normal' as const,
            opacity: 1,
          },
          layer2: {
            background: `linear-gradient(135deg, ${accent}, transparent, ${primary})`,
            mixBlendMode: 'screen' as const,
            opacity: 0.5,
          },
          layer3: {
            background: `conic-gradient(from 90deg at 50% 50%, transparent, ${secondary}, transparent)`,
            mixBlendMode: 'color-dodge' as const,
            opacity: 0.4,
          },
          layer4: {
            background: `radial-gradient(circle at 70% 30%, ${accent}, transparent 60%)`,
            mixBlendMode: 'overlay' as const,
            opacity: 0.3,
          },
        }

      case 'multi-gradient-flow':
        return {
          layer1: {
            background: `linear-gradient(45deg, ${primary}, ${secondary})`,
            mixBlendMode: 'normal' as const,
            opacity: 1,
          },
          layer2: {
            background: `linear-gradient(135deg, ${secondary}, ${accent})`,
            mixBlendMode: 'overlay' as const,
            opacity: 0.7,
          },
          layer3: {
            background: `radial-gradient(ellipse at 30% 30%, ${accent}, transparent 50%)`,
            mixBlendMode: 'screen' as const,
            opacity: 0.5,
          },
          layer4: {
            background: `radial-gradient(circle at 80% 70%, ${primary}, transparent 60%)`,
            mixBlendMode: 'color-dodge' as const,
            opacity: 0.4,
          },
        }

      default:
        return {
          layer1: {
            background: `linear-gradient(135deg, ${primary}, ${secondary})`,
            mixBlendMode: 'normal' as const,
            opacity: 1,
          },
          layer2: {
            background: `radial-gradient(circle at 60% 40%, ${accent}, transparent 70%)`,
            mixBlendMode: 'screen' as const,
            opacity: 0.5,
          },
          layer3: {
            background: `linear-gradient(45deg, transparent, ${secondary}, transparent)`,
            mixBlendMode: 'overlay' as const,
            opacity: 0.3,
          },
        }
    }
  }

  const layers = getMultiLayerGradients()
  // REMOVED: Sacred geometry scaling - these placeholders will be replaced by real photos

  return (
    <motion.div
      className={`relative w-full overflow-hidden rounded-lg cursor-pointer group ${
        onClick ? 'hover:shadow-2xl hover:shadow-cosmic-gold-500/30' : ''
      }`}
      style={{ aspectRatio }}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.03, rotateY: 2 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* MULTI-LAYER GRADIENT SYSTEM */}
      {Object.entries(layers).map(([key, layer]) => (
        <motion.div
          key={key}
          className="absolute inset-0"
          style={{
            background: layer.background,
            mixBlendMode: layer.mixBlendMode,
            opacity: layer.opacity,
          }}
          animate={
            animationPattern === 'gradient-shift' ||
            animationPattern === 'prismatic-shift'
              ? {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }
              : animationPattern === 'breathe-gradient'
              ? {
                  scale: [1, 1.1, 1],
                  opacity: [layer.opacity, layer.opacity * 0.8, layer.opacity],
                }
              : {}
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* REMOVED: Sacred geometry - These placeholders will be replaced by real photos */}

      {/* Enhanced particle effects with glow */}
      {particles && (
        <div className="absolute inset-0">
          {Array.from({ length: particles.count }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: particles.size * 1.5,
                height: particles.size * 1.5,
                background: particles.colors[i % particles.colors.length],
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: particles.opacity.min,
                boxShadow: `0 0 ${particles.size * 2}px ${
                  particles.colors[i % particles.colors.length]
                }`,
                filter: 'blur(1px)',
              }}
              animate={{
                y: [0, Math.random() * 80 - 40],
                x: [0, Math.random() * 80 - 40],
                opacity: [
                  particles.opacity.min,
                  particles.opacity.max * 1.5,
                  particles.opacity.min,
                ],
                scale: [1, Math.random() * 0.8 + 0.6, 1],
              }}
              transition={{
                duration: particles.animation.duration * 1.5,
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

      {/* Depth overlay with 3D perspective */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.3) 100%)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Hover overlay with enhanced glow */}
      {onClick && (
        <motion.div
          className="absolute inset-0 bg-cosmic-gold-500/0 group-hover:bg-cosmic-gold-500/15 transition-all duration-300"
          style={{
            boxShadow: '0 0 0px rgba(212, 169, 71, 0)',
          }}
          whileHover={{
            boxShadow: 'inset 0 0 60px rgba(212, 169, 71, 0.3)',
          }}
        />
      )}

      {/* Title overlay on hover with 3D effect */}
      {onClick && (
        <motion.div
          className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
          style={{
            backdropFilter: 'blur(10px)',
          }}
        >
          <h3 className="text-white font-display text-xl mb-2 drop-shadow-lg">
            {space.label}
          </h3>
          <p className="text-cosmic-gold-300 text-sm line-clamp-2 drop-shadow">
            {space.description}
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}
