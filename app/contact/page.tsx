'use client'

import { motion } from 'framer-motion'
import { CONTACT, LOCATION, HOURS } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import TextAndyButton from '@/components/ui/TextAndyButton'

export default function ContactPage() {
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
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-cosmic-gold-400 font-accent max-w-3xl mx-auto">
            Questions? Ready to visit? Just want to connect? Reach out to Andy.
          </p>
        </motion.div>

        {/* Text Andy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="text-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500 mb-4">
                  Text {CONTACT.custodian}
                </h2>
                <p className="text-cosmic-gray-300 max-w-xl mx-auto">
                  {CONTACT.custodian} is the custodian of this space and would
                  love to hear from you. Whether you have questions, want to
                  learn more, or are ready to drop in—send a text.
                </p>
              </div>

              <div className="py-6">
                <TextAndyButton variant="primary" size="large" />
              </div>

              <div className="text-cosmic-gray-400 text-sm">
                <p>
                  The message will pre-fill with &quot;seeker seeking seeker&quot; but
                  feel free to write whatever resonates.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-cosmic-gold-400 cursor-pointer hover:scale-110 transition-transform"
                  data-easter-egg-trigger
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-cosmic-gold-500">
                  Location
                </h2>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p className="text-lg">{LOCATION.address.street}</p>
                <p className="text-lg">
                  {LOCATION.address.city}, {LOCATION.address.state}{' '}
                  {LOCATION.address.zip}
                </p>
                <a
                  href={LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cosmic-gold-400 hover:text-cosmic-gold-300 transition-colors pt-2"
                >
                  <span>Get Directions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-cosmic-gold-400 cursor-pointer hover:scale-110 transition-transform"
                  data-easter-egg-trigger
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-cosmic-gold-500">
                  Open Hours
                </h2>
              </div>
              <div className="space-y-2 text-cosmic-gray-300">
                <p className="text-lg font-medium">{HOURS.description}</p>
                <p className="text-lg">{HOURS.days}</p>
                <p className="text-2xl text-cosmic-gold-400 font-accent">
                  {HOURS.formatted}
                </p>
              </div>
              <div className="pt-2 text-cosmic-gray-400 text-sm">
                <p>
                  Drop-ins welcome during open hours. No appointment needed—just
                  show up and explore.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-cosmic-gold-500">
                Common Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Is this a treatment center?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    No. The Seekers Club is a fellowship home and recovery community
                    space. We&apos;re not licensed clinicians or treatment professionals—
                    we&apos;re people in recovery supporting each other through fellowship,
                    meetings, and spiritual practice.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Do I need to be in AA to come here?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    No. While we&apos;re grounded in AA principles, <strong className="text-cosmic-gold-300">all
                    pathways out of darkness are worthy</strong>. If you&apos;re working any
                    recovery program (AA, NA, CA, SMART Recovery, etc.) or exploring
                    recovery for the first time, you&apos;re welcome here.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Are there recovery meetings here?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    Yes! Recovery meetings are our primary offering. We host regular
                    12-step meetings and study groups. Text {CONTACT.custodian} for the
                    current meeting schedule and upcoming gatherings.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Is this a sober space?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    Absolutely. No substances allowed on the property. This is a safe,
                    substance-free environment for people in recovery to gather, work
                    their program, and support each other.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    I&apos;m new to recovery—can I still come?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    YES. Newcomers are especially welcome. The Seekers Club is a
                    judgment-free space where everyone is figuring it out together.
                    Whether you&apos;re on day 1 or year 10, you belong here.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Do I need to share my story?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    Never. You can participate as much or as little as feels right.
                    Some people come just to sit in silence or work their steps alone.
                    Others come for deep fellowship. Both are perfect.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    What if I relapsed?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    Come anyway. Recovery isn&apos;t linear, and this community understands
                    that. All pathways include setbacks. You&apos;re still welcome, still
                    worthy, and still part of the fellowship.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Is there a cost?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    The Seekers Club operates on a donation basis. Give what feels
                    right, or nothing at all. Recovery should be accessible to everyone,
                    regardless of financial situation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Do I need to book ahead?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    Nope! Drop-ins are welcome during open hours. For recovery meeting
                    times or specific gatherings, text {CONTACT.custodian} for the current
                    schedule.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Can I use the space for quiet step work?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    Absolutely. We have 18 dedicated recovery and meditation spaces
                    designed for exactly this. Whether you need a quiet room for
                    inventory work, the library for Big Book study, or outdoor space
                    for reflection—you&apos;re welcome to use the space as you need.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-cosmic-gray-300 max-w-2xl mx-auto">
            Still have questions? Want to know about meeting times? Ready to
            drop in for fellowship? Don&apos;t be shy—reach out.
          </p>
          <p className="text-lg text-cosmic-gold-400 font-accent">
            All pathways are worthy. You belong here.
          </p>
          <TextAndyButton variant="secondary" size="large" />
        </motion.div>
      </Container>
    </div>
  )
}
