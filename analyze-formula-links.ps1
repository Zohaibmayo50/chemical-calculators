# Extract unique formula paths from the grep results
$links = @(
  'normality-formula', 'molarity-formula', 'mass-percent-formula', 'ppm-formula', 'ppb-formula',
  'mole-fraction-formula', 'concentration-converter-formula', 'molality-formula', 
  'ideal-gas-law-formula', 'combined-gas-law-formula', 'boiling-point-elevation-formula',
  'colligative-properties-formula', 'freezing-point-depression-formula', 'nernst-equation',
  'cell-potential-formula', 'osmotic-pressure-formula', 'vant-hoff-equation-formula',
  'michaelis-menten-equation', 'reaction-rate-formula', 'equilibrium-constant', 'reaction-quotient',
  'gibbs-free-energy-formula', 'entropy-formula', 'degree-of-unsaturation', 'molecular-formula',
  'henderson-hasselbalch-formula', 'ph-formula', 'beer-lambert-law-formula', 'absorbance-formula',
  'half-life-formula', 'radioactive-decay-formula', 'rate-law', 'integrated-rate-laws',
  'enthalpy-formula', 'hess-law-formula', 'molecular-weight-formula', 'molar-mass-formula',
  'arrhenius-equation', 'vapor-pressure-formula', 'clausius-clapeyron-formula',
  'molecular-formula-formula', 'empirical-formula-formula', 'combustion-analysis-formula',
  'stoichiometry-formula', 'balancing-equations-formula', 'dilution-formula', 'density-formula',
  'solubility-product-constant-ksp', 'freezing-point-depression', 'boiling-point-elevation',
  'osmotic-pressure', 'raoults-law', 'percent-yield-formula', 'empirical-formula',
  'limiting-reactant', 'percent-composition-formula', 'theoretical-yield-formula',
  'specific-heat-formula', 'calorimetry-formula', 'mole-ratio-formula', 'lattice-energy-formula',
  'born-haber-cycle-formula', 'solubility-formula', 'ideal-gas-law',
  'combined-gas-law', 'daltons-law', 'grahams-law', 'boyles-law', 'charles-law',
  'gay-lussacs-law', 'van-der-waals-equation', 'gas-density-formula', 'rms-speed',
  'molar-volume-formula', 'avogadros-law', 'gibbs-free-energy', 'vant-hoff-equation',
  'clausius-clapeyron-equation', 'bond-enthalpy-formula', 'hess-law', 'lattice-energy',
  'henderson-hasselbalch-equation', 'buffer-capacity-formula', 'collision-theory',
  'rate-determining-step', 'le-chateliers-principle', 'common-ion-effect', 'faradays-law',
  'oxidation-number-rules', 'beers-law', 'de-broglie-wavelength', 'heisenberg-uncertainty',
  'formal-charge-formula', 'electron-configuration', 'hybridization', 'bohr-model',
  'crystal-field-theory', 'vsepr-theory', 'ionic-strength-formula', 'dipole-moment-formula',
  'partition-coefficient', 'activity-coefficient', 'nuclear-binding-energy', 'rydberg-equation',
  'planck-equation', 'braggs-law', 'rate-law-formula', 'daltons-law-formula', 'quantum-numbers',
  'lewis-structure', 'molecular-orbital-theory', 'wavelength-energy-relationship',
  'titration-formula', 'buffer-solution-formula',
  'limiting-reagent-formula', 'solution-preparation-formula', 'titration-curve-formula',
  'bond-energy-formula', 'enthalpy-reaction-formula', 'electrolysis-formula', 'cell-potential',
  'redox-balancing-formula', 'oxidation-number-formula', 'degree-unsaturation-formula',
  'stereochemistry-formula', 'vsepr-theory-formula', 'lewis-structure-formula', 'molecular-geometry',
  'coordination-chemistry-formula', 'transition-state-theory-formula', 'partition-coefficient-formula',
  'distribution-coefficient-formula', 'reaction-order-formula', 'raoults-law-formula',
  'van-der-waals-equation-formula', 'kinetic-molecular-theory-formula', 'rms-velocity-formula',
  'grahams-law-formula', 'diffusion-formula', 'molecular-geometry-formula',
  'partial-pressure-formula', 'nmr-chemical-shift-formula', 'electronegativity-formula',
  'debye-huckel-formula', 'gas-stoichiometry-formula', 'nuclear-chemistry-formula',
  'equilibrium-constant-formula', 'integrated-rate-law-formula'
) | Sort-Object -Unique

# Get existing directories
$existingDirs = Get-ChildItem -Path 'app\chemistry-formulas' -Directory | Select-Object -ExpandProperty Name

Write-Output "=== FORMULA LINK ANALYSIS REPORT ==="
Write-Output "`nTotal unique formula URLs referenced: $($links.Count)"
Write-Output "Total existing formula directories: $($existingDirs.Count)"

Write-Output "`n=== MISSING FORMULA PAGES (404s) ==="
$missing = $links | Where-Object { $_ -notin $existingDirs }
$missing | Sort-Object | ForEach-Object { Write-Output "  - $_" }

Write-Output "`nTotal missing: $($missing.Count)"

Write-Output "`n=== EXISTING FORMULA PAGES (WORKING LINKS) ==="
$existing = $links | Where-Object { $_ -in $existingDirs }
$existing | Sort-Object | ForEach-Object { Write-Output "  + $_" }

Write-Output "`nTotal existing: $($existing.Count)"

Write-Output "`n=== URL/DIRECTORY MISMATCHES ==="
Write-Output "(Links with similar names but different paths)"

# Check for potential mismatches
$potentialMismatches = @()
foreach ($link in $missing) {
    $baseName = $link -replace '-formula$','' -replace '-equation$',''
    $similar = $existingDirs | Where-Object { 
        $dirBase = $_ -replace '-formula$','' -replace '-equation$',''
        $dirBase -eq $baseName
    }
    if ($similar) {
        $potentialMismatches += [PSCustomObject]@{
            LinkedURL = $link
            ActualDirectory = $similar
        }
    }
}

if ($potentialMismatches.Count -gt 0) {
    $potentialMismatches | ForEach-Object {
        Write-Output "  [X] Linked to: /chemistry-formulas/$($_.LinkedURL)"
        Write-Output "      Exists as: /chemistry-formulas/$($_.ActualDirectory)"
        Write-Output ""
    }
} else {
    Write-Output "  No obvious mismatches found"
}

Write-Output "Total potential mismatches: $($potentialMismatches.Count)"

Write-Output "`n=== SUMMARY ==="
Write-Output "Total unique URLs referenced: $($links.Count)"
Write-Output "Working links: $($existing.Count)"
Write-Output "Broken links (404s): $($missing.Count)"
Write-Output "URL mismatches: $($potentialMismatches.Count)"
