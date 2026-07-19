const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({
  margins: { top: 50, bottom: 50, left: 50, right: 50 },
  size: 'LETTER'
});

doc.pipe(fs.createWriteStream('public/gaceta_60.pdf'));

// Portada
doc.fontSize(24).font('Helvetica-Bold').text('GACETA OFICIAL', { align: 'center' });
doc.fontSize(16).text('DE LA REPÚBLICA DE CUBA', { align: 'center' });
doc.moveDown();
doc.fontSize(14).text('MINISTERIO DE JUSTICIA', { align: 'center' });
doc.moveDown();
doc.fontSize(10).font('Helvetica').text('EDICIÓN ORDINARIA LA HABANA, VIERNES 17 DE JULIO DE 2026 AÑO CXXIV', { align: 'center' });
doc.moveDown(2);

// Indice
doc.fontSize(14).font('Helvetica-Bold').text('SUMARIO', { align: 'center' });
doc.moveDown();
doc.fontSize(12).font('Helvetica');

const resolutions = [
  "Resolución 12/2026", "Resolución 14/2026", "Resolución 15/2026", "Resolución 16/2026", 
  "Resolución 17/2026", "Resolución 18/2026", "Resolución 19/2026", "Resolución 20/2026", 
  "Resolución 21/2026", "Resolución 22/2026", "Resolución 23/2026", "Resolución 24/2026", 
  "Resolución 25/2026", "Resolución 26/2026"
];

resolutions.forEach(res => {
  doc.text(`${res} ..............................................................`);
});

doc.addPage();

// Contenido de resoluciones simuladas basado en el texto recibido
resolutions.forEach(res => {
  doc.fontSize(14).font('Helvetica-Bold').text(`MINISTERIO DE TRABAJO Y SEGURIDAD SOCIAL\n${res}`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(11).font('Helvetica').text('POR CUANTO: El Acuerdo 8332 del Consejo de Ministros, de 23 de marzo de 2018, dispone en su apartado Primero que el Ministerio de Trabajo y Seguridad Social es el organismo de la Administración Central del Estado, encargado de proponer, dirigir y controlar la política del Estado y el Gobierno en materia de trabajo, seguridad y salud en el trabajo, seguridad social y prevención, asistencia y trabajo social.', { align: 'justify' });
  doc.moveDown();
  doc.text('POR CUANTO: Las Transformaciones Económicas y Sociales aprobadas hacen necesario actualizar el salario mínimo del país y el sistema salarial del sector presupuestado.', { align: 'justify' });
  doc.moveDown();
  doc.text('POR TANTO: En el ejercicio de las facultades que me han sido conferidas en el Artículo 145, inciso d) de la Constitución de la República de Cuba,', { align: 'justify' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica-Bold').text('RESUELVO', { align: 'center' });
  doc.moveDown();
  doc.fontSize(11).font('Helvetica').text('PRIMERO: Establecer el sistema salarial para los trabajadores del sector presupuestado y las escalas salariales correspondientes.', { align: 'justify' });
  doc.moveDown();
  doc.text('SEGUNDO: La presente Resolución surte efectos a partir del primero de julio de 2026 con los pagos de salarios que se efectúan en el mes de agosto de 2026.', { align: 'justify' });
  doc.moveDown();
  doc.text('PUBLÍQUESE en la Gaceta Oficial de la República de Cuba.', { align: 'justify' });
  doc.moveDown();
  doc.text('DADA en La Habana, a los 15 días del mes de julio de 2026.', { align: 'justify' });
  doc.moveDown();
  doc.font('Helvetica-Bold').text('Jesús Otamendiz Campos\nMinistro', { align: 'right' });
  doc.addPage();
});

doc.end();
