'use client'

import { useState, useEffect, useCallback } from 'react'
import EasterEggPopup from './EasterEggPopup'
import {
  getRandomUnseenGift,
  getFinalGifts,
  type SpiritualGift,
} from '@/lib/easterEggData'

interface EasterEggManagerProps {
  /**
   * Probability of Easter egg appearing (0-1)
   * Default: 0.25 (25% chance)
   */
  triggerChance?: number

  /**
   * Enable scroll-based triggers
   * Default: true
   */
  enableScrollTriggers?: boolean

  /**
   * Enable time-based triggers (appears after X seconds)
   * Default: true
   */
  enableTimeTriggers?: boolean

  /**
   * Minimum time on page before time trigger (ms)
   * Default: 30000 (30 seconds)
   */
  minTimeBeforeTrigger?: number

  /**
   * Enable click triggers on specific elements
   * Default: true
   */
  enableClickTriggers?: boolean

  /**
   * CSS selector for clickable Easter egg elements
   * Default: '[data-easter-egg-trigger]'
   */
  clickTriggerSelector?: string

  /**
   * Allow re-discovery after all 33 found
   * Default: false
   */
  allowRediscovery?: boolean
}

const STORAGE_KEY = 'seekers-club-spiritual-gifts-seen'
const LAST_SHOWN_KEY = 'seekers-club-last-gift-shown'

export default function EasterEggManager({
  triggerChance = 0.25,
  enableScrollTriggers = true,
  enableTimeTriggers = true,
  minTimeBeforeTrigger = 30000,
  enableClickTriggers = true,
  clickTriggerSelector = '[data-easter-egg-trigger]',
  allowRediscovery = false,
}: EasterEggManagerProps) {
  const [currentGift, setCurrentGift] = useState<SpiritualGift | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [seenGiftIds, setSeenGiftIds] = useState<string[]>([])
  const [hasTriggeredOnce, setHasTriggeredOnce] = useState(false)

  // Load seen gifts from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setSeenGiftIds(parsed)
      }
    } catch (error) {
      console.error('Failed to load seen gifts:', error)
    }
  }, [])

  // Save seen gifts to localStorage
  const markGiftAsSeen = useCallback((giftId: string) => {
    setSeenGiftIds((prev) => {
      const updated = [...prev, giftId]
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        localStorage.setItem(LAST_SHOWN_KEY, Date.now().toString())
      } catch (error) {
        console.error('Failed to save seen gift:', error)
      }
      return updated
    })
  }, [])

  // Reset progress (for re-discovery)
  const resetProgress = useCallback(() => {
    setSeenGiftIds([])
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(LAST_SHOWN_KEY)
  }, [])

  // Check if all gifts have been seen
  const allGiftsSeen = seenGiftIds.length >= getFinalGifts().length

  // Show gift logic
  const showGift = useCallback(() => {
    // Prevent showing if already open
    if (isOpen) return

    // Check if we should reset for re-discovery
    if (allGiftsSeen && allowRediscovery) {
      resetProgress()
    }

    // If all gifts seen and no re-discovery, don't show
    if (allGiftsSeen && !allowRediscovery) {
      return
    }

    // Check rate limiting (don't show if recently shown)
    try {
      const lastShown = localStorage.getItem(LAST_SHOWN_KEY)
      if (lastShown) {
        const timeSinceLastShown = Date.now() - parseInt(lastShown)
        const minTimeBetweenGifts = 60000 // 1 minute minimum
        if (timeSinceLastShown < minTimeBetweenGifts) {
          return
        }
      }
    } catch (error) {
      console.error('Failed to check last shown time:', error)
    }

    // Roll the dice
    if (Math.random() > triggerChance) {
      return
    }

    // Get random unseen gift
    const gift = getRandomUnseenGift(seenGiftIds)
    if (gift) {
      setCurrentGift(gift)
      setIsOpen(true)
      markGiftAsSeen(gift.id)
    }
  }, [
    isOpen,
    allGiftsSeen,
    allowRediscovery,
    resetProgress,
    triggerChance,
    seenGiftIds,
    markGiftAsSeen,
  ])

  // Scroll trigger
  useEffect(() => {
    if (!enableScrollTriggers || hasTriggeredOnce) return

    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up'
      lastScrollY = scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Trigger at specific scroll depths
          const scrollPercentage =
            (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

          if (
            scrollPercentage > 25 &&
            scrollPercentage < 30 &&
            scrollDirection === 'down'
          ) {
            showGift()
            setHasTriggeredOnce(true)
          }

          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enableScrollTriggers, hasTriggeredOnce, showGift])

  // Time-based trigger
  useEffect(() => {
    if (!enableTimeTriggers) return

    const timer = setTimeout(() => {
      showGift()
    }, minTimeBeforeTrigger)

    return () => clearTimeout(timer)
  }, [enableTimeTriggers, minTimeBeforeTrigger, showGift])

  // Click triggers on specific elements
  useEffect(() => {
    if (!enableClickTriggers) return

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches(clickTriggerSelector) || target.closest(clickTriggerSelector)) {
        e.preventDefault()
        showGift()
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [enableClickTriggers, clickTriggerSelector, showGift])

  const handleClose = () => {
    setIsOpen(false)
    // Clear current gift after animation completes
    setTimeout(() => {
      setCurrentGift(null)
    }, 300)
  }

  return (
    <>
      <EasterEggPopup isOpen={isOpen} onClose={handleClose} gift={currentGift} />

      {/* Debug Info (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-3 rounded-lg space-y-1 max-w-xs z-[100]">
          <p className="font-bold">Easter Egg Debug:</p>
          <p>Seen: {seenGiftIds.length} / {getFinalGifts().length}</p>
          <p>Trigger Chance: {(triggerChance * 100).toFixed(0)}%</p>
          <p>All Seen: {allGiftsSeen ? 'Yes' : 'No'}</p>
          {allGiftsSeen && allowRediscovery && (
            <button
              onClick={resetProgress}
              className="mt-2 px-2 py-1 bg-cosmic-gold-500 text-black rounded text-xs hover:bg-cosmic-gold-400"
            >
              Reset Progress
            </button>
          )}
        </div>
      )}
    </>
  )
}
