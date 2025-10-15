'use client'

import { motion } from 'framer-motion'
import { CONTACT, LOCATION } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import TextAndyButton from '@/components/ui/TextAndyButton'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16">
      <Container maxWidth="narrow">
        {/* Hero Section */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display text-shadow-glow">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-cosmic-gold-400 font-accent">
            A sanctuary space born from intention and anchored by vision
          </p>
        </motion.div>

        {/* Andy's Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500">
                Meet Andy, Our Custodian
              </h2>
              <div className="space-y-4 text-cosmic-gray-300 leading-relaxed">
                <p>
                  The Seekers Club exists because of {CONTACT.custodian}&apos;s
                  vision—a vision to create a space where authentic connection,
                  healing, and growth aren&apos;t just welcomed, but celebrated.
                </p>
                <p>
                  More than just a property owner, {CONTACT.custodian} is the
                  custodian of this sanctuary. His energy and intention anchor
                  every corner of this space, from the meditation rooms to the
                  sacred fire circle. What began as a personal practice of
                  mindfulness and recovery has blossomed into a refuge for
                  seekers from all walks of life.
                </p>
                <p>
                  This isn&apos;t a business—it&apos;s a calling. Every space has been
                  thoughtfully designed to hold whatever you bring: joy, grief,
                  curiosity, or simply the need to sit in silence.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Our Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500 cursor-pointer hover:opacity-80 transition-opacity"
                data-easter-egg-trigger
              >
                Our Philosophy
              </h2>
              <div className="space-y-4 text-cosmic-gray-300 leading-relaxed">
                <div>
                  <h3 className="text-xl font-display text-cosmic-gold-300 mb-2">
                    Judgment-Free Zone
                  </h3>
                  <p>
                    No matter where you are on your journey, you belong here.
                    This is a space of radical acceptance and compassion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-cosmic-gold-300 mb-2">
                    Recovery-Friendly
                  </h3>
                  <p>
                    The Seekers Club is proudly recovery-friendly. We honor all
                    paths to healing and sobriety, creating an environment that
                    supports transformation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-cosmic-gold-300 mb-2">
                    Diverse Practices
                  </h3>
                  <p>
                    From silent meditation to ecstatic dance, from book studies
                    to breathwork circles—we honor the many paths to awareness
                    and connection.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-cosmic-gold-300 mb-2">
                    Community Over Commerce
                  </h3>
                  <p>
                    This space prioritizes authentic connection over profit.
                    It&apos;s a labor of love, maintained by those who believe in
                    its mission.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* The Space Itself */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500">
                The Sacred Space
              </h2>
              <div className="space-y-4 text-cosmic-gray-300 leading-relaxed">
                <p>
                  Nestled in {LOCATION.address.city}, Texas, this property has
                  been transformed into a multi-dimensional sanctuary. With 18
                  distinct spaces—from cozy meditation nooks to expansive
                  gathering halls, from outdoor fire circles to movement
                  studios—there&apos;s a corner for every mood and practice.
                </p>
                <p>
                  Every space has been intentionally curated to support
                  different aspects of the human experience: spaces for
                  solitude, spaces for community, spaces for movement, and
                  spaces for stillness.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500">
                How It Works
              </h2>
              <div className="space-y-4 text-cosmic-gray-300 leading-relaxed">
                <p>
                  The Seekers Club is open daily from 8 AM to 8 PM. Drop-ins
                  are welcome—no appointment needed. Whether you&apos;re seeking 10
                  minutes of quiet or a full day of immersion, you&apos;re invited
                  to use the space as you need.
                </p>
                <p>
                  We host regular gatherings including meditation sessions,
                  breathwork circles, book studies, and open community hours.
                  Check our activities page for current offerings, or simply
                  show up and see what resonates.
                </p>
                <p>
                  Questions? Text {CONTACT.custodian} anytime. He&apos;s here to
                  support your journey in whatever way serves you best.
                </p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <TextAndyButton variant="primary" size="large" />
                <Button href="/activities" variant="ghost" size="large">
                  View Activities
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-cosmic-gray-300 max-w-2xl mx-auto leading-relaxed">
            This is more than a meditation center. It&apos;s a living, breathing
            experiment in what happens when we create space for the soul to
            expand, for hearts to connect, and for seekers to find their way.
          </p>
          <p
            className="text-2xl text-cosmic-gold-400 font-accent cursor-pointer hover:opacity-80 transition-opacity"
            data-easter-egg-trigger
          >
            Welcome home, seeker. ✨
          </p>
        </motion.div>
      </Container>
    </div>
  )
}
