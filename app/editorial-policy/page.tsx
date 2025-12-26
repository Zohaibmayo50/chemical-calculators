import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Policy | Chemical Calculators - Accuracy & Review Standards',
  description: 'Our commitment to scientific accuracy: how chemistry formulas are verified, calculators are tested, and content is reviewed by qualified chemists.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/editorial-policy',
  },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">Editorial Policy</span>
          </nav>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Editorial Policy
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Our commitment to scientific accuracy and educational integrity
            </p>
          </div>

          {/* Scientific Accuracy */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🔍</span>
              Scientific Accuracy Standards
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                All chemistry formulas, definitions, and calculations on Chemical Calculators adhere to rigorous academic standards:
              </p>

              <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border-l-4 border-primary-600">
                <h3 className="font-semibold text-primary-900 dark:text-primary-200 mb-3 text-lg">Formula Sources</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                    <span>All formulas follow <strong>standard undergraduate and postgraduate chemistry textbooks</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                    <span>Definitions align with <strong>IUPAC (International Union of Pure and Applied Chemistry)</strong> nomenclature where applicable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                    <span>Constants use <strong>NIST (National Institute of Standards and Technology)</strong> values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                    <span>Calculations are <strong>tested using real numerical examples</strong> from peer-reviewed sources</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-4">
                <p className="text-sm italic">
                  <strong>Reference Standard:</strong> Chemistry formulas are cross-checked against established textbooks such as 
                  "General Chemistry" (Petrucci), "Physical Chemistry" (Atkins), and "Organic Chemistry" (Clayden), among others.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator Review Process */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🧪</span>
              Calculator Review Process
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                Every calculator undergoes a multi-step verification process before publication:
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-5 rounded-lg border-l-4 border-blue-600">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                    Formula Verification
                  </h3>
                  <p className="text-blue-800 dark:text-blue-300 ml-8">
                    Formulas are verified against academic sources before implementation. Variables, units, and constants are 
                    documented with references.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-5 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                    Test Case Development
                  </h3>
                  <p className="text-green-800 dark:text-green-300 ml-8">
                    Multiple numerical test cases are created, including typical values, edge cases, and boundary conditions. 
                    Results are compared with manual calculations.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-5 rounded-lg border-l-4 border-purple-600">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                    Unit Consistency Check
                  </h3>
                  <p className="text-purple-800 dark:text-purple-300 ml-8">
                    All unit conversions are validated for dimensional consistency. Input validation ensures physically meaningful values.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-5 rounded-lg border-l-4 border-orange-600">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-2 flex items-center gap-2">
                    <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                    Chemist Review
                  </h3>
                  <p className="text-orange-800 dark:text-orange-300 ml-8">
                    Muhammad Zohaib (MSc Chemistry) reviews each calculator for correctness, clarity, and educational value before publication.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AI & Automation Transparency */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-yellow-500">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🧠</span>
              AI & Automation Transparency
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <p className="text-lg font-semibold text-yellow-900 dark:text-yellow-200 mb-4">
                  ⚠️ Critical Disclosure: Role of AI in Content Creation
                </p>
                <p className="text-yellow-800 dark:text-yellow-300 mb-4">
                  We use artificial intelligence and automation tools to improve user experience, but <strong>not</strong> to 
                  generate chemistry content without human oversight.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">AI is Used For:</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span><strong>Code Generation:</strong> Automating calculator interface and functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span><strong>Formatting:</strong> Organizing content structure and layout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span><strong>UI/UX Optimization:</strong> Improving accessibility and usability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span><strong>Content Suggestions:</strong> Proposing explanations (always reviewed by chemist)</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">AI is NOT Used For:</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span><strong>Inventing Formulas:</strong> All formulas come from verified academic sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span><strong>Generating Definitions:</strong> Chemistry definitions are sourced from textbooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span><strong>Bypassing Review:</strong> No AI-generated content is published without human verification</span>
                </li>
              </ul>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-6 border-l-4 border-gray-600">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Human Review is Mandatory
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Every formula, definition, and calculator is reviewed by Muhammad Zohaib (MSc Chemistry) to ensure 
                  scientific accuracy. AI assists with presentation, not chemistry.
                </p>
              </div>
            </div>
          </section>

          {/* Content Updates & Corrections */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🔄</span>
              Content Updates & Corrections
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Periodic Review</h3>
              <p>
                All calculators and formulas are reviewed periodically to ensure:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                  <span>Formulas remain aligned with current academic standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                  <span>Constants reflect latest NIST values</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                  <span>Calculators function correctly across browsers and devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                  <span>Educational explanations are clear and accurate</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">Error Correction Policy</h3>
              <p>
                If you find an error in a formula, calculation, or explanation:
              </p>
              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                <ol className="space-y-2 ml-6 list-decimal">
                  <li>Errors are reviewed within 48 hours of notification</li>
                  <li>Verified errors are corrected immediately</li>
                  <li>A note is added to the page documenting the correction</li>
                  <li>Major corrections are logged in our update history</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">User Feedback</h3>
              <p>
                We welcome feedback from students, educators, and chemistry professionals. Your input helps improve 
                calculator accuracy and usability.
              </p>
            </div>
          </section>

          {/* Reviewer Information */}
          <section className="mb-12 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 shadow-lg border-2 border-primary-200 dark:border-primary-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Content Reviewer
            </h2>
            <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                MZ
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Muhammad Zohaib</p>
                <p className="text-gray-700 dark:text-gray-300">MSc Chemistry</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lahore Garrison University, Pakistan</p>
              </div>
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mt-4">
              All content reviewed for accuracy and educational value
            </p>
          </section>

          {/* Related Links */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/about" 
                className="block p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-primary-900 dark:text-primary-200 mb-2">👤 About</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Learn about the creator and mission
                </p>
              </Link>
              <Link 
                href="/" 
                className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">🏠 Home</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Explore chemistry calculators
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
