'use client'

import { AnimatePresence } from 'framer-motion'
import { GalleryGridProps } from '@/lib/types'
import GalleryCard from './GalleryCard'

/**
 * GalleryGrid Component
 *
 * Grid layout for gallery cards with animation
 */
export default function GalleryGrid({
  spaces,
  onSpaceClick,
}: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="wait">
        {spaces.map((space, index) => (
          <GalleryCard
            key={space.id}
            space={space}
            index={index}
            onClick={() => onSpaceClick(space, index)}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
