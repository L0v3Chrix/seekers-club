'use client'

import { motion } from 'framer-motion'
import { SacredGeometryProps } from '@/lib/types'

/**
 * Sacred Geometry SVG Component
 *
 * Renders various sacred geometry patterns as SVG
 * Used in placeholder images and decorative elements
 */
export default function SacredGeometry({
  type,
  size = 64,
  color = '#d4a947',
  className = '',
  animate = false,
}: SacredGeometryProps) {
  const SVGWrapper = animate ? motion.svg : 'svg'

  const animationProps = animate
    ? {
        animate: { rotate: 360 },
        transition: { duration: 60, repeat: Infinity, ease: 'linear' },
      }
    : {}

  // Common SVG props
  const svgProps = {
    width: size,
    height: size,
    viewBox: '0 0 100 100',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    ...animationProps,
  }

  switch (type) {
    case 'flower-of-life':
      return (
        <SVGWrapper {...svgProps}>
          <g fill="none" stroke={color} strokeWidth="0.5">
            {/* Center circle */}
            <circle cx="50" cy="50" r="10" />
            {/* Six petals around center */}
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180
              const x = 50 + 10 * Math.cos(angle)
              const y = 50 + 10 * Math.sin(angle)
              return <circle key={i} cx={x} cy={y} r="10" />
            })}
            {/* Outer ring */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180
              const x = 50 + 20 * Math.cos(angle)
              const y = 50 + 20 * Math.sin(angle)
              return <circle key={`outer-${i}`} cx={x} cy={y} r="10" />
            })}
          </g>
        </SVGWrapper>
      )

    case 'seed-of-life':
      return (
        <SVGWrapper {...svgProps}>
          <g fill="none" stroke={color} strokeWidth="0.8">
            {/* Center circle */}
            <circle cx="50" cy="50" r="12" />
            {/* Six circles around center */}
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180
              const x = 50 + 12 * Math.cos(angle)
              const y = 50 + 12 * Math.sin(angle)
              return <circle key={i} cx={x} cy={y} r="12" />
            })}
          </g>
        </SVGWrapper>
      )

    case 'metatron':
      return (
        <SVGWrapper {...svgProps}>
          <g fill="none" stroke={color} strokeWidth="0.4">
            {/* Outer circle */}
            <circle cx="50" cy="50" r="40" opacity="0.3" />
            {/* 13 circles of Metatron's Cube */}
            {[
              { x: 50, y: 50 },
              { x: 50, y: 20 },
              { x: 50, y: 80 },
              { x: 20, y: 50 },
              { x: 80, y: 50 },
              { x: 35, y: 35 },
              { x: 65, y: 35 },
              { x: 35, y: 65 },
              { x: 65, y: 65 },
              { x: 27, y: 27 },
              { x: 73, y: 27 },
              { x: 27, y: 73 },
              { x: 73, y: 73 },
            ].map((pos, i) => (
              <circle key={i} cx={pos.x} cy={pos.y} r="5" />
            ))}
            {/* Connecting lines */}
            <line x1="50" y1="50" x2="50" y2="20" />
            <line x1="50" y1="50" x2="50" y2="80" />
            <line x1="50" y1="50" x2="20" y2="50" />
            <line x1="50" y1="50" x2="80" y2="50" />
            <line x1="50" y1="50" x2="35" y2="35" />
            <line x1="50" y1="50" x2="65" y2="35" />
            <line x1="50" y1="50" x2="35" y2="65" />
            <line x1="50" y1="50" x2="65" y2="65" />
          </g>
        </SVGWrapper>
      )

    case 'sri-yantra':
      return (
        <SVGWrapper {...svgProps}>
          <g fill="none" stroke={color} strokeWidth="0.5">
            {/* Outer square */}
            <rect x="10" y="10" width="80" height="80" />
            {/* Inner circle */}
            <circle cx="50" cy="50" r="35" />
            {/* Triangles pointing down */}
            <polygon points="50,25 30,60 70,60" />
            <polygon points="50,30 35,55 65,55" />
            {/* Triangles pointing up */}
            <polygon points="50,75 30,40 70,40" />
            <polygon points="50,70 35,45 65,45" />
            {/* Center dot (bindu) */}
            <circle cx="50" cy="50" r="2" fill={color} />
          </g>
        </SVGWrapper>
      )

    case 'vesica-piscis':
      return (
        <SVGWrapper {...svgProps}>
          <g fill="none" stroke={color} strokeWidth="0.8">
            <circle cx="40" cy="50" r="20" />
            <circle cx="60" cy="50" r="20" />
            {/* Highlight the vesica center */}
            <path
              d="M 50 30 A 20 20 0 0 1 50 70 A 20 20 0 0 1 50 30"
              fill={color}
              fillOpacity="0.1"
            />
          </g>
        </SVGWrapper>
      )

    case 'torus':
      return (
        <SVGWrapper {...svgProps}>
          <g fill="none" stroke={color} strokeWidth="0.5">
            {/* Outer ellipse */}
            <ellipse cx="50" cy="50" rx="35" ry="20" />
            {/* Inner ellipse */}
            <ellipse cx="50" cy="50" rx="25" ry="12" />
            {/* Flow lines */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180
              return (
                <path
                  key={i}
                  d={`M 50 50 Q ${50 + 30 * Math.cos(angle)} ${
                    50 + 15 * Math.sin(angle)
                  } ${50 + 35 * Math.cos(angle)} ${50 + 20 * Math.sin(angle)}`}
                  opacity="0.4"
                />
              )
            })}
          </g>
        </SVGWrapper>
      )

    case 'hexagon':
      return (
        <SVGWrapper {...svgProps}>
          <g fill="none" stroke={color} strokeWidth="0.8">
            {/* Outer hexagon */}
            <polygon points="50,15 75,30 75,60 50,85 25,60 25,30" />
            {/* Inner hexagon */}
            <polygon points="50,30 65,40 65,60 50,70 35,60 35,40" />
            {/* Connecting lines */}
            <line x1="50" y1="15" x2="50" y2="30" />
            <line x1="75" y1="30" x2="65" y2="40" />
            <line x1="75" y1="60" x2="65" y2="60" />
            <line x1="50" y1="85" x2="50" y2="70" />
            <line x1="25" y1="60" x2="35" y2="60" />
            <line x1="25" y1="30" x2="35" y2="40" />
            {/* Center dot */}
            <circle cx="50" cy="50" r="3" fill={color} />
          </g>
        </SVGWrapper>
      )

    case 'crescent-moon':
      return (
        <SVGWrapper {...svgProps}>
          <g fill={color} stroke="none">
            {/* Crescent moon shape */}
            <path
              d="M 50 20 A 20 20 0 1 1 50 80 A 15 15 0 0 0 50 20"
              opacity="0.8"
            />
            {/* Small stars */}
            {[
              { x: 30, y: 35 },
              { x: 35, y: 55 },
              { x: 28, y: 70 },
            ].map((pos, i) => (
              <circle
                key={i}
                cx={pos.x}
                cy={pos.y}
                r="1.5"
                fill={color}
                opacity="0.6"
              />
            ))}
          </g>
        </SVGWrapper>
      )

    default:
      return null
  }
}
