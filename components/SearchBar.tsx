'use client';

import { useState, useMemo } from 'react';
import { searchCalculators } from '@/data/calculators';

interface SearchBarProps {
  onSearch?: (results: any[]) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchCalculators(query);
  }, [query]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (onSearch) {
      onSearch(searchCalculators(value));
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search calculators... (e.g., molarity, pH, stoichiometry)"
          className="w-full px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 focus:ring-4 focus:ring-primary-100 dark:focus:ring-primary-900 transition-all shadow-sm hover:shadow-md group-hover:border-primary-400 dark:group-hover:border-primary-500 animate-scale-in"
        />
        <svg 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {isFocused && query && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border-2 border-primary-200 dark:border-primary-700 rounded-xl shadow-2xl max-h-96 overflow-y-auto animate-fade-in">
          <div className="p-2">
            {results.map((calc, idx) => (
              <a
                key={idx}
                href={`#${calc.slug}`}
                className="block p-4 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 last:border-b-0 animate-slide-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="font-semibold text-gray-900 dark:text-white">{calc.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{calc.description}</div>
                <div className="text-xs text-primary-600 dark:text-primary-400 mt-1 font-medium">{calc.category}</div>
              </a>
            ))}
          </div>
        </div>
      )}

      {isFocused && query && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4 animate-fade-in">
          <p className="text-gray-600 dark:text-gray-300 text-center">No calculators found for &#34;{query}&#34;</p>
        </div>
      )}
    </div>
  );
}
