import React from 'react';

interface ComparisonRow {
  aspect: string;
  entity1: string | React.ReactNode;
  entity2: string | React.ReactNode;
}

interface ComparisonTableProps {
  entity1Name: string;
  entity2Name: string;
  rows: ComparisonRow[];
}

export default function ComparisonTable({ entity1Name, entity2Name, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto mb-12">
      <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-primary-600 to-secondary-600">
            <th className="px-6 py-4 text-left text-white font-bold text-lg border-r border-white/20">
              Aspect
            </th>
            <th className="px-6 py-4 text-left text-white font-bold text-lg border-r border-white/20">
              {entity1Name}
            </th>
            <th className="px-6 py-4 text-left text-white font-bold text-lg">
              {entity2Name}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr 
              key={index}
              className={`${
                index % 2 === 0 
                  ? 'bg-gray-50 dark:bg-gray-700/50' 
                  : 'bg-white dark:bg-gray-800'
              } border-b border-gray-200 dark:border-gray-700 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors`}
            >
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700">
                {row.aspect}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                {row.entity1}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                {row.entity2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
