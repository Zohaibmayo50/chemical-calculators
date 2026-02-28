import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the ChemSolved team. Ask questions, report errors, request new calculators, or share feedback.',
  alternates: {
    canonical: 'https://chemsolved.com/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}

