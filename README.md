# Chemical Calculators Website

A comprehensive Next.js 14 website featuring 100+ chemistry calculators organized by topical authority and semantic SEO principles.

## 🧪 Features

- **100+ Chemistry Calculators** across 10 semantic topic clusters
- **Semantic SEO Optimized** following Koray Tuğberk Gübür's methodology
- **Next.js 14 App Router** with TypeScript
- **Server Components** for optimal performance
- **ISR (Incremental Static Regeneration)** for scalability
- **Comprehensive Structured Data** (Schema.org)
- **Responsive Design** with Tailwind CSS
- **Search Functionality** with real-time results
- **FAQ Section** with schema markup

## 📚 Calculator Categories

1. **Stoichiometry Calculators** - Reaction calculations, limiting reagents, yields
2. **Solutions & Concentrations** - Molarity, molality, dilution, PPM
3. **Chemical Reactions** - Equilibrium, kinetics, thermodynamics
4. **Thermodynamics** - Enthalpy, entropy, Gibbs free energy
5. **Physical Chemistry** - Gas laws, colligative properties
6. **Electrochemistry** - Nernst equation, cell potentials
7. **Organic Chemistry** - Functional groups, isomers
8. **Biochemistry** - Enzyme kinetics, protein calculations
9. **General Chemistry** - pH, molar mass, electron configuration
10. **Other Tools** - Unit conversions, spectroscopy

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
chemcalc/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── SearchBar.tsx       # Search component
│   ├── ClusterSection.tsx  # Topic cluster section
│   ├── CalculatorList.tsx  # Calculator grid
│   ├── FAQ.tsx             # FAQ with schema
│   └── Footer.tsx          # Footer navigation
├── data/
│   └── calculators.ts      # All calculator data
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## 🎯 SEO Features

### Semantic SEO Implementation

- **Entity-Based Content**: All sections include entity definitions and semantic context
- **Topical Authority**: 10 comprehensive topic clusters with hierarchical structure
- **Internal Linking**: Semantic anchor text with contextual relevance
- **Content Layers**: Multiple depth levels (overview, category, calculator)
- **Information Gain**: Non-overlapping, unique content per section

### Structured Data

- Website Schema
- Organization Schema
- FAQPage Schema
- BreadcrumbList Schema
- CollectionPage Schema
- Calculator Schema (per page)
- HowTo Schema (per calculator)

### Technical SEO

- ISR with hourly revalidation
- Semantic HTML5 markup
- Canonical URLs
- Open Graph tags
- Twitter Cards
- XML Sitemap (generate separately)
- robots.txt optimization

## 🛠️ Technology Stack

- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📊 Performance

- Server Components for zero client JS where possible
- Optimized images and assets
- Minimal JavaScript bundle
- Fast initial page load
- Excellent Core Web Vitals

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Metadata

Update metadata in [app/layout.tsx](app/layout.tsx):

- Site URL
- Google verification code
- Social media handles

## 📝 Content Management

All calculator data is managed in [data/calculators.ts](data/calculators.ts):

```typescript
export interface Calculator {
  id: string;
  name: string;
  description: string;
  slug: string;
  formula?: string;
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

```bash
npm run build
npm run start
```

## 📈 Next Steps

1. **Individual Calculator Pages**: Create `/app/[slug]/page.tsx`
2. **Calculator Functionality**: Add actual calculation logic
3. **Blog Section**: Add educational content
4. **Analytics**: Integrate Google Analytics
5. **Sitemap**: Generate XML sitemap
6. **Schema Testing**: Validate with Google Rich Results Test

## 🤝 Contributing

Contributions are welcome! Please follow semantic SEO principles and maintain code quality.

## 📄 License

MIT License - feel free to use for your projects.

## 🙏 Acknowledgments

- SEO methodology inspired by Koray Tuğberk Gübür
- Calculator data inspired by Omni Calculator
- Built with Next.js and Tailwind CSS

---

**Note**: This is the homepage foundation. Individual calculator pages need to be implemented with actual calculation logic and additional schema markup.
