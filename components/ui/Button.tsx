'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ButtonProps } from '@/lib/types'

/**
 * Button Component
 *
 * Versatile button with multiple variants and sizes
 * Supports both button and link functionality
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  // Base styles with relative positioning and overflow for ::before pseudo-element
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cosmic-gold-400 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden'

  // Variant styles
  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 hover:-translate-y-0.5',
    secondary:
      'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/70 hover:-translate-y-0.5',
    ghost:
      'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300',
  }

  // Size styles
  const sizeStyles = {
    small: 'px-4 py-2 text-sm rounded-full',
    default: 'px-6 py-3 text-base rounded-full',
    large: 'px-8 py-4 text-lg rounded-full',
  }

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  // Cosmic glow effect component (reusable for both button and link)
  const CosmicGlow = () => (
    <motion.span
      className="absolute inset-0 rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(212, 169, 71, 0.4) 0%, transparent 70%)',
        opacity: 0,
      }}
      whileHover={{ opacity: variant === 'primary' || variant === 'secondary' ? 0.3 : 0 }}
      transition={{ duration: 0.3 }}
    />
  )

  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel}>
        <motion.span
          className={buttonClasses}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <CosmicGlow />
          <span className="relative z-10">{children}</span>
        </motion.span>
      </Link>
    )
  }

  // Render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      aria-label={ariaLabel}
    >
      <CosmicGlow />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
