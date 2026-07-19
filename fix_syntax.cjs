const fs = require('fs');

let content = fs.readFileSync('src/resolutionsData.ts', 'utf8');

// I need to add a comma before { id: "R21"
content = content.replace(/}\s*{\s*id:\s*"R21"/, '},\n  {\n    id: "R21"');

fs.writeFileSync('src/resolutionsData.ts', content);
