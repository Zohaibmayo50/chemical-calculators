import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Poppins, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${poppins.variable} ${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="canonical" href="https://chemsolved.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
