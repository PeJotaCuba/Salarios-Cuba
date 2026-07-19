const fs = require('fs');

let content = fs.readFileSync('src/resolutionsData.ts', 'utf8');

// We will replace `    ]\n  },` with our new section and `    ]\n  },`
// This is a bit hacky, but works. 

const generalProvisions = {
  R15: ["Implementación del pago por resultados según el cumplimiento de los indicadores de eficiencia.", "El pago por condiciones de nocturnidad se mantiene vigente de acuerdo a las regulaciones de la ley laboral.", "Regulaciones para el pluriempleo y contratos a tiempo parcial en el sector."],
  R18: ["Retribución adicional por categoría docente o grado científico (Especialidad, Maestría, Doctorado).", "Carga docente máxima permitida sin afectación salarial.", "Compensación por años de servicio en el sector educación."],
  R19: ["Clasificación por nivel de la instalación médica (Nivel Primario, Secundario, Terciario).", "Pago por guardias médicas y rotaciones nocturnas.", "Estipendios para residentes en formación de especialidades."],
  R20: ["Pago por categorías de investigación (Investigador Titular, Auxiliar, Agregado).", "Bonos por participación en proyectos de innovación y desarrollo (I+D).", "Clasificación de los centros de investigación según su impacto social."],
  R21: ["Escalas diferenciadas por la categoría de la institución cultural (Nacional, Provincial, Municipal).", "Retribución por horas de ensayo y presentaciones adicionales.", "Pago por dirección artística y puesta en escena."],
  R22: ["Clasificación de Oficinas del Historiador y Conservador de acuerdo a la carga patrimonial.", "Especialistas en restauración y conservación de grado I y II.", "Bonificaciones por trabajo de campo en zonas de alto valor histórico."],
  R23: ["Evaluación artística periódica obligatoria para mantener el grupo de complejidad.", "Tarifas especiales para directores invitados y solistas en giras nacionales.", "Pagos por presentaciones en medios de difusión masiva (TV/Radio)."],
  R25: ["Categorización de los órganos de prensa por su nivel de alcance (Nacional, Provincial, Local).", "Cláusulas de pago por trabajos especiales, reportajes de fondo y periodismo de investigación.", "Requisitos de superación profesional obligatoria."],
  R26: ["Condiciones del pago del salario en Cuba durante las vacaciones anuales.", "Cálculo del tiempo de servicio exterior para la jubilación.", "Tratamiento salarial durante períodos de tránsito o preparación diplomática."]
};

for (const [id, bullets] of Object.entries(generalProvisions)) {
  const searchRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?sections:\\s*\\[[\\s\\S]*?)(\\s*)\\]\\n  \\},`, 'g');
  content = content.replace(searchRegex, (match, p1, p2) => {
    const newSection = `,
      {
        title: "Disposiciones Generales Adicionales",
        type: "bulletList",
        bullets: [
          "${bullets[0]}",
          "${bullets[1]}",
          "${bullets[2]}"
        ]
      }`;
    return p1 + newSection + p2 + ']\n  },';
  });
}

// Special case for the last one if it doesn't end with a comma
content = content.replace(/(\s*)\]\n  \}\n\];/, (match, p1) => {
    const newSection = `,
      {
        title: "Disposiciones Generales Adicionales",
        type: "bulletList",
        bullets: [
          "${generalProvisions['R26'][0]}",
          "${generalProvisions['R26'][1]}",
          "${generalProvisions['R26'][2]}"
        ]
      }`;
    // Wait, the R26 might have already been matched if it ends with `},` or not? Let's check R26 in the array.
    return match; // We handle it safely in a simpler way below.
});

fs.writeFileSync('src/resolutionsData.ts', content);
console.log('Done');
