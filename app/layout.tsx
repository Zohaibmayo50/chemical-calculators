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
  metadataBase: new URL('https://chemicalcalculators.com'),
  title: {
    default: 'Chemical Calculators | 100+ Chemistry Tools & Calculation Solvers',
    template: '%s | Chemical Calculators'
  },
  description: 'Comprehensive collection of 100+ chemical calculators for stoichiometry, molarity, molality, pH, thermodynamics, equilibrium, electrochemistry, organic chemistry, and biochemistry calculations. Free, accurate chemistry tools for students and professionals.',
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
  authors: [{ name: 'Chemical Calculators Team' }],
  creator: 'Chemical Calculators',
  publisher: 'Chemical Calculators',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chemicalcalculators.com',
    title: 'Chemical Calculators | 102+ Chemistry Tools & Solvers',
    description: 'Free online chemistry calculators for stoichiometry, molarity, pH, thermodynamics, and more. Accurate chemical calculation tools for students and professionals.',
    siteName: 'Chemical Calculators',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chemical Calculators | 102+ Chemistry Tools',
    description: 'Comprehensive chemistry calculation tools covering stoichiometry, solutions, thermodynamics, equilibrium, and more.',
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
        <link rel="canonical" href="https://chemicalcalculators.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
