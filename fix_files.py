import re

files = [
    r"app\atomic-structure-calculators\formal-charge-calculator\page.tsx",
    r"app\atomic-structure-calculators\wavelength-energy-calculator\page.tsx",
    r"app\chemical-reaction-calculators\radioactive-decay-calculator\page.tsx",
    r"app\redox-calculators\redox-balancing-calculator\page.tsx",
    r"app\thermodynamics-calculators\bond-energy-calculator\page.tsx",
    r"app\thermodynamics-calculators\clausius-clapeyron-calculator\page.tsx",
    r"app\thermodynamics-calculators\hess-law-calculator\page.tsx",
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove ALL carriage returns and normalize
    content = content.replace('\r\n', '\n').replace('\r', ' ')
    
    # Fix className split across lines
    content = re.sub(r'(className="[^"\n]*)\n\s*([^"\n]*")', r'\1 \2', content)
    
    # Normalize back to Windows line endings
    content = content.replace('\n', '\r\n')
    
    with open(file, 'w', encoding='utf-8', newline='') as f:
        f.write(content)
    
    print(f"Fixed: {file}")

print("\nDone!")
