'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SITE_NAME, SITE_TAGLINE, LOCATION, HOURS, ACTIVITIES } from '@/lib/constants'
import { GALLERY_SPACES } from '@/lib/placeholders'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import TextAndyButton from '@/components/ui/TextAndyButton'
import SacredDivider from '@/components/ui/SacredDivider'

export default function HomePage() {
  // Get featured spaces for homepage preview
  const featuredSpaces = [
    GALLERY_SPACES.find((s) => s.id === 'meditation-1'),
    GALLERY_SPACES.find((s) => s.id === 'gathering-main'),
    GALLERY_SPACES.find((s) => s.id === 'backyard'),
  ].filter(Boolean)

  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="relative">
        <Container maxWidth="default">
          <motion.div
            className="text-center space-y-8 py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-shadow-glow-strong leading-tight tracking-tighter"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {SITE_NAME}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-cosmic-gold-400 font-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {SITE_TAGLINE}
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-cosmic-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ lineHeight: 1.8 }}
            >
              Welcome to a sanctuary space in Austin where authentic connection
              and healing flourish. A judgment-free zone for meditation,
              breathwork, wisdom sharing, and growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button href="/gallery" variant="primary" size="large">
                Explore Our Spaces
              </Button>
              <TextAndyButton variant="secondary" size="large" />
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                'Recovery-Friendly',
                'Judgment-Free Zone',
                'Drop-In Welcome',
              ].map((indicator, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-cosmic-gold-400"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium">{indicator}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <div data-easter-egg-trigger className="cursor-pointer hover:opacity-80 transition-opacity">
        <SacredDivider iconType="seed-of-life" />
      </div>

      {/* Featured Spaces Preview */}
      <section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500">
                Sacred Spaces
              </h2>
              <p className="text-lg text-cosmic-gray-300 max-w-2xl mx-auto">
                Discover our diverse sanctuary spaces designed for meditation,
                gathering, and connection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredSpaces.map((space, index) => (
                <motion.div
                  key={space?.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {space && (
                    <PlaceholderImage space={space} priority={index < 3} />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button href="/gallery" variant="ghost" size="large">
                View All 18 Spaces →
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <div data-easter-egg-trigger className="cursor-pointer hover:opacity-80 transition-opacity">
        <SacredDivider iconType="vesica-piscis" />
      </div>

      {/* Activities Section - LIGHT VARIANT FOR CONTRAST */}
      <section className="relative py-16 -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Light background overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(212, 169, 71, 0.08) 0%, transparent 70%)',
            mixBlendMode: 'screen',
          }}
        />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500">
                What We Offer
              </h2>
              <p className="text-lg text-cosmic-gray-200 max-w-2xl mx-auto">
                A diverse range of practices and gatherings to support your
                journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACTIVITIES.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card hover variant="light" className="h-full">
                    <div className="space-y-4">
                      <div className="text-5xl">{activity.icon}</div>
                      <h3 className="text-xl font-display font-semibold text-cosmic-gold-600">
                        {activity.name}
                      </h3>
                      <p className="text-cosmic-gray-800 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button href="/activities" variant="ghost" size="large">
                Learn More About Our Offerings →
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SACRED GEOMETRY DIVIDER - Phase 5: Prominent & Large (Mobile Responsive) */}
      <section className="relative py-20 overflow-hidden">
        <Container>
          <motion.div
            className="relative flex items-center justify-center min-h-[400px] md:min-h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* Massive Flower of Life - Responsive: 300px mobile → 1200px desktop */}
            <motion.div
              data-easter-egg-trigger
              className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] lg:w-[1200px] lg:h-[1200px] cursor-pointer hover:opacity-90 transition-opacity"
              style={{
                opacity: 0.12,
                mixBlendMode: 'overlay',
                filter: 'drop-shadow(0 0 80px rgba(212, 169, 71, 0.4))',
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 180,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="text-cosmic-gold-400"
              >
                <g fill="none" stroke="currentColor" strokeWidth="0.3">
                  {/* Center circle */}
                  <circle cx="50" cy="50" r="10" />
                  {/* Six petals around center */}
                  {Array.from({ length: 6 }).map((_, i) => {
                    const angle = (i * 60 * Math.PI) / 180
                    const x = 50 + 10 * Math.cos(angle)
                    const y = 50 + 10 * Math.sin(angle)
                    return <circle key={i} cx={x} cy={y} r="10" />
                  })}
                  {/* Outer ring */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180
                    const x = 50 + 20 * Math.cos(angle)
                    const y = 50 + 20 * Math.sin(angle)
                    return <circle key={`outer-${i}`} cx={x} cy={y} r="10" />
                  })}
                </g>
              </svg>
            </motion.div>

            {/* Content overlaid on geometry */}
            <div className="relative z-10 text-center space-y-6 px-4">
              <motion.h2
                className="text-3xl md:text-5xl font-display font-semibold text-cosmic-gold-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                A Space for Connection
              </motion.h2>
              <motion.p
                className="text-xl text-cosmic-gray-200 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Sacred geometry reminds us that everything is connected. Every
                seeker who enters this space becomes part of a greater pattern
                of healing and growth.
              </motion.p>
            </div>
          </motion.div>
        </Container>
      </section>

      <div data-easter-egg-trigger className="cursor-pointer hover:opacity-80 transition-opacity">
        <SacredDivider iconType="metatron" />
      </div>

      {/* Location & Hours Section */}
      <section className="py-12">
        <Container maxWidth="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="text-center space-y-8 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-cosmic-gold-500">
                Visit Us
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="space-y-2">
                  <h3 className="text-xl font-display text-cosmic-gold-400">
                    Location
                  </h3>
                  <p className="text-cosmic-gray-300">
                    {LOCATION.address.street}
                  </p>
                  <p className="text-cosmic-gray-300">
                    {LOCATION.address.city}, {LOCATION.address.state}{' '}
                    {LOCATION.address.zip}
                  </p>
                  <a
                    href={LOCATION.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    Get Directions →
                  </a>
                </div>

                {/* Hours */}
                <div className="space-y-2 pt-4">
                  <h3 className="text-xl font-display text-cosmic-gold-400">
                    Open Hours
                  </h3>
                  <p className="text-cosmic-gray-300 font-medium">
                    {HOURS.description}
                  </p>
                  <p className="text-cosmic-gray-300">{HOURS.days}</p>
                  <p className="text-2xl text-cosmic-gold-400 font-accent">
                    {HOURS.formatted}
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-cosmic-gray-300 mb-4">
                  Questions? Drop in during open hours or text Andy.
                </p>
                <TextAndyButton variant="primary" size="large" />
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-12">
        <Container maxWidth="narrow">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-cosmic-gold-500">
              Your Journey Begins Here
            </h2>
            <p className="text-lg text-cosmic-gray-300 max-w-xl mx-auto">
              Whether you're seeking meditation, connection, or simply a
              peaceful space to be, The Seekers Club welcomes you with open
              hearts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/about" variant="primary" size="large">
                Learn Our Story
              </Button>
              <Button href="/contact" variant="ghost" size="large">
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
