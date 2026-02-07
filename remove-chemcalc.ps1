# PowerShell script to remove "| ChemCalc" and "- ChemCalc" from all page titles

$pageFiles = @(
    "app/concentration-and-solution-calculators/concentration-converter/page.tsx",
    "app/physical-chemistry-calculators/ideal-gas-law-calculator/page.tsx",
    "app/stoichiometry-calculators/molecular-formula-calculator/page.tsx",
    "app/stoichiometry-calculators/combustion-calculator/page.tsx",
    "app/stoichiometry-calculators/balancing-equations-calculator/page.tsx",
    "app/atomic-structure-calculators/electron-configuration-calculator/page.tsx",
    "app/atomic-structure-calculators/wavelength-energy-calculator/page.tsx",
    "app/atomic-structure-calculators/formal-charge-calculator/page.tsx",
    "app/chemistry-formulas/van-der-waals-equation/page.tsx",
    "app/chemistry-formulas/rate-law/page.tsx",
    "app/chemistry-formulas/clausius-clapeyron-equation/page.tsx",
    "app/chemistry-formulas/freezing-point-depression/page.tsx",
    "app/chemistry-formulas/boiling-point-elevation/page.tsx",
    "app/chemistry-formulas/osmotic-pressure/page.tsx",
    "app/chemistry-formulas/normality-formula/page.tsx",
    "app/chemistry-formulas/molecular-weight-formula/page.tsx",
    "app/chemistry-formulas/enthalpy-formula/page.tsx",
    "app/chemistry-formulas/entropy-formula/page.tsx",
    "app/thermodynamics-calculators/specific-heat-calculator/page.tsx",
    "app/thermodynamics-calculators/hess-law-calculator/page.tsx",
    "app/thermodynamics-calculators/clausius-clapeyron-calculator/page.tsx",
    "app/thermodynamics-calculators/bond-energy-calculator/page.tsx",
    "app/electrochemistry-calculators/redox-balancing-calculator/page.tsx",
    "app/chemistry-formulas/common-ion-effect/page.tsx",
    "app/chemistry-formulas/degree-of-unsaturation/page.tsx",
    "app/chemistry-formulas/faradays-law/page.tsx",
    "app/chemistry-formulas/hybridization/page.tsx",
    "app/chemistry-formulas/lattice-energy/page.tsx",
    "app/chemistry-formulas/molecular-formula/page.tsx",
    "app/chemistry-formulas/oxidation-number-rules/page.tsx",
    "app/chemistry-formulas/percent-error-formula/page.tsx",
    "app/chemistry-formulas/radioactive-decay-formula/page.tsx",
    "app/chemistry-formulas/vant-hoff-equation/page.tsx",
    "app/chemistry-formulas/theoretical-yield-formula/page.tsx",
    "app/chemistry-formulas/vsepr-theory/page.tsx",
    "app/chemistry-formulas/rydberg-equation/page.tsx",
    "app/chemistry-formulas/solubility-product-constant-ksp/page.tsx",
    "app/chemistry-formulas/reaction-quotient/page.tsx",
    "app/chemistry-formulas/rms-speed/page.tsx",
    "app/chemistry-formulas/ppm-formula/page.tsx",
    "app/chemistry-formulas/rate-determining-step/page.tsx",
    "app/chemistry-formulas/ppb-formula/page.tsx",
    "app/chemistry-formulas/planck-equation/page.tsx",
    "app/chemistry-formulas/nuclear-binding-energy/page.tsx",
    "app/chemistry-formulas/percent-composition-formula/page.tsx",
    "app/chemistry-formulas/partition-coefficient/page.tsx",
    "app/chemistry-formulas/michaelis-menten-equation/page.tsx",
    "app/chemistry-formulas/molar-volume-formula/page.tsx",
    "app/chemistry-formulas/le-chateliers-principle/page.tsx",
    "app/chemistry-formulas/ionic-strength-formula/page.tsx",
    "app/chemistry-formulas/integrated-rate-laws/page.tsx",
    "app/chemistry-formulas/hess-law/page.tsx",
    "app/chemistry-formulas/formal-charge-formula/page.tsx",
    "app/chemistry-formulas/heisenberg-uncertainty/page.tsx",
    "app/chemistry-formulas/gas-density-formula/page.tsx",
    "app/chemistry-formulas/equilibrium-constant/page.tsx",
    "app/chemistry-formulas/electron-configuration/page.tsx",
    "app/chemistry-formulas/dipole-moment-formula/page.tsx",
    "app/chemistry-formulas/de-broglie-wavelength/page.tsx",
    "app/chemistry-formulas/crystal-field-theory/page.tsx",
    "app/chemistry-formulas/combustion-analysis/page.tsx",
    "app/chemistry-formulas/collision-theory/page.tsx",
    "app/chemistry-formulas/buffer-capacity-formula/page.tsx",
    "app/chemistry-formulas/cell-potential-formula/page.tsx",
    "app/chemistry-formulas/braggs-law/page.tsx",
    "app/chemistry-formulas/bond-enthalpy-formula/page.tsx",
    "app/chemistry-formulas/calorimetry-formula/page.tsx",
    "app/chemistry-formulas/bohr-model/page.tsx",
    "app/chemistry-formulas/avogadros-law/page.tsx",
    "app/chemistry-formulas/activity-coefficient/page.tsx"
)

$count = 0
$baseDir = "c:\Users\Zohaib Meo\Desktop\chemcalc"

foreach ($pagePath in $pageFiles) {
    $fullPath = Join-Path $baseDir $pagePath
    
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw
        $originalContent = $content
        
        # Remove " | ChemCalc" and " - ChemCalc" from titles
        $content = $content -replace '\s+\|\s+ChemCalc', ''
        $content = $content -replace '\s+-\s+ChemCalc', ''
        
        # Only write if changes were made
        if ($content -ne $originalContent) {
            Set-Content -Path $fullPath -Value $content -NoNewline
            $count++
            Write-Host "Updated: $pagePath"
        }
    } else {
        Write-Host "Not found: $fullPath"
    }
}

Write-Host ""
Write-Host "Updated $count files"
