'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CONTACT } from '@/lib/constants'
import { TextAndyButtonProps } from '@/lib/types'

/**
 * TextAndyButton Component
 *
 * Opens SMS app with pre-filled message to Andy's phone
 * Detects platform (iOS vs Android) for proper SMS URI formatting
 */
export default function TextAndyButton({
  variant = 'primary',
  size = 'default',
  className = '',
}: TextAndyButtonProps) {
  const [smsUri, setSmsUri] = useState<string>('')

  useEffect(() => {
    // Detect platform for proper SMS URI format
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isAndroid = /Android/.test(navigator.userAgent)

    let uri = ''

    if (isIOS) {
      // iOS uses semicolon separator
      uri = `sms:${CONTACT.phone}&body=${encodeURIComponent(CONTACT.smsMessage)}`
    } else if (isAndroid) {
      // Android uses ? separator
      uri = `sms:${CONTACT.phone}?body=${encodeURIComponent(CONTACT.smsMessage)}`
    } else {
      // Desktop/fallback - try standard SMS URI (may open default SMS app)
      uri = `sms:${CONTACT.phone}?body=${encodeURIComponent(CONTACT.smsMessage)}`
    }

    setSmsUri(uri)
  }, [])

  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cosmic-gold-400 gap-2'

  // Variant styles
  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cosmic-purple-600 to-cosmic-blue-600 hover:from-cosmic-purple-500 hover:to-cosmic-blue-500 text-white shadow-lg shadow-cosmic-purple-500/50 hover:shadow-xl hover:shadow-cosmic-purple-500/60',
    secondary:
      'bg-cosmic-gold-500 hover:bg-cosmic-gold-400 text-cosmic-purple-950 shadow-lg shadow-cosmic-gold-500/30 hover:shadow-xl hover:shadow-cosmic-gold-500/40',
  }

  // Size styles
  const sizeStyles = {
    default: 'px-6 py-3 text-base rounded-lg',
    large: 'px-8 py-4 text-lg rounded-xl',
  }

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  const handleClick = () => {
    if (smsUri) {
      window.location.href = smsUri
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Send text message to ${CONTACT.custodian}`}
    >
      {/* Message icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
      <span>Text {CONTACT.custodian}</span>
    </motion.button>
  )
}

/**
 * Fallback component for non-supporting browsers
 * Displays phone number with copy functionality
 */
export function TextAndyFallback() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT.phone)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="text-center space-y-2">
      <p className="text-cosmic-gray-300">
        Call or text {CONTACT.custodian} at:
      </p>
      <motion.button
        onClick={handleCopy}
        className="text-cosmic-gold-400 hover:text-cosmic-gold-300 font-medium text-lg"
        whileHover={{ scale: 1.05 }}
      >
        {CONTACT.phoneDisplay}
      </motion.button>
      {copied && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-cosmic-gold-400"
        >
          Copied!
        </motion.p>
      )}
    </div>
  )
}
