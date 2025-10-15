'use client'

import { motion } from 'framer-motion'
import { GalleryCardProps } from '@/lib/types'
import PlaceholderImage from '../ui/PlaceholderImage'

/**
 * GalleryCard Component
 *
 * Individual gallery card with space information
 */
export default function GalleryCard({ space, onClick }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div
        className="backdrop-blur-md bg-cosmic-purple-900/20 border border-cosmic-purple-700/40 rounded-xl overflow-hidden hover:border-cosmic-gold-500/50 transition-all duration-300 cursor-pointer"
        onClick={onClick}
      >
        {/* Placeholder Image */}
        <PlaceholderImage space={space} onClick={onClick} />

        {/* Card Content */}
        <div className="p-4 space-y-2">
          <h3 className="text-xl font-display text-cosmic-gold-400 group-hover:text-cosmic-gold-300 transition-colors">
            {space.label}
          </h3>
          <p className="text-sm text-cosmic-gray-300 line-clamp-2">
            {space.description}
          </p>

          {/* Category Badge */}
          <div className="pt-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cosmic-purple-800/50 text-cosmic-gold-400 border border-cosmic-purple-700/40">
              {space.category === 'common' && 'Common Area'}
              {space.category === 'outdoor' && 'Outdoor Space'}
              {space.category === 'activity' && 'Activity Space'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
