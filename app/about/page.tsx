import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Chemical Calculators - Educational Chemistry Tools',
  description: 'Learn about Chemical Calculators: created by Muhammad Zohaib, MSc Chemistry, to make accurate chemistry calculations accessible to students and educators worldwide.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">About</span>
          </nav>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Chemical Calculators
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Making chemistry education accurate, accessible, and easy through technology
            </p>
          </div>

          {/* Person Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Muhammad Zohaib",
                "jobTitle": "Chemist, Web Developer",
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "Lahore Garrison University",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lahore",
                    "addressCountry": "Pakistan"
                  }
                },
                "hasCredential": {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "degree",
                  "name": "Master's Degree in Chemistry"
                },
                "knowsAbout": ["Chemistry", "Chemical Calculations", "Computational Chemistry", "Chemical Education"],
                "description": "Chemist with a Master's degree in Chemistry, combining academic chemistry knowledge with software engineering to build accurate chemistry calculators"
              })
            }}
          />

          {/* Who Created This Website */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  MZ
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🔬</span>
                  Who Created This Website
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-gray-900 dark:text-white">Muhammad Zohaib</strong> is a chemist with a <strong>Master's degree in Chemistry</strong> from{' '}
                    <strong>Lahore Garrison University, Lahore, Pakistan</strong>. He combines academic chemistry knowledge with software engineering and AI 
                    to build accurate and easy-to-use chemistry calculators.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎓 Education</h3>
                      <p className="text-sm">Master's Degree in Chemistry<br/>Lahore Garrison University</p>
                    </div>
                    <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💼 Expertise</h3>
                      <p className="text-sm">Chemistry, Web Development, AI Engineering</p>
                    </div>
                  </div>

                  <p className="text-lg mt-6">
                    This platform focuses on four core principles:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                      <span><strong>Purpose:</strong> Helping students and educators perform accurate chemistry calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                      <span><strong>Educational Intent:</strong> Teaching chemistry concepts through interactive tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                      <span><strong>Accuracy:</strong> All formulas verified against academic standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                      <span><strong>Accessibility:</strong> Free, no-signup tools available to everyone</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why This Website Exists */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              Why This Website Exists
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">The Problem</h3>
                <ul className="space-y-2 text-red-800 dark:text-red-300">
                  <li>• Students struggle with complex chemistry calculations</li>
                  <li>• Manual calculations are time-consuming and error-prone</li>
                  <li>• Unit conversions cause frequent mistakes</li>
                  <li>• Many chemistry tools are expensive or difficult to access</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">The Solution</h3>
                <ul className="space-y-2 text-green-800 dark:text-green-300">
                  <li>• Free, instant chemistry calculations with step-by-step explanations</li>
                  <li>• Automatic unit handling and conversions</li>
                  <li>• Clear formula transparency for educational understanding</li>
                  <li>• Accessible from any device, anywhere, anytime</li>
                </ul>
              </div>

              <p className="text-lg mt-6">
                Technology can reduce learning friction in chemistry education. This website bridges the gap between 
                theoretical chemistry knowledge and practical computational tools, allowing students to focus on 
                understanding concepts rather than arithmetic.
              </p>
            </div>
          </section>

          {/* Role of Technology & AI */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🧠</span>
              Role of Technology & AI
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
                  ⚠️ Transparency Statement
                </p>
                <p className="text-blue-800 dark:text-blue-300">
                  Software and AI are used to <strong>automate calculations and improve usability</strong>, while all chemistry 
                  formulas and definitions are based on <strong>standard academic sources</strong> and <strong>reviewed manually</strong> by 
                  a qualified chemist.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">What Technology Does:</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Automates repetitive calculations for speed and consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Handles unit conversions automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Provides instant validation of user inputs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Improves user interface and accessibility</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">What Technology Does NOT Do:</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span>AI does <strong>not</strong> invent or modify chemical formulas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span>AI does <strong>not</strong> generate chemistry definitions without human review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span>Technology does <strong>not</strong> replace chemistry expertise</span>
                </li>
              </ul>

              <p className="text-lg mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <strong>Human Review is Mandatory:</strong> Every calculator and formula page is reviewed for scientific 
                accuracy by Muhammad Zohaib before publication.
              </p>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="mb-12 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 shadow-lg border-2 border-primary-200 dark:border-primary-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-center text-gray-800 dark:text-gray-200 leading-relaxed italic">
              "Making chemistry education accurate, accessible, and easy through technology"
            </p>
            <p className="text-center text-gray-700 dark:text-gray-300 mt-4">
              — Muhammad Zohaib, MSc Chemistry
            </p>
          </section>

          {/* Additional Information */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact & Policies</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                For questions about calculator accuracy, formula verification, or educational use:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/editorial-policy" 
                  className="block p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-primary-900 dark:text-primary-200 mb-2">📋 Editorial Policy</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Learn about our accuracy standards and review process
                  </p>
                </Link>
                <div className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">🎓 Educational Use</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Free for students, educators, and researchers
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
