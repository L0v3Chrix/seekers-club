'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GALLERY_SPACES, getSpacesByCategory } from '@/lib/placeholders'
import { SPACE_COUNTS } from '@/lib/placeholders'
import { SpaceData, GalleryFilter } from '@/lib/types'
import Container from '@/components/ui/Container'
import CategoryFilter from '@/components/gallery/CategoryFilter'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import Lightbox from '@/components/gallery/Lightbox'

export default function GalleryPage() {
  const [currentFilter, setCurrentFilter] = useState<GalleryFilter>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedSpace, setSelectedSpace] = useState<SpaceData | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Get filtered spaces
  const filteredSpaces = getSpacesByCategory(currentFilter)

  // Handle space click to open lightbox
  const handleSpaceClick = (space: SpaceData, index: number) => {
    setSelectedSpace(space)
    setSelectedIndex(index)
    setLightboxOpen(true)
  }

  // Handle lightbox navigation
  const handleNavigate = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'prev' ? selectedIndex - 1 : selectedIndex + 1

    if (newIndex >= 0 && newIndex < filteredSpaces.length) {
      setSelectedIndex(newIndex)
      setSelectedSpace(filteredSpaces[newIndex])
    }
  }

  return (
    <div className="py-12 space-y-12">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-4xl md:text-6xl font-display text-shadow-glow"
            data-easter-egg-trigger
          >
            <span className="cursor-pointer hover:opacity-80 transition-opacity">
              Sacred Spaces Gallery
            </span>
          </h1>
          <p className="text-lg md:text-xl text-cosmic-gray-300 max-w-3xl mx-auto">
            Explore all {SPACE_COUNTS.total} unique sanctuary spaces designed
            for meditation, gathering, movement, and connection.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CategoryFilter
            currentFilter={currentFilter}
            onFilterChange={setCurrentFilter}
          />
        </motion.div>

        {/* Space Count */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-cosmic-gray-400">
            Showing {filteredSpaces.length}{' '}
            {currentFilter === 'all' ? 'total' : currentFilter} space
            {filteredSpaces.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GalleryGrid
            spaces={filteredSpaces}
            onSpaceClick={handleSpaceClick}
          />
        </motion.div>

        {/* Space Breakdown */}
        <motion.div
          className="pt-12 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-cosmic-gray-400">
            <div>
              <span className="font-medium text-cosmic-gold-400">
                {SPACE_COUNTS.common}
              </span>{' '}
              Common Areas
            </div>
            <div>
              <span className="font-medium text-cosmic-gold-400">
                {SPACE_COUNTS.outdoor}
              </span>{' '}
              Outdoor Spaces
            </div>
            <div>
              <span className="font-medium text-cosmic-gold-400">
                {SPACE_COUNTS.activity}
              </span>{' '}
              Activity Spaces
            </div>
          </div>
          <p className="text-cosmic-gray-300 max-w-2xl mx-auto">
            Each space has been thoughtfully designed to support different
            aspects of your journey—from quiet contemplation to joyful
            movement.
          </p>
        </motion.div>
      </Container>

      {/* Lightbox Modal */}
      {selectedSpace && (
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          space={selectedSpace}
          allSpaces={filteredSpaces}
          currentIndex={selectedIndex}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  )
}
