'use client'

import { motion } from 'framer-motion'
import { ACTIVITIES, HOURS } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import TextAndyButton from '@/components/ui/TextAndyButton'

export default function ActivitiesPage() {
  return (
    <div className="py-12 space-y-16">
      <Container>
        {/* Hero Section */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display text-shadow-glow">
            What We Offer
          </h1>
          <p className="text-xl md:text-2xl text-cosmic-gold-400 font-accent max-w-3xl mx-auto">
            Diverse practices and gatherings to support every aspect of your
            journey
          </p>
        </motion.div>

        {/* Main Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="space-y-4">
                  <div
                    className="text-6xl cursor-pointer hover:scale-110 transition-transform"
                    data-easter-egg-trigger
                  >
                    {activity.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-cosmic-gold-500">
                    {activity.name}
                  </h2>
                  <p className="text-cosmic-gray-300 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Expanded Activity Details */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500 mb-4">
              Dive Deeper
            </h2>
            <p className="text-cosmic-gray-300 max-w-2xl mx-auto">
              Here&apos;s what you can expect from each type of gathering at The
              Seekers Club.
            </p>
          </div>

          {/* Meditation Sessions */}
          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                  data-easter-egg-trigger
                >
                  🧘
                </div>
                <h3 className="text-2xl font-display text-cosmic-gold-400">
                  Meditation Sessions
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  <strong className="text-cosmic-gold-300">
                    Guided Meditation:
                  </strong>{' '}
                  Led sessions exploring various meditation techniques from
                  mindfulness to loving-kindness practices.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Silent Sitting:
                  </strong>{' '}
                  Structured time for personal practice in group energy. Perfect
                  for both beginners and experienced practitioners.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Walking Meditation:
                  </strong>{' '}
                  Mindful movement through our outdoor spaces, connecting with
                  nature and breath.
                </p>
              </div>
            </div>
          </Card>

          {/* Breathwork */}
          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                  data-easter-egg-trigger
                >
                  🌬️
                </div>
                <h3 className="text-2xl font-display text-cosmic-gold-400">
                  Breathwork Circles
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  Conscious connected breathing practices that facilitate
                  release, healing, and expanded awareness. From gentle Pranayama
                  to transformative Holotropic-style sessions, we explore the
                  full spectrum of breath as medicine.
                </p>
                <p>
                  These circles are facilitated in a safe, held space with
                  integration time built in. No experience necessary—just
                  willingness to explore.
                </p>
              </div>
            </div>
          </Card>

          {/* Book Studies */}
          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                  data-easter-egg-trigger
                >
                  📚
                </div>
                <h3 className="text-2xl font-display text-cosmic-gold-400">
                  Book Studies & Wisdom Sharing
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  Deep dives into transformative texts—from ancient spiritual
                  classics to modern psychology and recovery literature. We read,
                  discuss, and integrate the teachings that shape our paths.
                </p>
                <p>
                  Recent and ongoing studies include works by Ram Dass, Pema
                  Chödrön, Eckhart Tolle, and recovery-focused authors. Bring
                  your perspectives, questions, and insights.
                </p>
              </div>
            </div>
          </Card>

          {/* Wisdom Circles */}
          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                  data-easter-egg-trigger
                >
                  🤝
                </div>
                <h3 className="text-2xl font-display text-cosmic-gold-400">
                  Wisdom Sharing Circles
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  Structured sharing circles where seekers come together to
                  speak and listen from the heart. These aren&apos;t therapy
                  sessions—they&apos;re containers for authentic expression,
                  witnessing, and collective wisdom.
                </p>
                <p>
                  Topics vary from gratitude practices to navigating life
                  transitions. Every voice matters. Every story teaches.
                </p>
              </div>
            </div>
          </Card>

          {/* Open Gathering */}
          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                  data-easter-egg-trigger
                >
                  ✨
                </div>
                <h3 className="text-2xl font-display text-cosmic-gold-400">
                  Open Gathering Hours
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  Unstructured community time where the space is simply open for
                  connection. Come play ping pong, sit by the fire, work in the
                  garden, or just be present with others who are also seeking.
                </p>
                <p>
                  This is where organic conversations happen, friendships form,
                  and spontaneous jam sessions or impromptu meditations arise.
                  The magic is in the not-planning.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Other Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500">
                Additional Experiences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-cosmic-gray-300">
                <div>
                  <h4 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Crystal Bowl Sound Healing
                  </h4>
                  <p>
                    Vibrational healing through the resonant tones of crystal
                    singing bowls.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Movement & Flow
                  </h4>
                  <p>
                    Yoga, dance, tai chi, and any form of mindful movement that
                    connects body and spirit.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Fire Ceremonies
                  </h4>
                  <p>
                    Sacred gatherings around the fire circle for release,
                    intention, and connection.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Personal Practice Time
                  </h4>
                  <p>
                    Use any of our 18 spaces for your own meditation, study, or
                    quiet reflection.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Schedule & Visiting Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="text-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500">
                When to Visit
              </h2>
              <div className="space-y-2">
                <p className="text-cosmic-gray-300 font-medium">
                  {HOURS.description}
                </p>
                <p className="text-cosmic-gray-300">{HOURS.days}</p>
                <p className="text-2xl text-cosmic-gold-400 font-accent">
                  {HOURS.formatted}
                </p>
              </div>
              <p className="text-cosmic-gray-300 max-w-2xl mx-auto">
                Specific activity times vary and evolve based on community
                interest. Text Andy for current schedule or to propose a
                gathering.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <TextAndyButton variant="primary" size="large" />
                <Button href="/gallery" variant="ghost" size="large">
                  Explore Our Spaces
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </div>
  )
}
