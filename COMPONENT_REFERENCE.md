# Component Reference Guide

## Cluster Page Components

### 1. ClusterPageTemplate
**Location**: `/components/ClusterPageTemplate.tsx`

**Purpose**: Reusable template for all cluster pages with consistent structure.

**Props**:
```typescript
interface ClusterPageTemplateProps {
  clusterData: ClusterPageData;      // From clusterPages.ts
  category: CalculatorCategory;      // From calculators.ts
  relatedClusters: ClusterPageData[]; // Related cluster data
  colorScheme: 'primary' | 'accent' | 'secondary' | 'tertiary';
}
```

**Usage**:
```tsx
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

<ClusterPageTemplate 
  clusterData={clusterData}
  category={category}
  relatedClusters={relatedClusters}
  colorScheme="primary"
/>
```

**Features**:
- Automatic color theming based on colorScheme
- All 7 sections pre-built
- Responsive design
- Dark mode support
- Animations included

---

### 2. ClusterCalculatorCard
**Location**: `/components/ClusterCalculatorCard.tsx`

**Purpose**: Display individual calculator with formula in cluster page calculator lists.

**Props**:
```typescript
interface ClusterCalculatorCardProps {
  calculator: Calculator;  // Calculator object
  index: number;          // For stagger animation
}
```

**Usage**:
```tsx
{category.calculators.map((calculator, index) => (
  <ClusterCalculatorCard 
    key={calculator.id}
    calculator={calculator}
    index={index}
  />
))}
```

**Features**:
- Formula display (if available)
- Link to calculator page
- Hover animations
- 50ms stagger delay per index
- Dark mode support

---

### 3. FormulaCard
**Location**: `/components/FormulaCard.tsx`

**Purpose**: Display formulas with explanations in Core Formulas section.

**Props**:
```typescript
interface FormulaCardProps {
  formula: string;      // The formula (e.g., "n = m/M")
  explanation: string;  // Brief explanation
  index: number;       // For stagger animation
}
```

**Usage**:
```tsx
{formulas.map((formula, index) => (
  <FormulaCard 
    key={index}
    formula={formula}
    explanation="Description of formula"
    index={index}
  />
))}
```

**Features**:
- Monospace font for formulas
- Color-coded background
- 100ms stagger delay
- Slide-in-left animation

---

### 4. CommonMistakesList
**Location**: `/components/CommonMistakesList.tsx`

**Purpose**: Display common mistakes in warning-style cards.

**Props**:
```typescript
interface CommonMistakesListProps {
  mistakes: string[];  // Array of mistake descriptions
}
```

**Usage**:
```tsx
<CommonMistakesList mistakes={clusterData.commonMistakes} />
```

**Features**:
- 2-column grid layout
- Warning icon
- Red accent color
- 80ms stagger delay per item
- Fade-in-up animation

---

### 5. RelatedClusterLink
**Location**: `/components/RelatedClusterLink.tsx`

**Purpose**: Display related cluster page links in Related Topics section.

**Props**:
```typescript
interface RelatedClusterLinkProps {
  slug: string;        // Cluster page slug
  title: string;       // H1 title of cluster
  description: string; // Brief description
  index: number;      // For stagger animation
}
```

**Usage**:
```tsx
{relatedClusters.map((cluster, index) => (
  <RelatedClusterLink 
    key={cluster.slug}
    slug={cluster.slug}
    title={cluster.h1}
    description={cluster.metaDescription.split('.')[0]}
    index={index}
  />
))}
```

**Features**:
- Hover scale effect
- Arrow icon with translate animation
- 150ms stagger delay
- Gradient background
- Dark mode support

---

## Data Structures

### ClusterPageData
**Location**: `/data/clusterPages.ts`

```typescript
export interface ClusterPageData {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  categoryId: string;
  
  entityDefinition: {
    intro: string;
    whatItMeasures: string;
    formulasInvolved: string[];
  };
  
  whereUsed: {
    education: string;
    labs: string;
    industry: string;
    research: string;
  };
  
  commonMistakes: string[];
  relatedClusters: string[];
}
```

**Helper Functions**:
```typescript
// Get cluster page data by slug
getClusterPageBySlug(slug: string): ClusterPageData | undefined

// Get related cluster pages
getRelatedClusterPages(slug: string): ClusterPageData[]
```

---

## Page Implementation Pattern

### Full Custom Page (Stoichiometry, Concentration)
```tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
// Import all components individually

export const metadata: Metadata = {
  title: '...',
  description: '...',
};

export default function PageName() {
  const clusterData = getClusterPageBySlug('slug');
  const category = calculatorCategories.find(cat => cat.id === 'id');
  const relatedClusters = getRelatedClusterPages('slug');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return (
    <main>
      {/* Custom JSX for all 7 sections */}
    </main>
  );
}
```

### Template-Based Page (Chemical Reactions, Thermodynamics, etc.)
```tsx
import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: '...',
  description: '...',
};

export default function PageName() {
  const clusterData = getClusterPageBySlug('slug');
  const category = calculatorCategories.find(cat => cat.id === 'id');
  const relatedClusters = getRelatedClusterPages('slug');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return (
    <ClusterPageTemplate 
      clusterData={clusterData}
      category={category}
      relatedClusters={relatedClusters}
      colorScheme="primary" // or accent, secondary, tertiary
    />
  );
}
```

---

## Color Scheme Selection

Choose based on visual variety and topic:

- **primary** (Green): Stoichiometry, Electrochemistry, Atomic Structure
- **accent** (Lime): Concentration & Solution, Physical Chemistry
- **secondary** (Blue): Chemical Reactions, Organic Chemistry
- **tertiary** (Purple): Thermodynamics, Biochemistry

---

## Animations Reference

All components use these animation classes (from `tailwind.config.ts`):

- `animate-fade-in` - Fade in
- `animate-fade-in-up` - Fade in with upward movement
- `animate-zoom-in` - Scale up from 0.95 to 1
- `animate-bounce-in` - Bounce effect
- `animate-rotate-in` - Rotate slightly while fading in
- `animate-slide-in-left` - Slide from left
- `animate-slide-in-right` - Slide from right
- `animate-shake` - Subtle shake effect
- `animate-swing` - Swing animation

**Stagger delays**: Use `style={{ animationDelay: \`\${index * delay}ms\` }}`

---

## Typography Classes

From Google Fonts setup:

- `.font-display` - Playfair Display (for H1 hero headings)
- `.font-heading` - Space Grotesk (for section H2 headings)
- `.font-sans` - Poppins/Inter (body text, default)
- `.font-mono` - JetBrains Mono (formulas, code)

---

## Best Practices

1. **Always filter undefined**: When mapping relatedClusters, use `.filter(c => c !== undefined)`
2. **Consistent metadata**: Unique title and description for each page
3. **Color variety**: Alternate color schemes across pages
4. **Stagger animations**: Use index-based delays for visual appeal
5. **Dark mode**: Test all pages in dark mode
6. **Accessibility**: Maintain proper heading hierarchy (H1 → H2)
7. **Links**: Always use entity anchor text for homepage links

---

## Testing Checklist

- [ ] Page loads without errors
- [ ] All calculators display correctly
- [ ] Related cluster links work
- [ ] Breadcrumb navigation works
- [ ] Dark mode looks good
- [ ] Animations are smooth
- [ ] Mobile responsive
- [ ] Unique metadata set
- [ ] Internal links use proper anchor text
- [ ] No TypeScript errors
