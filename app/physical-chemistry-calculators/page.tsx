import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Physical Chemistry Calculators | Gases, Phase Transitions & Colligative Properties',
  description: 'Calculate gas laws, phase diagrams, colligative properties, and physical chemistry parameters for ideal and real systems.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/physical-chemistry-calculators',
  },
};

export default function PhysicalChemistryCalculatorsPage() {
  const clusterData = getClusterPageBySlug('physical-chemistry-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'physical-chemistry');
  const relatedClusters = getRelatedClusterPages('physical-chemistry-calculators');

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
            "name": "Physical Chemistry Calculators",
            "description": "Calculate gas laws, colligative properties, and thermodynamic quantities.",
            "url": "https://chemsolved.com/physical-chemistry-calculators",
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
                "name": "Physical Chemistry Calculators",
                "item": "https://chemsolved.com/physical-chemistry-calculators"
              }
            ]
          })
        }}
      />

      <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="accent" />
    </>);
}
