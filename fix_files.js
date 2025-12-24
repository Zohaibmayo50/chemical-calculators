const fs = require('fs');
const path = require('path');

// Find all page.tsx files recursively
function findPageFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory() && file !== 'node_modules' && file !== '.next' && file !== '.git') {
            findPageFiles(filePath, fileList);
        } else if (file === 'page.tsx') {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const allPageFiles = findPageFiles('app');
let fixedCount = 0;

allPageFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Remove ALL \r characters and normalize to \n only
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, ' ');
    
    // Fix ANY className attribute split across lines (may occur multiple times)
    let prevContent;
    do {
        prevContent = content;
        content = content.replace(/(className="[^"\n]*)\n\s*([^"\n]*")/g, '$1 $2');
    } while (content !== prevContent);
    
    // Normalize back to Windows \r\n
    content = content.replace(/\n/g, '\r\n');
    
    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
    }
});

console.log(`\nTotal files fixed: ${fixedCount}/${allPageFiles.length}`);

