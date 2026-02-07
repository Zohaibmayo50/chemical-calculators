import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Electrochemistry Calculators | Nernst Equation, Cell Potential & pH',
  description: 'Calculate electrode potentials, cell EMF, pH, and electrochemical cell parameters using the Nernst equation and related formulas.',
  alternates: {
    canonical: 'https://chemsolved.com/electrochemistry-calculators',
  },
};

export default function ElectrochemistryCalculatorsPage() {
  const clusterData = getClusterPageBySlug('electrochemistry-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'electrochemistry');
  const relatedClusters = getRelatedClusterPages('electrochemistry-calculators');

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
            "name": "Electrochemistry Calculators",
            "description": "Calculate cell potentials, electrolysis, and electrochemical properties.",
            "url": "https://chemsolved.com/electrochemistry-calculators",
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
                "name": "Electrochemistry Calculators",
                "item": "https://chemsolved.com/electrochemistry-calculators"
              }
            ]
          })
        }}
      />

      <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="primary" />
    </>);
}
