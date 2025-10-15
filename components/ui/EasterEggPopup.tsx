'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import type { SpiritualGift } from '@/lib/easterEggData'

interface EasterEggPopupProps {
  isOpen: boolean
  onClose: () => void
  gift: SpiritualGift | null
}

export default function EasterEggPopup({
  isOpen,
  onClose,
  gift,
}: EasterEggPopupProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!gift) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Popup Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="pointer-events-auto w-full max-w-lg"
              role="dialog"
              aria-modal="true"
              aria-labelledby="easter-egg-title"
            >
              {/* Glassmorphism Card */}
              <div className="relative overflow-hidden rounded-2xl bg-cosmic-purple-900/40 backdrop-blur-xl border border-cosmic-gold-500/20 shadow-2xl">
                {/* Cosmic Glow Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-cosmic-gold-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                {/* Content */}
                <div className="relative p-8 space-y-6">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-cosmic-purple-800/50 hover:bg-cosmic-purple-700/50 text-cosmic-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic-purple-900"
                    aria-label="Close spiritual gift"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Header */}
                  <div className="text-center space-y-2 pr-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
                      className="inline-block"
                    >
                      <div className="text-5xl mb-2">✨</div>
                    </motion.div>
                    <h2
                      id="easter-egg-title"
                      className="text-xl font-display font-semibold text-cosmic-gold-400"
                    >
                      A Spiritual Gift
                    </h2>
                  </div>

                  {/* Quote/Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="space-y-4"
                  >
                    <blockquote className="text-lg md:text-xl text-cosmic-gray-100 leading-relaxed text-center italic">
                      &quot;{gift.content}&quot;
                    </blockquote>

                    {/* Attribution */}
                    <div className="text-center space-y-1">
                      <p className="text-cosmic-gold-300 font-accent text-base">
                        — {gift.teacher}
                      </p>
                      {gift.source && (
                        <p className="text-cosmic-gray-400 text-sm">
                          {gift.source}
                        </p>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="flex justify-center pt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cosmic-purple-800/50 text-cosmic-gold-300 border border-cosmic-gold-500/20">
                        {gift.category}
                      </span>
                    </div>
                  </motion.div>

                  {/* Footer Message */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-center text-sm text-cosmic-gray-400 pt-4 border-t border-cosmic-gold-500/10"
                  >
                    <p>May this wisdom guide your journey</p>
                  </motion.div>
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-gold-500/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
