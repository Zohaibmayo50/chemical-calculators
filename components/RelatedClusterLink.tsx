import Link from 'next/link';

interface RelatedClusterLinkProps {
  slug: string;
  title: string;
  description: string;
  index: number;
}

export default function RelatedClusterLink({ slug, title, description, index }: RelatedClusterLinkProps) {
  return (
    <Link 
      href={`/${slug}`}
      className="group block bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-secondary-900/30 dark:to-tertiary-900/30 rounded-lg p-6 border-2 border-secondary-200 dark:border-secondary-700 hover:border-secondary-400 dark:hover:border-secondary-500 transition-all duration-300 hover:scale-105 animate-zoom-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center gap-3 mb-2">
        <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </Link>
  );
}
