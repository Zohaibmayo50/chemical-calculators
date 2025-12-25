'use client';

import { useState } from 'react';
import Link from 'next/link';
import { searchCalculators } from '@/data/calculators';
import { clusterPages } from '@/data/clusterPages';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalculatorsDropdown, setShowCalculatorsDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchCalculators(query);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b-2 border-primary-200 dark:border-primary-800 shadow-lg transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-500 dark:to-primary-700 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 animate-bounce-in">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-heading font-bold text-gray-900 dark:text-white transition-colors">ChemCalc</div>
              <div className="text-xs font-medium text-primary-600 dark:text-primary-400 transition-colors">Chemistry Tools</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
              Home
            </a>
            
            {/* Calculators Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowCalculatorsDropdown(true)}
              onMouseLeave={() => setShowCalculatorsDropdown(false)}
            >
              <button className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors flex items-center gap-1">
                Calculators
                <svg className={`w-4 h-4 transition-transform ${showCalculatorsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {showCalculatorsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border-2 border-primary-200 dark:border-primary-700 py-2 animate-fade-in z-50">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Calculator Topics</p>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {clusterPages.map((cluster) => (
                      <Link
                        key={cluster.slug}
                        href={`/${cluster.slug}`}
                        className="block px-4 py-3 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        <div className="font-semibold text-sm text-gray-900 dark:text-white">{cluster.h1}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{cluster.metaDescription.split('.')[0]}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                    <a href="#calculators" className="text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                      View All Calculators →
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/chemistry-formulas" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
              Formulas
            </Link>
            <a href="#learn" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
              Learn
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
              About
            </a>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Global Search Bar */}
          <div className="hidden lg:block flex-1 max-w-md ml-8 relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery && setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
                placeholder="Search calculators..."
                className="w-full px-4 py-2 pl-10 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900 transition-all text-sm"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 border-2 border-primary-200 dark:border-primary-700 rounded-lg shadow-2xl max-h-80 overflow-y-auto z-50 animate-fade-in">

                {searchResults.slice(0, 8).map((calc, idx) => (
                  <a
                    key={idx}
                    href={`#${calc.slug}`}
                    className="block p-3 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                  >
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">{calc.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{calc.category}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-in">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                Home
              </a>
              
              {/* Mobile Calculators Dropdown */}
              <div>
                <button
                  onClick={() => setShowCalculatorsDropdown(!showCalculatorsDropdown)}
                  className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors flex items-center justify-between"
                >
                  Calculators
                  <svg className={`w-4 h-4 transition-transform ${showCalculatorsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showCalculatorsDropdown && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 animate-fade-in">
                    {clusterPages.map((cluster) => (
                      <Link
                        key={cluster.slug}
                        href={`/${cluster.slug}`}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-1"
                      >
                        {cluster.h1}
                      </Link>
                    ))}
                    <a href="#calculators" className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium py-1">
                      View All Calculators →
                    </a>
                  </div>
                )}
              </div>
              
              <Link href="/chemistry-formulas" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                Formulas
              </Link>
              <a href="#learn" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                Learn
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                About
              </a>
              
              {/* Mobile Search */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search calculators..."
                  className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
