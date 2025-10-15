import Link from 'next/link'
import {
  SITE_NAME,
  SITE_TAGLINE,
  LOCATION,
  HOURS,
  CONTACT,
  NAV_LINKS,
} from '@/lib/constants'
import Container from '../ui/Container'
import TextAndyButton from '../ui/TextAndyButton'

/**
 * Footer Component
 *
 * Site footer with location info, navigation, and contact
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-auto border-t border-cosmic-purple-700/40 bg-cosmic-purple-950/60 backdrop-blur-sm">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display text-shadow-glow">
              {SITE_NAME}
            </h3>
            <p className="text-cosmic-gold-400 font-accent">{SITE_TAGLINE}</p>
            <p className="text-cosmic-gray-300 text-sm">
              A welcoming sanctuary space in Austin, TX for meditation,
              breathwork, and authentic connection.
            </p>
          </div>

          {/* Location & Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-display text-cosmic-gold-400">
              Visit Us
            </h4>
            <div className="space-y-2 text-sm">
              <div className="space-y-1">
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
                  className="inline-block text-cosmic-gold-400 hover:text-cosmic-gold-300 transition-colors"
                >
                  Get Directions →
                </a>
              </div>
              <div className="pt-2">
                <p className="text-cosmic-gray-400 font-medium">
                  {HOURS.description}
                </p>
                <p className="text-cosmic-gray-300">{HOURS.days}</p>
                <p className="text-cosmic-gray-300">{HOURS.formatted}</p>
              </div>
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-display text-cosmic-gold-400">
              Connect
            </h4>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-cosmic-gray-300 hover:text-cosmic-gold-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-4">
              <p className="text-sm text-cosmic-gray-400 mb-3">
                Questions? Text {CONTACT.custodian}
              </p>
              <TextAndyButton variant="primary" size="default" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cosmic-purple-700/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-cosmic-gray-400">
            <p>
              © {currentYear} {SITE_NAME}. A sanctuary space anchored by{' '}
              {CONTACT.custodian}'s vision.
            </p>
            <div className="flex items-center gap-4">
              <span>Built with intention</span>
              <span className="text-cosmic-gold-400">✨</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
