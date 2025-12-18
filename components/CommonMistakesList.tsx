interface CommonMistakesListProps {
  mistakes: string[];
}

export default function CommonMistakesList({ mistakes }: CommonMistakesListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {mistakes.map((mistake, index) => (
        <div 
          key={index}
          className="flex gap-3 items-start bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 dark:border-red-400 animate-fade-in-up"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <svg className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">
            {mistake}
          </p>
        </div>
      ))}
    </div>
  );
}
