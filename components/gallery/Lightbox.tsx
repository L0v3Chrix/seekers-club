'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LightboxProps } from '@/lib/types'
import PlaceholderImage from '../ui/PlaceholderImage'

/**
 * Lightbox Component
 *
 * Full-screen modal for viewing gallery spaces
 * with navigation between spaces
 */
export default function Lightbox({
  isOpen,
  onClose,
  space,
  allSpaces,
  currentIndex,
  onNavigate,
}: LightboxProps) {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate('prev')
      if (e.key === 'ArrowRight') onNavigate('next')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNavigate])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < allSpaces.length - 1

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content */}
          <div className="relative z-10 w-full h-full flex flex-col p-4 md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-display text-shadow-glow">
                  {space.label}
                </h2>
                <p className="text-sm text-cosmic-gray-300">
                  {currentIndex + 1} of {allSpaces.length}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-cosmic-purple-900/60 hover:bg-cosmic-purple-800/80 text-cosmic-gray-300 hover:text-white transition-all"
                aria-label="Close lightbox"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center relative">
              {/* Previous Button */}
              {hasPrev && (
                <button
                  onClick={() => onNavigate('prev')}
                  className="absolute left-0 md:left-4 z-20 p-3 rounded-lg bg-cosmic-purple-900/60 hover:bg-cosmic-purple-800/80 text-cosmic-gray-300 hover:text-white transition-all"
                  aria-label="Previous space"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              )}

              {/* Image Container */}
              <motion.div
                key={space.id}
                className="max-w-5xl w-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PlaceholderImage space={space} priority />
              </motion.div>

              {/* Next Button */}
              {hasNext && (
                <button
                  onClick={() => onNavigate('next')}
                  className="absolute right-0 md:right-4 z-20 p-3 rounded-lg bg-cosmic-purple-900/60 hover:bg-cosmic-purple-800/80 text-cosmic-gray-300 hover:text-white transition-all"
                  aria-label="Next space"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Footer - Description */}
            <div className="mt-4 text-center">
              <p className="text-cosmic-gray-300 max-w-2xl mx-auto">
                {space.description}
              </p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cosmic-purple-800/50 text-cosmic-gold-400 border border-cosmic-purple-700/40">
                  {space.category === 'common' && 'Common Area'}
                  {space.category === 'outdoor' && 'Outdoor Space'}
                  {space.category === 'activity' && 'Activity Space'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
