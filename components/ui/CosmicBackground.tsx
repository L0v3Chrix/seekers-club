'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CosmicBackgroundProps } from '@/lib/types'
import SacredGeometry from './SacredGeometry'

/**
 * CosmicBackground Component - MULTI-LAYER COSMIC MASTERPIECE
 *
 * 7-layer system with advanced CSS blend modes, 3D transforms, and sacred geometry
 * Delivers the cosmic/psychedelic aesthetic from the design system
 */
export default function CosmicBackground({
  variant = 'default',
  particles = true,
  animated = true,
  className = '',
}: CosmicBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  const perspectiveY = useTransform(scrollY, [0, 1000], [0, 50])

  // Only render particles after client-side mount to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className={`fixed inset-0 -z-50 overflow-hidden ${className}`}>
      {/* LAYER 1: Deep space base - Radial gradient from center */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #2d1b4e 0%, #0a1128 50%, #000000 100%)',
          filter: 'saturate(1.3) contrast(1.1)',
        }}
      />

      {/* LAYER 2: Conic gradient rotating colors with blend mode */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 50%,
            #5c3d99 0deg,
            #2541a1 72deg,
            #7c4dbd 144deg,
            #d946ef 216deg,
            #5c3d99 288deg,
            #2541a1 360deg
          )`,
          backgroundSize: '200% 200%',
          mixBlendMode: 'screen',
          opacity: 0.4,
        }}
        animate={{
          rotate: animated ? 360 : 0,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* LAYER 3: Multiple radial gradients - Nebulae spots */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 800px 600px at 20% 30%, rgba(124, 77, 189, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 600px 800px at 80% 70%, rgba(37, 65, 161, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 700px 500px at 50% 50%, rgba(217, 70, 239, 0.2) 0%, transparent 50%),
            radial-gradient(circle 500px at 10% 80%, rgba(92, 61, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle 400px at 90% 20%, rgba(59, 91, 219, 0.25) 0%, transparent 50%)
          `,
          mixBlendMode: 'color-dodge',
          filter: 'blur(60px)',
        }}
      />

      {/* LAYER 4: Large sacred geometry patterns - RESPONSIVE SIZES */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: 0.15,
          mixBlendMode: 'overlay',
          y: perspectiveY,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Center massive Flower of Life - RESPONSIVE: 400px mobile, 800px desktop */}
          {isMounted && (
            <div className="absolute">
              <SacredGeometry
                type="flower-of-life"
                size={window.innerWidth < 768 ? 400 : 800}
                color="#d4a947"
                animate={true}
                className="scale-50 sm:scale-100"
              />
            </div>
          )}

          {/* Secondary geometry in corners - HIDDEN ON MOBILE for performance */}
          <div className="hidden md:block absolute top-10 left-10 opacity-60">
            <SacredGeometry
              type="seed-of-life"
              size={300}
              color="#e6c566"
              animate={true}
            />
          </div>

          <div className="hidden md:block absolute bottom-10 right-10 opacity-60">
            <SacredGeometry
              type="metatron"
              size={350}
              color="#d4a947"
              animate={true}
            />
          </div>

          <div className="hidden lg:block absolute top-1/4 right-20 opacity-40">
            <SacredGeometry
              type="sri-yantra"
              size={250}
              color="#f5e099"
              animate={true}
            />
          </div>

          <div className="hidden lg:block absolute bottom-1/4 left-20 opacity-40">
            <SacredGeometry
              type="vesica-piscis"
              size={200}
              color="#e6c566"
              animate={true}
            />
          </div>
        </div>
      </motion.div>

      {/* LAYER 5: Enhanced particle field with varied sizes - MOBILE OPTIMIZED */}
      {particles && isMounted && (
        <div className="absolute inset-0">
          {/* Small stars - REDUCED FOR MOBILE: 30 mobile, 60 desktop */}
          {Array.from({ length: window.innerWidth < 768 ? 30 : 60 }).map((_, i) => (
            <motion.div
              key={`small-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 0.5,
                height: Math.random() * 2 + 0.5,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
                boxShadow: '0 0 2px rgba(255, 255, 255, 0.5)',
              }}
              animate={{
                y: [0, Math.random() * 60 - 30],
                x: [0, Math.random() * 60 - 30],
                opacity: [
                  Math.random() * 0.6 + 0.2,
                  Math.random() * 0.3 + 0.1,
                  Math.random() * 0.6 + 0.2,
                ],
                scale: [1, Math.random() * 0.5 + 0.8, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Medium glowing orbs - REDUCED FOR MOBILE: 10 mobile, 20 desktop */}
          {Array.from({ length: window.innerWidth < 768 ? 10 : 20 }).map((_, i) => (
            <motion.div
              key={`medium-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(212, 169, 71, ${Math.random() * 0.6 + 0.3}) 0%, transparent 70%)`,
                boxShadow: '0 0 10px rgba(212, 169, 71, 0.6)',
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.8, 0.3, 0.8],
                scale: [1, Math.random() * 0.6 + 0.7, 1],
              }}
              transition={{
                duration: Math.random() * 12 + 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Large cosmic dust particles - REDUCED FOR MOBILE: 5 mobile, 10 desktop */}
          {Array.from({ length: window.innerWidth < 768 ? 5 : 10 }).map((_, i) => (
            <motion.div
              key={`large-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 12 + 6,
                height: Math.random() * 12 + 6,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(124, 77, 189, ${Math.random() * 0.4 + 0.2}) 0%, transparent 60%)`,
                filter: 'blur(4px)',
              }}
              animate={{
                y: [0, Math.random() * 150 - 75],
                x: [0, Math.random() * 150 - 75],
                opacity: [0.6, 0.2, 0.6],
                scale: [1, Math.random() * 0.8 + 0.6, 1],
              }}
              transition={{
                duration: Math.random() * 15 + 25,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* LAYER 6: Enhanced noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* LAYER 7: Subtle color shifts with hue rotation */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.3) 100%)',
          mixBlendMode: 'hard-light',
        }}
        animate={{
          filter: animated
            ? [
                'hue-rotate(0deg) saturate(1)',
                'hue-rotate(15deg) saturate(1.2)',
                'hue-rotate(0deg) saturate(1)',
              ]
            : 'hue-rotate(0deg) saturate(1)',
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
