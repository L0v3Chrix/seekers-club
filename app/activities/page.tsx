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
            Recovery Meetings & Fellowship
          </h1>
          <p className="text-xl md:text-2xl text-cosmic-gold-400 font-accent max-w-3xl mx-auto">
            Grounded in AA principles, welcoming all pathways out of darkness
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
              What to Expect
            </h2>
            <p className="text-cosmic-gray-300 max-w-2xl mx-auto">
              Recovery-focused gatherings, spiritual practices, and fellowship opportunities
              grounded in AA principles and open to all authentic pathways.
            </p>
          </div>

          {/* Recovery Meetings */}
          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                  data-easter-egg-trigger
                >
                  🙏
                </div>
                <h3 className="text-2xl font-display text-cosmic-gold-400">
                  Recovery Meetings
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  <strong className="text-cosmic-gold-300">
                    The Heart of Our Community:
                  </strong>{' '}
                  Regular meetings grounded in 12-step principles, welcoming anyone
                  working their program or exploring recovery.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Open Meetings:
                  </strong>{' '}
                  All are welcome—whether in recovery or supporting someone who is.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Step Study Groups:
                  </strong>{' '}
                  Deep dives into the 12 steps with others walking the path.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    All Pathways Honored:
                  </strong>{' '}
                  AA, NA, CA, SMART Recovery—all authentic recovery approaches are worthy.
                </p>
              </div>
            </div>
          </Card>

          {/* Meditation & Contemplation */}
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
                  Meditation & Contemplation
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  Spiritual practice is central to recovery. Meditation deepens our
                  consciousness, strengthens our program, and connects us to something
                  greater than ourselves.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Guided Meditation:
                  </strong>{' '}
                  Led sessions exploring mindfulness, loving-kindness, and recovery-focused practices.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Silent Sitting:
                  </strong>{' '}
                  Structured time for personal reflection in supportive group energy.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Walking Meditation:
                  </strong>{' '}
                  Mindful movement through our outdoor spaces, connecting with nature and breath.
                </p>
              </div>
            </div>
          </Card>

          {/* Quiet Spaces for Step Work */}
          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                  data-easter-egg-trigger
                >
                  📖
                </div>
                <h3 className="text-2xl font-display text-cosmic-gold-400">
                  Quiet Spaces for Step Work
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  Working the steps requires quiet time for reflection, inventory,
                  and honest self-examination. We offer 18 dedicated spaces designed
                  for this sacred work.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Private Reflection Rooms:
                  </strong>{' '}
                  Peaceful spaces for writing inventory and working through your steps.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Recovery Library:
                  </strong>{' '}
                  Big Book, 12 & 12, and recovery literature available for study.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Outdoor Contemplation:
                  </strong>{' '}
                  Garden and outdoor spaces for prayer and meditation.
                </p>
              </div>
            </div>
          </Card>

          {/* Fellowship & Community */}
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
                  Fellowship & Community
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  Recovery happens in community. Fellowship is where we practice
                  honesty, build authentic connections, and sharpen each other
                  through shared experience.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Open Fellowship Hours:
                  </strong>{' '}
                  Coffee, conversation, ping pong, and organic connection with others in recovery.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Shared Meals:
                  </strong>{' '}
                  Potlucks and community dinners where we break bread together.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Fire Circle Gatherings:
                  </strong>{' '}
                  Evening gatherings around the fire for fellowship and storytelling.
                </p>
              </div>
            </div>
          </Card>

          {/* Breathwork & Consciousness Expansion */}
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
                  Breathwork & Consciousness Expansion
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  Conscious breathing practices support recovery by facilitating
                  release, healing, and expanded awareness. From gentle techniques
                  to transformative sessions, we explore breath as a tool for
                  spiritual awakening.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Pranayama & Gentle Breathwork:
                  </strong>{' '}
                  Foundational breathing practices for calm and presence.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Holotropic-Style Sessions:
                  </strong>{' '}
                  Deep transformative breathwork in safe, held space with integration time.
                </p>
              </div>
            </div>
          </Card>

          {/* Recovery Literature */}
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
                  Recovery Literature & Book Studies
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  Deep dives into recovery literature and spiritual texts that
                  guide our journey from darkness to light.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Big Book Study:
                  </strong>{' '}
                  Regular study of Alcoholics Anonymous&apos; foundational text.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    12 Steps & 12 Traditions:
                  </strong>{' '}
                  Exploring the principles that guide recovery programs.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Recovery Memoirs & Spiritual Classics:
                  </strong>{' '}
                  Works by recovery-focused spiritual teachers and authors.
                </p>
              </div>
            </div>
          </Card>

          {/* Service Opportunities */}
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
                  Service Opportunities
                </h3>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p>
                  Service is a cornerstone of recovery. We can only keep what we
                  have by giving it away. The Seekers Club offers many ways to
                  practice this essential principle.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Support Newcomers:
                  </strong>{' '}
                  Welcome and support people new to recovery or exploring their path.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Maintain the Space:
                  </strong>{' '}
                  Garden care, setup/cleanup for gatherings, and keeping our sanctuary beautiful.
                </p>
                <p>
                  <strong className="text-cosmic-gold-300">
                    Lead & Facilitate:
                  </strong>{' '}
                  Share your experience by leading meetings or facilitating practices.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Additional Recovery Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500">
                Additional Recovery Support
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-cosmic-gray-300">
                <div>
                  <h4 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Wellness Practices
                  </h4>
                  <p>
                    Sauna, cold plunge, yoga, and movement practices supporting
                    physical recovery and overall well-being.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    One-on-One Support
                  </h4>
                  <p>
                    Connect with sponsors, work steps with others, or find
                    mentorship in your recovery journey.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Personal Practice Time
                  </h4>
                  <p>
                    Use any of our 18 recovery and meditation spaces for your own
                    step work, prayer, or quiet reflection.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Special Recovery Events
                  </h4>
                  <p>
                    Celebrations, anniversaries, workshops, and gatherings that
                    honor recovery milestones and deepen fellowship.
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
                Recovery meeting times and activity schedules vary based on
                community needs. Text Andy for the current meeting schedule,
                upcoming gatherings, or to propose an activity.
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
