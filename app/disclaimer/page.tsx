import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for ChemSolved - Important information about the use and limitations of our chemistry calculators and educational content.',
  keywords: ['disclaimer', 'liability disclaimer', 'ChemSolved disclaimer', 'chemistry calculators disclaimer'],
  openGraph: {
    title: 'Disclaimer | ChemSolved',
    description: 'Disclaimer for ChemSolved - Important information about the use and limitations of our chemistry calculators.',
    url: 'https://chemsolved.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last Updated: January 2, 2026
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. General Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The information and calculators provided on ChemSolved (chemsolved.com) are for educational and informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the calculators or the information contained on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Educational Purpose Only</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ChemSolved is designed as an educational tool to help students, educators, and chemistry enthusiasts understand chemical calculations and concepts. Our calculators should not be used as the sole basis for:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Professional laboratory work</li>
                <li>Industrial chemical processes</li>
                <li>Medical or pharmaceutical applications</li>
                <li>Research publications without independent verification</li>
                <li>Safety-critical calculations</li>
                <li>Commercial or manufacturing processes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. No Professional Advice</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The content on ChemSolved does not constitute professional chemistry, scientific, medical, or any other type of professional advice. Always consult with qualified professionals for:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Laboratory procedures and safety</li>
                <li>Chemical handling and storage</li>
                <li>Research methodology</li>
                <li>Industrial applications</li>
                <li>Regulatory compliance</li>
                <li>Academic work requiring verified results</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Accuracy of Calculations</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                While our calculators are developed using established chemical formulas and principles, we cannot guarantee:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>100% accuracy in all scenarios and conditions</li>
                <li>Suitability for all specific use cases</li>
                <li>Results that account for all real-world variables</li>
                <li>Error-free operation at all times</li>
                <li>Compatibility with all input values and edge cases</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Users are strongly encouraged to verify important calculations using multiple sources and methods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Under no circumstances shall ChemSolved, its operators, contributors, or affiliates be liable for any direct, indirect, incidental, consequential, or special damages arising from:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Use or reliance on calculator results</li>
                <li>Errors or inaccuracies in calculations</li>
                <li>Service interruptions or technical issues</li>
                <li>Loss of data or academic/professional consequences</li>
                <li>Decisions made based on information from this website</li>
                <li>Any damages whatsoever resulting from use or inability to use our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. User Responsibility</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By using ChemSolved, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>You use the calculators at your own risk</li>
                <li>You are responsible for verifying all critical calculations</li>
                <li>You understand the limitations of automated calculators</li>
                <li>You will not rely solely on our calculators for important decisions</li>
                <li>You will consult appropriate professionals when necessary</li>
                <li>You accept full responsibility for how you use the information provided</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Third-Party Content</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ChemSolved may contain links to external websites or reference third-party sources. We are not responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>The accuracy of external content</li>
                <li>The availability of external websites</li>
                <li>The policies or practices of third-party sites</li>
                <li>Any damages resulting from accessing external resources</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. Safety Considerations</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="text-red-600 dark:text-red-400">IMPORTANT SAFETY NOTICE:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                Chemistry involves handling potentially hazardous materials and reactions. Our calculators do not:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Provide safety information for chemical handling</li>
                <li>Account for safety factors in calculations</li>
                <li>Replace proper safety protocols and equipment</li>
                <li>Consider environmental or health impacts</li>
                <li>Include warnings about specific chemical hazards</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Always follow proper safety procedures, use appropriate protective equipment, and consult Safety Data Sheets (SDS) when working with chemicals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. No Warranty</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ChemSolved is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or reliability</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. Updates and Changes</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Modify calculator algorithms and formulas</li>
                <li>Update or remove content without notice</li>
                <li>Change the website structure or features</li>
                <li>Discontinue any calculator or service</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                This disclaimer may be updated periodically. Continued use of the website constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. Academic Integrity</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Students using ChemSolved should:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Follow their institution's academic integrity policies</li>
                <li>Use calculators as learning aids, not substitutes for understanding</li>
                <li>Verify they are permitted to use calculators for specific assignments</li>
                <li>Understand the underlying concepts, not just the results</li>
                <li>Cite sources appropriately in academic work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have questions or concerns about this disclaimer, please contact us at:
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                <strong>Email:</strong> <a href="mailto:contact@chemsolved.com" className="text-primary-600 dark:text-primary-400 hover:underline">contact@chemsolved.com</a>
              </p>
            </section>

            <section className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mt-8">
              <p className="text-gray-800 dark:text-gray-200 font-semibold">
                ⚠️ By using ChemSolved, you acknowledge that you have read, understood, and agree to this disclaimer.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
