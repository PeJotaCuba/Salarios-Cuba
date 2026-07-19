const fs = require('fs');

let content = fs.readFileSync('src/resolutionsData.ts', 'utf8');

const r21 = `  {
    id: "R21",
    title: "Escuelas Ramales y Capacitación",
    subtitle: "Sueldos de directivos y docentes en escuelas de capacitación de OACEs",
    gaceta: "Resolución 21/2026",
    iconName: "GraduationCap",
    color: "indigo",
    summary: "Actualiza el sistema salarial para los trabajadores de las escuelas ramales y centros de capacitación subordinadas a organismos de la Administración Central del Estado.",
    sections: [
      {
        title: "Cuadros Docentes de Escuelas Ramales (Según Categoría)",
        type: "table",
        columns: ["Cargo", "Categoría A (Grupo)", "Categoría B (Grupo)", "Categoría C (Grupo)"],
        rows: [
          ["Director", "Grupo XXVI", "Grupo XXIV", "Grupo XXII"],
          ["Subdirector", "Grupo XXV", "Grupo XXIII", "Grupo XXI"],
          ["Jefe de Departamento", "Grupo XXIV", "Grupo XXII", "Grupo XX"],
          ["Secretario Docente", "Grupo XXIV", "Grupo XXII", "Grupo XX"]
        ]
      },
      {
        title: "Docentes de Centros de Categoría B y C",
        type: "table",
        columns: ["Cargo", "Grupo de Complejidad"],
        rows: [
          ["Metodólogo, Inspector y Coordinador", "Grupo XVIII"],
          ["Profesor con Nivel Superior", "Grupo XVII"],
          ["Profesor con Nivel Medio Superior", "Grupo XIII"],
          ["Profesor no titulado del Ministerio de Cultura", "Grupo XI"]
        ]
      },
      {
        title: "Disposiciones Generales Adicionales",
        type: "bulletList",
        bullets: [
          "El personal docente de nivel superior en preparación se ubica excepcionalmente en Grupo XIV.",
          "El pago por años de servicio prestados acumula hasta 3,000 pesos a los 30 años (1,500 para no docentes).",
          "A partir de 30 años se incrementan 400 pesos mensuales por cada dos años adicionales de servicio docente."
        ]
      }
    ]
  },
`;

const r24 = `  {
    id: "R24",
    title: "Dotaciones de Embarcaciones y Buques",
    subtitle: "Escala para el personal de travesía marítima, cabotaje y puertos",
    gaceta: "Resolución 24/2026",
    iconName: "MapPin",
    color: "cyan",
    summary: "Establece los salarios del personal que forma parte de las dotaciones de buques de travesía internacional, de cabotaje, practicaje y aguas interiores.",
    sections: [
      {
        title: "Grupo I: Embarcaciones por Arqueo Bruto y Caballos de Fuerza (BHP)",
        description: "Clasificación de embarcaciones de carga y pasaje de alta capacidad (Clases I a IX).",
        type: "table",
        columns: ["Cargo", "Clase I (Grupo)", "Clase IV (Grupo)", "Clase IX (Grupo)"],
        rows: [
          ["Capitán", "Grupo XXII", "Grupo XXV", "Grupo XXVIII"],
          ["Primer Oficial de Puente", "Grupo XXI", "Grupo XXIV", "Grupo XXVII"],
          ["Jefe de Máquinas", "Grupo XXI", "Grupo XXIV", "Grupo XXVII"],
          ["Contramaestre", "Grupo XVI", "Grupo XIX", "Grupo XXII"],
          ["Patrón", "Grupo XVII", "Grupo XX", " - "]
        ]
      },
      {
        title: "Grupo II: Dragas y Embarcaciones de Construcción",
        type: "table",
        columns: ["Cargo", "Clase I (Grupo)", "Clase III (Grupo)", "Clase V (Grupo)"],
        rows: [
          ["Capitán (Succión)", "Grupo XXI", "Grupo XXIII", "Grupo XXV"],
          ["Jefe de Máquinas", "Grupo XX", "Grupo XXII", "Grupo XXIV"],
          ["Contramaestre", "Grupo XV", "Grupo XVII", "Grupo XIX"]
        ]
      },
      {
        title: "Disposiciones Generales Adicionales",
        type: "bulletList",
        bullets: [
          "Los ministerios de FAR y MININT adecuarán estas regulaciones para sus embarcaciones.",
          "Regula los salarios para lanchas de pasaje, servicios de puerto, y saneamiento de bahías.",
          "El pago de la Contribución Especial a la Seguridad Social se realiza de acuerdo a las disposiciones vigentes."
        ]
      }
    ]
  },
`;

// Insert them after R20 for R21, and after R23 for R24. 
// Or just append them at the end of the array.
content = content.replace(/\];\s*$/, r21 + r24 + '];\n');

fs.writeFileSync('src/resolutionsData.ts', content);
console.log('Added missing resolutions.');
