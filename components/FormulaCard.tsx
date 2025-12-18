interface FormulaCardProps {
  formula: string;
  explanation: string;
  index: number;
}

export default function FormulaCard({ formula, explanation, index }: FormulaCardProps) {
  return (
    <div 
      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-5 border-2 border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 animate-slide-in-left"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-primary-100 dark:bg-primary-900/30 rounded-md p-3 mb-3">
        <code className="text-base font-mono font-bold text-primary-800 dark:text-primary-300 block">
          {formula}
        </code>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {explanation}
      </p>
    </div>
  );
}
