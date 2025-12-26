import React from 'react';
import Link from 'next/link';

export default function ReviewedByNotice() {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
            MZ
          </div>
        </div>
        <div>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Reviewed for accuracy by</span>{' '}
            <Link href="/about" className="text-primary-600 dark:text-primary-400 hover:underline">
              Muhammad Zohaib, MSc Chemistry
            </Link>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
            All formulas verified against academic standards • <Link href="/editorial-policy" className="hover:underline">Editorial Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
