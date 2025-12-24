const fs = require('fs');

const fixes = [
  {
    file: 'app/atomic-structure-calculators/formal-charge-calculator/page.tsx',
    correctLine: '      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">\r\n'
  },
  {
    file: 'app/atomic-structure-calculators/wavelength-energy-calculator/page.tsx',
    correctLine: '      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">\r\n'
  },
  {
    file: 'app/chemical-reaction-calculators/radioactive-decay-calculator/page.tsx',
    correctLine: '      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">\r\n'
  },
  {
    file: 'app/redox-calculators/redox-balancing-calculator/page.tsx',
    correctLine: '      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">\r\n'
  },
  {
    file: 'app/thermodynamics-calculators/bond-energy-calculator/page.tsx',
    correctLine: '      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">\r\n'
  }
];

fixes.forEach(({file, correctLine}) => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  
  // Replace line 16 (index 15) with the correct version
  lines[15] = correctLine.trimEnd();
  
  // If line 16 was split, remove the continuation on line 17
  if (lines[16] && lines[16].trim().startsWith('dark:via')) {
    lines.splice(16, 1);
  }
  
  // Rejoin with Windows line endings
  const fixed = lines.join('\r\n');
  fs.writeFileSync(file, fixed, 'utf8');
  
  console.log(`Fixed: ${file}`);
});

console.log('\nAll files fixed!');
