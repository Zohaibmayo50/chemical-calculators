import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ChemSolved. Ask questions, report issues, suggest new calculators, or provide feedback about our chemistry tools.',
  keywords: [
    'contact ChemSolved',
    'chemistry calculator support',
    'report calculator error',
    'suggest calculator',
    'chemistry help',
    'ChemSolved feedback',
  ],
  alternates: {
    canonical: 'https://chemsolved.com/contact',
  },
  openGraph: {
    title: 'Contact Us | ChemSolved',
    description: 'Get in touch with ChemSolved. Ask questions, report issues, or provide feedback about our chemistry calculators.',
    url: 'https://chemsolved.com/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
