import type { Metadata } from 'next'
import { Inter, Cinzel, Philosopher } from 'next/font/google'
import './globals.css'
import CosmicBackground from '@/components/ui/CosmicBackground'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const philosopher = Philosopher({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Seekers Club - A Sanctuary for the Soul',
    template: '%s | The Seekers Club',
  },
  description: 'A welcoming sanctuary space in Austin, TX for meditation, breathwork, book studies, connection, and healing. Recovery-friendly, judgment-free community. Open daily 8 AM - 8 PM.',
  keywords: [
    'meditation Austin',
    'sanctuary space Austin',
    'healing space Austin',
    'breathwork Austin',
    'recovery-friendly meditation',
    'spiritual community Austin',
    'The Seekers Club',
  ],
  authors: [{ name: 'The Seekers Club' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'The Seekers Club',
    title: 'The Seekers Club - A Sanctuary for the Soul',
    description: 'A welcoming sanctuary space in Austin, TX for meditation, breathwork, and healing. Recovery-friendly, judgment-free community.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${philosopher.variable}`}>
      <body className="min-h-screen flex flex-col font-body text-cosmic-gray-100 antialiased">
        <CosmicBackground />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
