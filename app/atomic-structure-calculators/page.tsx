import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Atomic Structure Calculators | Quantum Numbers, Electron Configuration & Energy Levels',
  description: 'Calculate quantum numbers, electron configurations, atomic orbitals, and energy levels for atoms and ions.',
  alternates: {
    canonical: 'https://chemsolved.com/atomic-structure-calculators',
  },
};

export default function AtomicStructureCalculatorsPage() {
  const clusterData = getClusterPageBySlug('atomic-structure-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'general-chemistry');
  const relatedClusters = getRelatedClusterPages('atomic-structure-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  
  return (<>
      {/* Structured Data - CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Atomic Structure Calculators",
            "description": "Calculate quantum numbers, electron configurations, atomic orbitals, and energy levels for atoms and ions.",
            "url": "https://chemsolved.com/atomic-structure-calculators",
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            }
          })
        }}
      />

      {/* Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://chemsolved.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Atomic Structure Calculators",
                "item": "https://chemsolved.com/atomic-structure-calculators"
              }
            ]
          })
        }}
      />

      <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="primary" />
    </>);
}
