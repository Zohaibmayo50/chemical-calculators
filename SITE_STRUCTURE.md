# Site Structure & Internal Linking Map

```
                                    ┌──────────────────────────────┐
                                    │      HOMEPAGE (/)            │
                                    │                              │
                                    │  "Chemistry Calculators"     │
                                    │  102 Calculators Total       │
                                    │  Main Entity Hub             │
                                    └──────────────┬───────────────┘
                                                   │
                    ┌──────────────────────────────┼──────────────────────────────┐
                    │                              │                              │
         ┌──────────▼──────────┐       ┌──────────▼──────────┐       ┌──────────▼──────────┐
         │   STOICHIOMETRY     │◄─────►│  CONCENTRATION &    │◄─────►│ CHEMICAL REACTION   │
         │    CALCULATORS      │       │    SOLUTION         │       │    CALCULATORS      │
         │                     │       │   CALCULATORS       │       │                     │
         │ • Mole ratios       │       │ • Molarity          │       │ • Equilibrium       │
         │ • Limiting reagent  │       │ • Dilution          │       │ • Kinetics          │
         │ • Percent yield     │       │ • Normality         │       │ • Rate constants    │
         │ • 12 calculators    │       │ • 9 calculators     │       │ • 8 calculators     │
         └─────────────────────┘       └─────────────────────┘       └─────────────────────┘
                    │                              │                              │
                    └──────────────────────────────┼──────────────────────────────┘
                                                   │
                    ┌──────────────────────────────┼──────────────────────────────┐
                    │                              │                              │
         ┌──────────▼──────────┐       ┌──────────▼──────────┐       ┌──────────▼──────────┐
         │  THERMODYNAMICS     │◄─────►│  ELECTROCHEMISTRY   │◄─────►│  PHYSICAL CHEM      │
         │    CALCULATORS      │       │    CALCULATORS      │       │    CALCULATORS      │
         │                     │       │                     │       │                     │
         │ • Enthalpy          │       │ • Nernst equation   │       │ • Gas laws          │
         │ • Entropy           │       │ • Cell potential    │       │ • Phase changes     │
         │ • Gibbs energy      │       │ • pH calculations   │       │ • Colligative       │
         │ • 11 calculators    │       │ • 10 calculators    │       │ • 12 calculators    │
         └─────────────────────┘       └─────────────────────┘       └─────────────────────┘
                    │                              │                              │
                    └──────────────────────────────┼──────────────────────────────┘
                                                   │
                    ┌──────────────────────────────┼──────────────────────────────┐
                    │                              │                              │
         ┌──────────▼──────────┐       ┌──────────▼──────────┐       ┌──────────▼──────────┐
         │  ORGANIC CHEMISTRY  │◄─────►│   BIOCHEMISTRY      │       │  ATOMIC STRUCTURE   │
         │    CALCULATORS      │       │    CALCULATORS      │       │    CALCULATORS      │
         │                     │       │                     │       │                     │
         │ • Functional groups │       │ • Enzyme kinetics   │       │ • Quantum numbers   │
         │ • Mechanisms        │       │ • DNA/Protein       │       │ • Electron config   │
         │ • Stereochemistry   │       │ • Km, Vmax          │       │ • Energy levels     │
         │ • 14 calculators    │       │ • 8 calculators     │       │ • 6 calculators     │
         └─────────────────────┘       └─────────────────────┘       └─────────────────────┘
                    │                              │                              │
                    └──────────────────────────────┴──────────────────────────────┘
                                                   │
                                                   ▼
                                    ┌──────────────────────────────┐
                                    │    Individual Calculator     │
                                    │         Pages (102)          │
                                    └──────────────────────────────┘
```

## Internal Linking Structure

### Upward Links (Cluster → Homepage)
**Every cluster page links UP to homepage with:**
1. **Breadcrumb**: "Chemistry Calculators > [Topic]"
2. **Hero Link**: "Explore all chemistry calculators"
3. **CTA Button**: "Browse All Chemistry Calculators"

**Anchor Text Strategy**:
- Use entity anchor: "chemistry calculators"
- Contextual: "Explore all chemistry calculators"
- Branded: "Browse All Chemistry Calculators"

---

### Lateral Links (Cluster ↔ Cluster)
**Each cluster links to 2-3 related clusters:**

#### Stoichiometry ↔ Connections
- → Concentration & Solution (solution calculations)
- → Chemical Reaction (reaction calculations)
- → Thermodynamics (energy calculations)

#### Concentration & Solution ↔ Connections
- → Stoichiometry (mole calculations)
- → Physical Chemistry (colligative properties)
- → Biochemistry (biological solutions)

#### Chemical Reaction ↔ Connections
- → Stoichiometry (reaction quantities)
- → Thermodynamics (reaction energetics)
- → Electrochemistry (redox reactions)

#### Thermodynamics ↔ Connections
- → Chemical Reaction (reaction spontaneity)
- → Electrochemistry (cell thermodynamics)
- → Physical Chemistry (phase changes)

#### Electrochemistry ↔ Connections
- → Thermodynamics (Gibbs energy)
- → Chemical Reaction (redox equilibrium)
- → Physical Chemistry (ionic solutions)

#### Physical Chemistry ↔ Connections
- → Concentration & Solution (solution properties)
- → Thermodynamics (physical changes)
- → Atomic Structure (quantum mechanics)

#### Organic Chemistry ↔ Connections
- → Biochemistry (biomolecules)
- → Chemical Reaction (organic reactions)

#### Biochemistry ↔ Connections
- → Organic Chemistry (biological molecules)
- → Concentration & Solution (buffer solutions)

#### Atomic Structure ↔ Connections
- → Physical Chemistry (quantum chemistry)
- → Electrochemistry (electron transfer)

---

### Downward Links (Homepage → Clusters)
**Homepage provides navigation to all 9 clusters via:**
1. Category cards/sections
2. Main navigation (if implemented)
3. Footer links (if implemented)

---

## URL Structure

```
/                                          (Homepage)
├── /stoichiometry-calculators
├── /concentration-and-solution-calculators
├── /chemical-reaction-calculators
├── /thermodynamics-calculators
├── /electrochemistry-calculators
├── /physical-chemistry-calculators
├── /organic-chemistry-calculators
├── /biochemistry-calculators
└── /atomic-structure-calculators
```

**Pattern**: `/{topic}-calculators`

**Benefits**:
- SEO-friendly URLs
- Clear topic hierarchy
- Consistent structure
- Easy to remember

---

## Link Equity Flow

```
                    Homepage (Authority: 100)
                            │
                ┌───────────┴───────────┐
                │                       │
        Cluster Pages (each gets ~11)  │
                │                       │
        ┌───────┴────────┐             │
        │                │             │
    Lateral Links   Individual     Back Links
    (strengthen     Calculators    (reinforce
     clusters)      (specific)      homepage)
```

**Strategy**:
1. **Homepage** = highest authority (ranks for main keywords)
2. **Cluster Pages** = medium authority (rank for topic keywords)
3. **Calculator Pages** = specific authority (rank for long-tail)
4. **Lateral Links** = distribute equity between related topics
5. **Back Links** = strengthen homepage authority

---

## Keyword Targeting

| Page Type | Primary Keywords | Secondary Keywords |
|-----------|-----------------|-------------------|
| Homepage | chemistry calculators, chemical calculators | chemistry calculator online, free chemistry tools |
| Stoichiometry | stoichiometry calculators, mole ratio calculator | limiting reagent calculator, percent yield |
| Concentration | molarity calculator, solution calculator | dilution calculator, normality calculator |
| Chemical Reaction | equilibrium calculator, rate constant | reaction quotient, kinetics calculator |
| Thermodynamics | enthalpy calculator, gibbs free energy | entropy calculator, thermodynamics |
| Electrochemistry | nernst equation calculator, cell potential | electrochemistry calculator, pH calculator |
| Physical Chemistry | gas law calculator, colligative properties | ideal gas law, phase diagram |
| Organic Chemistry | organic chemistry calculator, functional group | stereochemistry calculator, mechanism |
| Biochemistry | enzyme kinetics calculator, michaelis menten | Km calculator, protein calculator |
| Atomic Structure | quantum number calculator, electron configuration | orbital calculator, energy level |

**No Cannibalization**: Each targets distinct keyword clusters.

---

## User Journey Paths

### Path 1: Topic-Specific Search
```
User searches "molarity calculator"
    ↓
Lands on Concentration & Solution Calculators
    ↓
Finds Molarity Calculator
    ↓
Sees related: Dilution, Normality
    ↓
Explores homepage for other calculators
```

### Path 2: Broad Search
```
User searches "chemistry calculators"
    ↓
Lands on Homepage
    ↓
Browses categories
    ↓
Clicks Thermodynamics cluster
    ↓
Finds Enthalpy Calculator
```

### Path 3: Cross-Topic Exploration
```
User on Stoichiometry page
    ↓
Sees "Related: Chemical Reaction Calculators"
    ↓
Clicks lateral link
    ↓
Discovers Equilibrium Calculator
    ↓
Returns to homepage via breadcrumb
```

---

## SEO Impact Analysis

### Expected Rankings

**Homepage** (`/`):
- Position 1-5: "chemistry calculators"
- Position 1-3: "chemical calculators"
- Featured snippet potential: "What are chemistry calculators?"

**Cluster Pages** (`/[topic]-calculators`):
- Position 1-10: "[topic] calculators"
- Position 1-5: "[specific calculator] calculator"
- Featured snippet potential: Formula cards, Common Mistakes

**Individual Calculators**:
- Position 1-3: "[specific calculator name]"
- Position 1-5: "how to calculate [topic]"

### Traffic Distribution Estimate

```
Homepage:              40% of organic traffic
Cluster Pages:         35% of organic traffic (combined)
Individual Calculators: 25% of organic traffic (combined)
```

### Authority Distribution

```
Homepage = Primary Authority Hub
    ↓
Cluster Pages = Secondary Authority Nodes
    ↓
Calculator Pages = Specific Intent Pages
```

---

## Monitoring & Optimization

### Metrics to Track

1. **Rankings**:
   - Homepage position for "chemistry calculators"
   - Each cluster page position for "[topic] calculators"
   
2. **Traffic**:
   - Organic traffic to each cluster
   - Click-through rates from homepage
   - Lateral navigation between clusters
   
3. **Engagement**:
   - Time on cluster pages
   - Pages per session
   - Bounce rate per cluster
   
4. **Conversions**:
   - Calculator usage from each cluster
   - Newsletter signups
   - Return visits

### Optimization Opportunities

1. **Add More Clusters**: Expand to 15-20 topics
2. **Enhance Content**: Add video explanations, interactive demos
3. **Improve Internal Links**: Add contextual in-content links
4. **Build External Links**: Get backlinks to cluster pages
5. **Update Data**: Refresh formulas, add new calculators
6. **User Feedback**: Implement suggestions, fix mistakes

---

## Implementation Checklist

- [x] Create 9 cluster page routes
- [x] Implement all 7 sections per page
- [x] Set up internal linking (upward, lateral, downward)
- [x] Unique metadata for each page
- [x] Dark mode support
- [x] Responsive design
- [x] Animation and UX polish
- [ ] Test all pages in browser
- [ ] Verify SEO metadata
- [ ] Check mobile responsiveness
- [ ] Submit sitemap to search engines
- [ ] Monitor initial rankings
- [ ] Gather user feedback
- [ ] Iterate based on data
