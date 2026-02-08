import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
  fallback: ['Courier New', 'monospace'],
  weight: ['400', '500', '600'],
  adjustFontFallback: true,
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://chemsolved.com'),
  title: {
    default: 'Chemistry Calculators – Accurate & Free Tools | ChemSolved',
    template: '%s | ChemSolved'
  },
  description: 'ChemSolved is an educational chemistry calculator platform offering 100+ accurate, free tools for students and professionals. Human-reviewed, accessible, and trusted.',
  keywords: [
    'chemical calculators',
    'chemistry calculators',
    'chemistry calculation tools',
    'online chemistry calculator',
    'molarity calculator',
    'stoichiometry calculator',
    'concentration calculator',
    'solution calculator',
    'pH calculator',
    'chemical equation balancer',
    'thermodynamics calculator',
    'equilibrium calculator',
    'molar mass calculator',
    'dilution calculator',
    'percent yield calculator'
  ],
  authors: [{ name: 'ChemSolved' }],
  creator: 'ChemSolved',
  publisher: 'ChemSolved',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chemsolved.com',
    title: 'Chemistry Calculators – Accurate & Free Tools | ChemSolved',
    description: 'ChemSolved offers 100+ free, accurate chemistry calculators for students and professionals. Human-reviewed and trusted.',
    siteName: 'ChemSolved',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chemistry Calculators – Accurate & Free Tools | ChemSolved',
    description: 'ChemSolved: 100+ free, accurate chemistry calculators. Human-reviewed, accessible, and trusted.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'U9ipP3RQem16ggZINRA5EdLzgO3KS9aGLmNjXnItcms',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
