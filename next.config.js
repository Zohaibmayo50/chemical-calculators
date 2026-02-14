/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react'],
    optimizeCss: true,
    webpackBuildWorker: true,
  },
  
  transpilePackages: [],
  
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  
  // Turbopack config for Next.js 16+
  turbopack: {},

  async redirects() {
    return [
      // === Category index redirects ===
      { source: '/redox-calculators', destination: '/electrochemistry-calculators', permanent: true },
      { source: '/gas-calculators', destination: '/physical-chemistry-calculators', permanent: true },
      { source: '/gas-laws-calculators', destination: '/physical-chemistry-calculators', permanent: true },
      { source: '/kinetics-calculators', destination: '/chemical-reaction-calculators', permanent: true },
      { source: '/chemical-kinetics-calculators', destination: '/chemical-reaction-calculators', permanent: true },
      { source: '/quantum-calculators', destination: '/atomic-structure-calculators', permanent: true },
      { source: '/quantum-and-atomic-structure-calculators', destination: '/atomic-structure-calculators', permanent: true },
      { source: '/nuclear-calculators', destination: '/chemistry-formulas/nuclear-chemistry-formula', permanent: true },
      { source: '/coordination-chemistry-calculators', destination: '/chemistry-formulas/coordination-chemistry-formula', permanent: true },
      { source: '/solution-calculators', destination: '/concentration-and-solution-calculators', permanent: true },
      { source: '/chemical-equilibrium-calculators', destination: '/chemical-reaction-calculators', permanent: true },
      { source: '/general-chemistry-calculators', destination: '/', permanent: true },
      { source: '/molecular-structure-calculators', destination: '/atomic-structure-calculators', permanent: true },
      { source: '/spectroscopy-calculators', destination: '/organic-chemistry-calculators', permanent: true },
      { source: '/organic-calculators', destination: '/organic-chemistry-calculators', permanent: true },
      { source: '/calculators', destination: '/', permanent: true },

      // === Redox → Electrochemistry ===
      { source: '/redox-calculators/oxidation-number-calculator', destination: '/electrochemistry-calculators/oxidation-number-calculator', permanent: true },
      { source: '/redox-calculators/redox-balancing-calculator', destination: '/electrochemistry-calculators/redox-balancing-calculator', permanent: true },
      { source: '/redox-calculators/oxidation-state-calculator', destination: '/electrochemistry-calculators/oxidation-state-calculator', permanent: true },

      // === Concentration-calculators → Concentration-and-solution ===
      { source: '/concentration-calculators/molarity-calculator', destination: '/concentration-and-solution-calculators/molarity-calculator', permanent: true },
      { source: '/concentration-calculators/molar-mass-calculator', destination: '/stoichiometry-calculators/molecular-weight-calculator', permanent: true },

      // === Solution-calculators → Various ===
      { source: '/solution-calculators/osmotic-pressure-calculator', destination: '/physical-chemistry-calculators/osmotic-pressure-calculator', permanent: true },
      { source: '/solution-calculators/dilution-calculator', destination: '/concentration-and-solution-calculators/dilution-calculator', permanent: true },
      { source: '/solution-calculators/solution-preparation-calculator', destination: '/concentration-and-solution-calculators/solution-preparation-calculator', permanent: true },
      { source: '/solution-calculators/concentration-converter', destination: '/concentration-and-solution-calculators/concentration-converter', permanent: true },
      { source: '/solution-calculators/mass-percent-calculator', destination: '/concentration-and-solution-calculators/mass-percent-calculator', permanent: true },
      { source: '/solution-calculators/colligative-properties-calculator', destination: '/thermodynamics-calculators/boiling-point-elevation-calculator', permanent: true },
      { source: '/solution-calculators/solubility-calculator', destination: '/chemistry-formulas/solubility-formula', permanent: true },

      // === Gas-calculators → Physical chemistry ===
      { source: '/gas-calculators/ideal-gas-law-calculator', destination: '/physical-chemistry-calculators/ideal-gas-law-calculator', permanent: true },
      { source: '/gas-calculators/gas-density-calculator', destination: '/chemistry-formulas/gas-density-formula', permanent: true },
      { source: '/gas-calculators/gas-stoichiometry-calculator', destination: '/chemistry-formulas/gas-stoichiometry-formula', permanent: true },

      // === Gas-laws-calculators → Physical chemistry ===
      { source: '/gas-laws-calculators/ideal-gas-law-calculator', destination: '/physical-chemistry-calculators/ideal-gas-law-calculator', permanent: true },
      { source: '/gas-laws-calculators/kinetic-molecular-theory-calculator', destination: '/physical-chemistry-calculators/kinetic-molecular-theory-calculator', permanent: true },
      { source: '/gas-laws-calculators/grahams-law-calculator', destination: '/physical-chemistry-calculators/grahams-law-calculator', permanent: true },
      { source: '/gas-laws-calculators/gas-density-calculator', destination: '/chemistry-formulas/gas-density-formula', permanent: true },
      { source: '/gas-laws-calculators/gas-stoichiometry-calculator', destination: '/chemistry-formulas/gas-stoichiometry-formula', permanent: true },
      { source: '/gas-laws-calculators/molar-volume-calculator', destination: '/chemistry-formulas/molar-volume-formula', permanent: true },

      // === Quantum-and-atomic-structure → Atomic structure / Formulas ===
      { source: '/quantum-and-atomic-structure-calculators/bohr-model-calculator', destination: '/atomic-structure-calculators/bohr-model-calculator', permanent: true },
      { source: '/quantum-and-atomic-structure-calculators/electron-configuration-calculator', destination: '/atomic-structure-calculators/electron-configuration-calculator', permanent: true },
      { source: '/quantum-and-atomic-structure-calculators/wavelength-energy-calculator', destination: '/atomic-structure-calculators/wavelength-energy-calculator', permanent: true },
      { source: '/quantum-and-atomic-structure-calculators/de-broglie-wavelength-calculator', destination: '/chemistry-formulas/de-broglie-wavelength', permanent: true },
      { source: '/quantum-and-atomic-structure-calculators/heisenberg-uncertainty-calculator', destination: '/chemistry-formulas/heisenberg-uncertainty', permanent: true },
      { source: '/quantum-and-atomic-structure-calculators/quantum-numbers-calculator', destination: '/chemistry-formulas/quantum-numbers', permanent: true },
      { source: '/quantum-and-atomic-structure-calculators/molecular-orbital-calculator', destination: '/chemistry-formulas/molecular-orbital-theory', permanent: true },

      // === Quantum-calculators → Formulas ===
      { source: '/quantum-calculators/quantum-numbers-calculator', destination: '/chemistry-formulas/quantum-numbers', permanent: true },
      { source: '/quantum-calculators/heisenberg-uncertainty-calculator', destination: '/chemistry-formulas/heisenberg-uncertainty', permanent: true },
      { source: '/quantum-calculators/de-broglie-wavelength-calculator', destination: '/chemistry-formulas/de-broglie-wavelength', permanent: true },

      // === Kinetics-calculators → Chemical reaction / Formulas ===
      { source: '/kinetics-calculators/half-life-calculator', destination: '/chemical-reaction-calculators/half-life-calculator', permanent: true },
      { source: '/kinetics-calculators/rate-law-calculator', destination: '/chemical-reaction-calculators/rate-law-calculator', permanent: true },
      { source: '/kinetics-calculators/arrhenius-equation-calculator', destination: '/chemical-reaction-calculators/arrhenius-calculator', permanent: true },
      { source: '/kinetics-calculators/reaction-rate-calculator', destination: '/chemical-reaction-calculators', permanent: true },
      { source: '/kinetics-calculators/integrated-rate-law-calculator', destination: '/chemistry-formulas/integrated-rate-laws', permanent: true },
      { source: '/kinetics-calculators/reaction-order-calculator', destination: '/chemistry-formulas/reaction-order-formula', permanent: true },
      { source: '/kinetics-calculators/first-order-kinetics-calculator', destination: '/chemical-reaction-calculators/half-life-calculator', permanent: true },
      { source: '/kinetics-calculators/collision-theory-calculator', destination: '/chemistry-formulas/collision-theory', permanent: true },

      // === Chemical-equilibrium → Chemical reaction / Equilibrium ===
      { source: '/chemical-equilibrium-calculators/equilibrium-constant-calculator', destination: '/chemical-reaction-calculators/equilibrium-constant-calculator', permanent: true },
      { source: '/chemical-equilibrium-calculators/reaction-quotient-calculator', destination: '/chemical-reaction-calculators/reaction-quotient-calculator', permanent: true },
      { source: '/chemical-equilibrium-calculators/michaelis-menten-calculator', destination: '/biochemistry-calculators/michaelis-menten-calculator', permanent: true },
      { source: '/chemical-equilibrium-calculators/solubility-product-calculator', destination: '/equilibrium-calculators/solubility-product-calculator', permanent: true },

      // === Misplaced solubility paths ===
      { source: '/physical-chemistry-calculators/solubility-calculator', destination: '/chemistry-formulas/solubility-formula', permanent: true },
      { source: '/electrochemistry-calculators/solubility-product-calculator', destination: '/equilibrium-calculators/solubility-product-calculator', permanent: true },

      // === Nuclear-calculators ===
      { source: '/nuclear-calculators/nuclear-binding-energy-calculator', destination: '/chemistry-formulas/nuclear-binding-energy', permanent: true },

      // === Coordination-chemistry ===
      { source: '/coordination-chemistry-calculators/crystal-field-splitting-calculator', destination: '/chemistry-formulas/crystal-field-theory', permanent: true },
      { source: '/coordination-chemistry-calculators/ligand-field-stabilization-energy-calculator', destination: '/chemistry-formulas/crystal-field-theory', permanent: true },
      { source: '/coordination-chemistry-calculators/coordination-number-calculator', destination: '/chemistry-formulas/coordination-chemistry-formula', permanent: true },

      // === Wrong category for existing calculators ===
      { source: '/chemical-reaction-calculators/pka-calculator', destination: '/acid-base-calculators/pka-calculator', permanent: true },
      { source: '/atomic-structure-calculators/pka-calculator', destination: '/acid-base-calculators/pka-calculator', permanent: true },
      { source: '/atomic-structure-calculators/molar-mass-calculator', destination: '/stoichiometry-calculators/molecular-weight-calculator', permanent: true },
      { source: '/atomic-structure-calculators/ionic-formula-calculator', destination: '/stoichiometry-calculators/ionic-formula-calculator', permanent: true },
      { source: '/stoichiometry-calculators/ideal-gas-law-calculator', destination: '/physical-chemistry-calculators/ideal-gas-law-calculator', permanent: true },
      { source: '/stoichiometry-calculators/molar-mass-calculator', destination: '/stoichiometry-calculators/molecular-weight-calculator', permanent: true },
      { source: '/stoichiometry-calculators/mass-to-moles-calculator', destination: '/stoichiometry-calculators/molecular-weight-calculator', permanent: true },
      { source: '/physical-chemistry-calculators/boiling-point-elevation-calculator', destination: '/thermodynamics-calculators/boiling-point-elevation-calculator', permanent: true },
      { source: '/physical-chemistry-calculators/ionic-strength-calculator', destination: '/physical-chemistry-calculators', permanent: true },
      { source: '/thermodynamics-calculators/heat-capacity-calculator', destination: '/thermodynamics-calculators/specific-heat-calculator', permanent: true },
      { source: '/thermodynamics-calculators/freezing-point-calculator', destination: '/thermodynamics-calculators/freezing-point-depression-calculator', permanent: true },
      { source: '/equilibrium-calculators/equilibrium-constant-calculator', destination: '/chemical-reaction-calculators/equilibrium-constant-calculator', permanent: true },

      // === Acid-base redirects ===
      { source: '/acid-base-calculators/buffer-solution-calculator', destination: '/acid-base-calculators/pka-calculator', permanent: true },
      { source: '/acid-base-calculators/buffer-capacity-calculator', destination: '/acid-base-calculators/pka-calculator', permanent: true },
      { source: '/acid-base-calculators/titration-curve-calculator', destination: '/acid-base-calculators/titration-calculator', permanent: true },
      { source: '/acid-base-calculators/henderson-hasselbalch-calculator', destination: '/atomic-structure-calculators/henderson-hasselbalch-calculator', permanent: true },
      { source: '/chemical-reaction-calculators/buffer-calculator', destination: '/acid-base-calculators/pka-calculator', permanent: true },

      // === Concentration misc ===
      { source: '/concentration-and-solution-calculators/ppm-to-molarity-calculator', destination: '/concentration-and-solution-calculators/ppm-calculator', permanent: true },
      { source: '/concentration-and-solution-calculators/ph-and-poh-calculator', destination: '/atomic-structure-calculators/ph-calculator', permanent: true },

      // === General chemistry / Other ===
      { source: '/general-chemistry-calculators/molar-mass-calculator', destination: '/stoichiometry-calculators/molecular-weight-calculator', permanent: true },
      { source: '/general-chemistry-calculators/temperature-converter', destination: '/', permanent: true },
      { source: '/organic-calculators/stereochemistry-calculator', destination: '/organic-chemistry-calculators/stereochemistry-calculator', permanent: true },
      { source: '/spectroscopy-calculators/nmr-calculator', destination: '/organic-chemistry-calculators/nmr-chemical-shift-calculator', permanent: true },
      { source: '/molecular-structure-calculators/molecular-geometry-calculator', destination: '/chemistry-formulas/vsepr-theory', permanent: true },

      // === Formula path fixes ===
      { source: '/chemistry-formulas/cell-potential', destination: '/chemistry-formulas/cell-potential-formula', permanent: true },
      { source: '/chemistry-formulas/rate-law-formula', destination: '/chemistry-formulas/rate-law', permanent: true },
      { source: '/chemistry-formulas/daltons-law-formula', destination: '/chemistry-formulas/daltons-law', permanent: true },
      { source: '/chemistry-formulas/lewis-structure-formula', destination: '/chemistry-formulas/lewis-structure', permanent: true },
      { source: '/chemistry-formulas/molecular-geometry', destination: '/chemistry-formulas/vsepr-theory', permanent: true },
      { source: '/chemistry-formulas/equilibrium-constant-formula', destination: '/chemistry-formulas/equilibrium-constant', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
