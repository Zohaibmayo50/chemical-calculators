import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for ChemSolved - Read the terms and conditions for using our chemistry calculators and educational tools.',
  keywords: ['terms of use', 'terms and conditions', 'ChemSolved terms', 'chemistry calculators terms'],
  alternates: {
    canonical: 'https://chemsolved.com/terms',
  },
  openGraph: {
    title: 'Terms of Use | ChemSolved',
    description: 'Terms of Use for ChemSolved - Read the terms and conditions for using our chemistry calculators.',
    url: 'https://chemsolved.com/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Use
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last Updated: January 2, 2026
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing and using ChemSolved (chemsolved.com), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Educational Purpose</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ChemSolved is an educational platform providing free chemistry calculators and tools for students, educators, and professionals. Our calculators are designed to assist with learning and understanding chemical concepts and calculations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Use License</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Permission is granted to temporarily use ChemSolved's calculators and educational content for personal, non-commercial educational purposes. This license does not include:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for commercial purposes</li>
                <li>Attempting to reverse engineer any software on ChemSolved</li>
                <li>Removing any copyright or proprietary notations</li>
                <li>Transferring the materials to another person or "mirroring" the materials on another server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Accuracy of Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                While we strive to provide accurate calculations and educational content, ChemSolved does not warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>The calculators will be error-free or uninterrupted</li>
                <li>All results will be accurate for every specific use case</li>
                <li>The information provided is suitable for professional or critical applications</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Users should verify critical calculations independently and consult appropriate professionals for important applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. User Responsibilities</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Use the calculators responsibly and for lawful purposes only</li>
                <li>Verify important calculations through alternative methods</li>
                <li>Not misuse or attempt to disrupt the website's functionality</li>
                <li>Not engage in automated data collection or scraping without permission</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All content on ChemSolved, including but not limited to text, graphics, logos, calculator interfaces, and software, is the property of ChemSolved or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ChemSolved and its operators shall not be liable for any damages arising from the use or inability to use our calculators, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Incorrect calculations or results</li>
                <li>Loss of data or academic performance</li>
                <li>Decisions made based on calculator outputs</li>
                <li>Technical issues or service interruptions</li>
                <li>Any indirect, incidental, or consequential damages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. External Links</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ChemSolved may contain links to external websites. We are not responsible for the content, accuracy, or practices of these external sites. Accessing external links is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. Modifications to Service</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Modify or discontinue any calculator or feature without notice</li>
                <li>Update calculation algorithms and formulas</li>
                <li>Change the website design and structure</li>
                <li>Limit access to certain features or the entire website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. Prohibited Uses</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You may not use ChemSolved to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Engage in any unlawful or fraudulent activity</li>
                <li>Violate any local, state, national, or international law</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with other users' access to the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. Termination</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to terminate or suspend your access to ChemSolved immediately, without prior notice or liability, for any reason, including breach of these Terms of Use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of ChemSolved after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                For questions about these Terms of Use, please contact us at:
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                <strong>Email:</strong> <a href="mailto:contact@chemsolved.com" className="text-primary-600 dark:text-primary-400 hover:underline">contact@chemsolved.com</a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
