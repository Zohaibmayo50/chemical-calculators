import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Biochemistry Calculators | Enzyme Kinetics, DNA & Protein Analysis',
  description: 'Calculate enzyme kinetics parameters, DNA concentrations, protein properties, and biochemical reaction rates for life science applications.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/biochemistry-calculators',
  },
};

export default function BiochemistryCalculatorsPage() {
  const clusterData = getClusterPageBySlug('biochemistry-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'biochemistry');
  const relatedClusters = getRelatedClusterPages('biochemistry-calculators');

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
            "name": "Biochemistry Calculators",
            "description": "Calculate enzyme kinetics, protein properties, and biochemical reactions.",
            "url": "https://chemsolved.com/biochemistry-calculators",
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
                "name": "Biochemistry Calculators",
                "item": "https://chemsolved.com/biochemistry-calculators"
              }
            ]
          })
        }}
      />

      <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="tertiary" />
    </>);
}
