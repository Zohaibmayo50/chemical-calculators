import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Chemical Reaction Calculators | Equilibrium, Kinetics & Rates',
  description: 'Calculate reaction rates, equilibrium constants, activation energy, and reaction quotients. Tools for chemical kinetics and equilibrium analysis.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/chemical-reaction-calculators',
  },
};

export default function ChemicalReactionCalculatorsPage() {
  const clusterData = getClusterPageBySlug('chemical-reaction-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'chemical-reactions');
  const relatedClusters = getRelatedClusterPages('chemical-reaction-calculators');

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
            "name": "Chemical Reaction Calculators",
            "description": "Calculate reaction rates, equilibrium constants, and thermodynamic properties.",
            "url": "https://chemsolved.com/chemical-reaction-calculators",
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
                "name": "Chemical Reaction Calculators",
                "item": "https://chemsolved.com/chemical-reaction-calculators"
              }
            ]
          })
        }}
      />

      <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="secondary" />
    </>);
}
