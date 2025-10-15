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
  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cosmic-gold-400 disabled:opacity-50 disabled:cursor-not-allowed'

  // Variant styles
  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cosmic-purple-600 to-cosmic-blue-600 hover:from-cosmic-purple-500 hover:to-cosmic-blue-500 text-white shadow-lg shadow-cosmic-purple-500/50 hover:shadow-xl hover:shadow-cosmic-purple-500/60',
    secondary:
      'bg-cosmic-gold-500 hover:bg-cosmic-gold-400 text-cosmic-purple-950 shadow-lg shadow-cosmic-gold-500/30 hover:shadow-xl hover:shadow-cosmic-gold-500/40',
    ghost:
      'bg-transparent border-2 border-cosmic-gold-400 text-cosmic-gold-400 hover:bg-cosmic-gold-400/10 hover:border-cosmic-gold-300',
  }

  // Size styles
  const sizeStyles = {
    small: 'px-4 py-2 text-sm rounded-md',
    default: 'px-6 py-3 text-base rounded-lg',
    large: 'px-8 py-4 text-lg rounded-xl',
  }

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel}>
        <motion.span
          className={buttonClasses}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
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
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  )
}
