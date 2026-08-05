import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Acid-Base Calculators | pKa, Titration & Buffer Chemistry',
  description: 'Calculate pKa, Ka, and titration curves for acid-base chemistry. Accurate tools for acid dissociation, titration analysis, and buffer preparation.',
  alternates: {
    canonical: 'https://chemsolved.com/acid-base-calculators',
  },
};

export default function AcidBaseCalculatorsPage() {
  const clusterData = getClusterPageBySlug('acid-base-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'acid-base');
  const relatedClusters = getRelatedClusterPages('acid-base-calculators');

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
            "name": "Acid-Base Calculators",
            "description": "Calculate pKa, titration curves, and acid-base equilibrium.",
            "url": "https://chemsolved.com/acid-base-calculators",
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
                "name": "Acid-Base Calculators",
                "item": "https://chemsolved.com/acid-base-calculators"
              }
            ]
          })
        }}
      />

      <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="secondary" />
    </>);
}
