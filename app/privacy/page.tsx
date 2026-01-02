import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ChemSolved - Learn how we collect, use, and protect your information when using our chemistry calculators.',
  keywords: ['privacy policy', 'data protection', 'ChemSolved privacy', 'chemistry calculators privacy'],
  openGraph: {
    title: 'Privacy Policy | ChemSolved',
    description: 'Privacy Policy for ChemSolved - Learn how we collect, use, and protect your information.',
    url: 'https://chemsolved.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last Updated: January 2, 2026
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Welcome to ChemSolved ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website chemsolved.com and use our chemistry calculators.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.1 Information You Provide</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our calculators are designed to work entirely in your browser without requiring personal information. We do not collect, store, or transmit the calculation data you enter into our calculators.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address (anonymized)</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device type and screen resolution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use the automatically collected information to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Improve our website performance and user experience</li>
                <li>Analyze usage patterns and trends</li>
                <li>Monitor and prevent technical issues</li>
                <li>Optimize calculator functionality</li>
                <li>Generate anonymous analytics and statistics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience. These include:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Preference Cookies:</strong> Remember your settings (e.g., dark mode preference)</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling certain cookies may limit website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may use third-party services for analytics and website optimization, which may collect information about your use of our website. These services include but are not limited to Google Analytics. These third parties have their own privacy policies governing their use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We implement reasonable security measures to protect your information. All calculations are performed locally in your browser, and we do not store your calculation inputs or results on our servers. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our website is designed for educational purposes and may be used by students of all ages. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Access the information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of analytics tracking</li>
                <li>Disable cookies through your browser settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
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
