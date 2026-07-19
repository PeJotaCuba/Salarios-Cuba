const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('public/gaceta_60.pdf'));
doc.fontSize(25).text('Gaceta Oficial No. 60 Ordinaria', 100, 100);
doc.fontSize(12).text('Este es un documento generado de prueba.', 100, 150);
doc.end();
