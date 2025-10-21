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
            A Recovery Sanctuary
          </h1>
          <p className="text-xl md:text-2xl text-cosmic-gold-400 font-accent">
            Where fellowship, consciousness expansion, and service come together
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
                Why The Seekers Club Exists
              </h2>
              <div className="space-y-4 text-cosmic-gray-300 leading-relaxed">
                <p>
                  The Seekers Club was founded on a simple truth: <strong className="text-cosmic-gold-300">recovery happens in community</strong>.
                </p>
                <p>
                  Grounded in the principles of Alcoholics Anonymous, this space exists for people
                  working their program—whether you&apos;re in early recovery, decades into the journey,
                  or exploring a path out of darkness for the first time.
                </p>
                <p>
                  We believe <strong className="text-cosmic-gold-300">all pathways that lead somebody out of darkness are worthy</strong>.
                  While rooted in AA traditions, we honor every authentic approach to recovery. What
                  matters is the willingness to grow, to serve, and to support each other.
                </p>
                <p>
                  This isn&apos;t a treatment center. It&apos;s not therapy. It&apos;s a <strong className="text-cosmic-gold-300">fellowship home</strong>—
                  a place where people in recovery come together to work their program, sharpen each other,
                  and practice the principles that lead to consciousness expansion and healing.
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
                What We Do Here
              </h2>
              <div className="space-y-4 text-cosmic-gray-300 leading-relaxed">
                <p>
                  This is a fellowship home where people in recovery:
                </p>
                <div>
                  <h3 className="text-xl font-display text-cosmic-gold-300 mb-2">
                    Work Their Program Together
                  </h3>
                  <p>
                    Through meetings, step work, and spiritual practice—we support each other&apos;s
                    journey through recovery with honesty and accountability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-cosmic-gold-300 mb-2">
                    Sharpen Each Other
                  </h3>
                  <p>
                    Through authentic connection and shared experience, we grow stronger together.
                    Iron sharpens iron—fellowship challenges us to show up better every day.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-cosmic-gold-300 mb-2">
                    Expand Consciousness
                  </h3>
                  <p>
                    Through meditation, breathwork, and contemplative practices—we explore the spiritual
                    dimension of recovery and deepen our awareness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-cosmic-gold-300 mb-2">
                    Practice Service
                  </h3>
                  <p>
                    By showing up, supporting newcomers, and giving back—we practice the principle
                    that we can only keep what we have by giving it away.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-cosmic-gold-300 mb-2">
                    Build Genuine Community
                  </h3>
                  <p>
                    With others who understand the journey from darkness to light. No masks needed—
                    this is where we can be fully ourselves.
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
                The Space
              </h2>
              <div className="space-y-4 text-cosmic-gray-300 leading-relaxed">
                <p>
                  A beautiful {LOCATION.address.city} home with 5 bedrooms transformed into <strong className="text-cosmic-gold-300">18 distinct recovery
                  and meditation spaces</strong>:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Meeting rooms for recovery gatherings</li>
                  <li>Quiet meditation rooms for step work and reflection</li>
                  <li>Outdoor spaces with fire circle for fellowship</li>
                  <li>Library for recovery literature and book studies</li>
                  <li>Breathwork and movement spaces</li>
                  <li>Common areas for community connection</li>
                </ul>
                <p>
                  Plus: sauna, cold plunge, ping pong, workout equipment, garden, and more.
                </p>
                <p>
                  Every space has been intentionally designed to support recovery—whether you need
                  quiet solitude for inventory work, or community connection for fellowship.
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
                  The Seekers Club is open daily for recovery meetings and fellowship.
                  Drop-ins are welcome—whether you&apos;re attending a meeting, seeking quiet
                  space for step work, or looking for community connection. No appointment
                  needed.
                </p>
                <p>
                  We host regular recovery meetings, meditation sessions, breathwork circles,
                  book studies, and open fellowship hours. Text {CONTACT.custodian} for the
                  current meeting schedule, or simply show up and find your place in the
                  fellowship.
                </p>
                <p>
                  Whether you need 10 minutes of quiet reflection or a full day of immersion
                  in recovery work, you&apos;re invited to use the space as you need. All
                  pathways out of darkness are worthy here.
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
            This is more than a meeting space. It&apos;s a living, breathing fellowship
            where recovery happens in community—where we work our program together,
            sharpen each other through connection, and support the journey from darkness
            to light.
          </p>
          <p className="text-xl text-cosmic-gray-300 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-cosmic-gold-300">All pathways out of darkness are worthy.</strong>
            {' '}Whether you&apos;re in early recovery or decades into your program, whether you
            follow AA, NA, or any authentic path—you belong here.
          </p>
          <p
            className="text-2xl text-cosmic-gold-400 font-accent cursor-pointer hover:opacity-80 transition-opacity"
            data-easter-egg-trigger
          >
            Welcome home, fellow traveler. ✨
          </p>
        </motion.div>
      </Container>
    </div>
  )
}
