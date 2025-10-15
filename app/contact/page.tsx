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
                  The message will pre-fill with "seeker seeking seeker" but
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
                    Do I need to book ahead?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    Nope! We're open daily during the hours listed above. Just
                    drop by whenever feels right. For specific gatherings or if
                    you want to check what's happening, text {CONTACT.custodian}
                    .
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Is there a cost?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    The Seekers Club operates on a donation basis. Give what
                    feels right, or nothing at all. This is about access, not
                    profit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    What should I bring?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    Just yourself. We have meditation cushions, yoga mats, and
                    whatever else you might need. If you have a favorite blanket
                    or journal, feel free to bring those too.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Can I host an event here?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    Absolutely! If you'd like to lead a meditation, workshop, or
                    gathering, text {CONTACT.custodian} to discuss. We love
                    supporting community-led offerings.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display text-cosmic-gold-300 mb-2">
                    Is this space recovery-friendly?
                  </h3>
                  <p className="text-cosmic-gray-300">
                    Yes! This is a judgment-free, recovery-friendly space. No
                    substances on the property, and we honor all paths to
                    healing.
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
          <p className="text-xl text-cosmic-gray-300">
            Still have questions? Don't be shy—reach out.
          </p>
          <TextAndyButton variant="secondary" size="large" />
        </motion.div>
      </Container>
    </div>
  )
}
