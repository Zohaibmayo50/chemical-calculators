import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Concentration & Solution Calculators | Molarity, Dilution & Normality',
  description: 'Precise concentration and solution calculators for molarity, molality, dilution, normality, and percent composition. Calculate solution properties accurately.',
  alternates: {
    canonical: 'https://chemsolved.com/concentration-and-solution-calculators',
  },
};

export default function ConcentrationSolutionCalculatorsPage() {
  const clusterData = getClusterPageBySlug('concentration-and-solution-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'solutions-concentrations');
  const relatedClusters = getRelatedClusterPages('concentration-and-solution-calculators');

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
            "name": "Concentration & Solution Calculators",
            "description": "Calculate molarity, molality, dilutions, and solution properties.",
            "url": "https://chemsolved.com/concentration-and-solution-calculators",
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
                "name": "Concentration & Solution Calculators",
                "item": "https://chemsolved.com/concentration-and-solution-calculators"
              }
            ]
          })
        }}
      />

      <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="accent" />
    </>);
}
