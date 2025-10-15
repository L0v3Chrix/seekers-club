'use client'

import { motion } from 'framer-motion'
import { GALLERY_CATEGORIES } from '@/lib/constants'
import { CategoryFilterProps } from '@/lib/types'

/**
 * CategoryFilter Component
 *
 * Filter buttons for gallery categories
 */
export default function CategoryFilter({
  currentFilter,
  onFilterChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {GALLERY_CATEGORIES.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onFilterChange(category.value)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            currentFilter === category.value
              ? 'bg-cosmic-gold-500 text-cosmic-purple-950 shadow-lg shadow-cosmic-gold-500/30'
              : 'bg-cosmic-purple-900/40 text-cosmic-gray-300 hover:bg-cosmic-purple-800/60 border border-cosmic-purple-700/40'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  )
}
