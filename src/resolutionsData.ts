/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ResolutionSection {
  title: string;
  description?: string;
  type: "text" | "table" | "grid" | "bulletList";
  columns?: string[];
  rows?: any[][];
  bullets?: string[];
  content?: string;
}

export interface ResolutionData {
  id: string;
  title: string;
  subtitle: string;
  gaceta: string;
  iconName: string;
  color: string; // Tailwind color name for visual accenting
  summary: string;
  sections: ResolutionSection[];
}

export const RESOLUTIONS_LIST: ResolutionData[] = [
  {
    id: "R15",
    title: "Escala Salarial General y Regímenes",
    subtitle: "Escala unificada de 32 grupos, pagos adicionales por CLA, turnos y maestrías",
    gaceta: "Resolución 15/2026",
    iconName: "Layers",
    color: "blue",
    summary: "Detalla la escala de 32 grupos de complejidad para regímenes de 44 y 40 horas, la ubicación de las categorías ocupacionales, salarios de recién graduados, y bonificaciones por condiciones anormales, maestrías, doctorados y turnos.",
    sections: [
      {
        title: "Escala Salarial General Única (32 Grupos de Complejidad)",
        description: "Esta tabla detalla las cuantías básicas de salario mensual fijadas para cada grupo de la escala de complejidad, tanto para la jornada de 44 horas semanales como para la jornada reducida de 40 horas semanales.",
        type: "table",
        columns: ["Grupo de Complejidad", "Salario 44h (CUP)", "Salario 40h (CUP)"],
        rows: [
          ["Grupo I", "3,210", "2,920"],
          ["Grupo II", "3,365", "3,060"],
          ["Grupo III", "3,515", "3,195"],
          ["Grupo IV", "3,700", "3,365"],
          ["Grupo V", "3,885", "3,530"],
          ["Grupo VI", "4,065", "3,695"],
          ["Grupo VII", "4,295", "3,905"],
          ["Grupo VIII", "4,525", "4,115"],
          ["Grupo IX", "4,755", "4,325"],
          ["Grupo X", "4,985", "4,535"],
          ["Grupo XI", "5,210", "4,735"],
          ["Grupo XII", "5,520", "5,020"],
          ["Grupo XIII", "5,825", "5,295"],
          ["Grupo XIV", "6,130", "5,575"],
          ["Grupo XV", "6,435", "5,850"],
          ["Grupo XVI", "6,740", "6,130"],
          ["Grupo XVII", "7,045", "6,405"],
          ["Grupo XVIII", "7,350", "6,685"],
          ["Grupo XIX", "7,735", "7,035"],
          ["Grupo XX", "8,115", "7,380"],
          ["Grupo XXI", "8,500", "7,730"],
          ["Grupo XXII", "8,880", "8,075"],
          ["Grupo XXIII", "9,265", "8,425"],
          ["Grupo XXIV", "9,645", "8,770"],
          ["Grupo XXV", "10,105", "9,190"],
          ["Grupo XXVI", "10,640", "9,675"],
          ["Grupo XXVII", "11,175", "10,160"],
          ["Grupo XXVIII", "11,710", "10,645"],
          ["Grupo XXIX", "12,245", "11,135"],
          ["Grupo XXX", "13,010", "11,830"],
          ["Grupo XXXI", "13,770", "12,520"],
          ["Grupo XXXII", "14,535", "13,215"]
        ]
      },
      {
        title: "Ubicación de Categorías Ocupacionales en la Escala",
        type: "table",
        columns: ["Categoría Ocupacional", "Ubicación en Grupos de Complejidad"],
        rows: [
          ["Trabajadores de Servicios", "Desde Grupo I hasta Grupo VI inclusive"],
          ["Operarios", "Desde Grupo II hasta Grupo VIII inclusive"],
          ["Trabajadores Administrativos", "Desde Grupo III hasta Grupo VII inclusive"],
          ["Personal Técnico", "Desde Grupo VII hasta Grupo XXV inclusive"],
          ["Cuadros de Dirección", "Desde Grupo XVII hasta Grupo XXII inclusive"]
        ]
      },
      {
        title: "Salarios para Recién Graduados en Período de Servicio Social (Sin Ocupar Cargo)",
        type: "table",
        columns: ["Nivel de Escolaridad", "Grupo Asignado", "Salario 44h (CUP)", "Salario 40h (CUP)"],
        rows: [
          ["Nivel Medio Superior", "Grupo VII", "4,295", "3,905"],
          ["Nivel Técnico Superior", "Grupo XII", "5,520", "5,020"],
          ["Nivel Superior (Universitario)", "Grupo XIII", "5,825", "5,295"]
        ]
      },
      {
        title: "Pagos Adicionales Mensuales de Aplicación General",
        type: "bulletList",
        bullets: [
          "Por ostentar categoría de Máster o Especialidad equivalente (siempre que se desempeñe un cargo que exija nivel superior): 440 pesos mensuales.",
          "Por ostentar grado científico de Doctor (siempre que se desempeñe un cargo que exija nivel superior): 825 pesos mensuales.",
          "Por condiciones laborales anormales (CLA) según exposición por hora: Grupo I (0.60 CUP), Grupo II (1.15 CUP), Grupo III (1.75 CUP), Grupo IV (2.30 CUP), Grupo V (2.90 CUP).",
          "Por laborar en Turnos Nocturnos (tarifa peso/hora): De 7:00 PM a 11:00 PM (0.60 CUP), de 11:00 PM a 7:00 AM (1.15 CUP).",
          "Coeficiente de interés económico-social del 30% del salario básico para trabajadores que laboran en el municipio de Caimanera (Guantánamo).",
          "Para profesionales certificados internacionalmente: 685 pesos mensuales."
        ]
      },
      {
        title: "Grupos de Complejidad para Cargos Específicos de Soporte",
        type: "table",
        columns: ["Cargo", "Nivel / Clasificación", "Grupo de Complejidad Asignado"],
        rows: [
          ["Secretaria Ejecutiva", "Asiste a Directivos Superiores", "Grupo XI"],
          ["Secretaria Ejecutiva", "Asiste a Directivos y Ejecutivos", "Grupo X"],
          ["Encargado de Almacén", "Clasificación de Almacén A", "Grupo VII"],
          ["Encargado de Almacén", "Clasificación de Almacén B", "Grupo VI"],
          ["Encargado de Almacén", "Clasificación de Almacén C", "Grupo V"]
        ]
      }
    ]
  },
  {
    id: "R12",
    title: "Deporte de Alto Rendimiento y Béisbol",
    subtitle: "Ingresos básicos de atletas, Serie Nacional de Béisbol y Liga Élite",
    gaceta: "Resolución 12/2026",
    iconName: "Trophy",
    color: "amber",
    summary: "Establece los ingresos básicos mensuales de los atletas de alto rendimiento de preselecciones nacionales, Serie Nacional de Béisbol, así como estímulos adicionales y premios por resultados individuales o colectivos anuales.",
    sections: [
      {
        title: "Ingresos Básicos Mensuales por Categoría Deportiva",
        type: "table",
        columns: ["Categoría", "Resultados Obtenidos y Estatus", "Ingreso Básico Mensual (CUP)"],
        rows: [
          ["Categoría 1", "Medallista Olímpico", "5,590"],
          ["Categoría 2", "Medallista Mundial", "4,845"],
          ["Categoría 3", "Medallista Panamericano", "4,475"],
          ["Categoría 4", "Medallista Centroamericano", "4,095"],
          ["Categoría 5", "Miembro de la Preselección Nacional y Serie Nacional de Béisbol", "3,725"],
          ["Categoría 6", "Reserva de la Preselección Nacional y Serie Nacional de Béisbol", "3,210"]
        ]
      },
      {
        title: "Ingresos Adicionales Mensuales por Medallas Obtenidas (Multimedallistas Activos)",
        description: "Montos mensuales acumulativos por cada medalla obtenida en eventos activos. El atleta guía de personas con discapacidad recibe el 50% de estas cuantías.",
        type: "table",
        columns: ["Tipo de Evento", "Oro (CUP)", "Plata (CUP)", "Bronce (CUP)"],
        rows: [
          ["Juegos Olímpicos", "10,000", "6,500", "5,000"],
          ["Campeonatos Mundiales", "5,000", "3,500", "2,500"],
          ["Juegos Panamericanos", "3,500", "2,500", "1,500"],
          ["Juegos Centroamericanos y del Caribe", "2,500", "1,500", "1,000"]
        ]
      },
      {
        title: "Premios Anuales de la Serie Nacional de Béisbol (Logros Individuales)",
        type: "table",
        columns: ["Condición", "Requisitos", "Premio Anual (CUP)"],
        rows: [
          ["Jugador Regular", "Participa en el 70% de los juegos celebrados por su equipo", "5,000"],
          ["Lanzadores Abridores", "Lanzar al menos 120 innings y ganar un mínimo de 10 juegos", "5,000"],
          ["Lanzadores Relevistas", "Lanzar al menos en 32 juegos y de ellos salvar mínimo 10 partidos", "5,000"],
          ["Líderes Individuales", "Líderes de bateo, lanzadores, jonrones, impulsadas, anotadas, bases robadas, MVP o novato del año", "1,000 por indicador"]
        ]
      },
      {
        title: "Premios Colectivos Anuales de la Serie Nacional",
        type: "table",
        columns: ["Resultado de Equipo", "Premio Colectivo a Repartir (CUP)"],
        rows: [
          ["Equipo Campeón", "65,000"],
          ["Equipo Subcampeón (Segundo Lugar)", "45,000"],
          ["Equipo Tercer Lugar", "30,000"]
        ]
      },
      {
        title: "Estímulos Adicionales y Liga Élite",
        type: "bulletList",
        bullets: [
          "Durante la Serie Nacional, se otorga un estímulo mensual del 40% del salario básico para atletas regulares y del 30% para suplentes/reservas, evaluando disciplina y rendimiento.",
          "Para la Liga Élite de Béisbol se aprueba un estímulo adicional mensual: Atletas (+5,000 CUP), Director (+3,000 CUP), Entrenadores (+2,000 CUP), Médicos (+2,000 CUP), Fisioterapeuta (+2,000 CUP), Psicólogo (+2,000 CUP) y Delegado (+2,000 CUP)."
        ]
      }
    ]
  },
  {
    id: "R14",
    title: "Salario Mínimo Nacional",
    subtitle: "Fijación del salario mínimo del país y tarifas horarias mínimas",
    gaceta: "Resolución 14/2026",
    iconName: "TrendingUp",
    color: "red",
    summary: "Fija el salario mínimo nacional de la escala del país para el sector presupuestado y las bases para los trabajadores contratados por horas.",
    sections: [
      {
        title: "Nuevas Cuantías Mínimas Legales",
        type: "grid",
        rows: [
          ["Salario Mínimo Mensual", "3,210 pesos mensuales", "Establece el nivel base retributivo para el Grupo I de complejidad salarial en régimen de 44 horas semanales."],
          ["Tarifa Horaria Mínima", "16 pesos con 84 centavos", "Corresponde al valor mínimo por hora para jornadas parciales o contratos por tarifas horarias."]
        ]
      },
      {
        title: "Ámbito de Aplicación e Impacto",
        type: "bulletList",
        bullets: [
          "Aplica obligatoriamente a todas las entidades del sector presupuestado cubano.",
          "Sustituye el antiguo sueldo mínimo de 2,100 CUP, lo que representa un aumento directo del 52.8% en la base.",
          "Establece una base superior que rediseña toda la escala salarial del país en busca de proteger el poder adquisitivo frente a las transformaciones económicas."
        ]
      }
    ]
  },
  {
    id: "R16",
    title: "Órganos Locales del Poder Popular",
    subtitle: "Salarios para cuadros locales de las administraciones provinciales y municipales",
    gaceta: "Resolución 16/2026",
    iconName: "MapPin",
    color: "indigo",
    summary: "Actualiza el sistema salarial de los cuadros y técnicos en los órganos locales del Poder Popular en las provincias, municipios de categoría I y II, distritos, supervisores e inspectores.",
    sections: [
      {
        title: "Cuadros de las Administraciones Provinciales",
        type: "table",
        columns: ["Cargos de Dirección", "La Habana (Grupo)", "Otras Provincias (Grupo)"],
        rows: [
          ["Vicegobernador", "Grupo XXX", "Grupo XXIX"],
          ["Jefe de Secretaría / Director General / Coordinador de Programas", "Grupo XXIX", "Grupo XXVIII"],
          ["Subdirector General / Director", "Grupo XXVIII", "Grupo XXVII"],
          ["Subdirector / Jefe de Dpto. Independiente / 2do Jefe Secretaría", "Grupo XXVII", "Grupo XXVI"],
          ["Secretario Comisión Provincial Plan Turquino", "-", "Grupo XXVI"],
          ["Jefe de Departamento / Sección Independiente / Jefe de Centro o Unidad", "Grupo XXVI", "Grupo XXV"],
          ["Subdirector de Unidad de Aseguramiento / Jefe Sección", "Grupo XXV", "Grupo XXIV"],
          ["Jefe de Puesto de Dirección", "Grupo XXIV", "Grupo XXIII"]
        ]
      },
      {
        title: "Cuadros de las Administraciones Municipales",
        description: "Los salarios varían según la categoría de desarrollo (I o II) otorgada al municipio.",
        type: "table",
        columns: ["Cargos", "Municipio Categoría I (Grupo)", "Municipio Categoría II (Grupo)"],
        rows: [
          ["Vice Intendente / Secretario de Administración Municipal / Director Gral", "Grupo XXVI", "Grupo XXV"],
          ["Subdirector General / Director", "Grupo XXV", "Grupo XXIV"],
          ["Subdirector / Jefe de Departamento Independiente", "Grupo XXIV", "Grupo XXIII"],
          ["Jefe de Secretaría de Dirección General", "Grupo XXIII", "Grupo XXII"],
          ["Jefe de Departamento / Jefe de Centro o Unidad / Jefe de Sección Indep.", "Grupo XXIII", "Grupo XXII"]
        ]
      },
      {
        title: "Actividad de Supervisión e Inspección Local (Salarios Fijos)",
        type: "table",
        columns: ["Actividad", "Cargo", "La Habana (CUP)", "Otras Provincias (CUP)"],
        rows: [
          ["Supervisión Provincial", "Jefe de Grupo", "11,980", "11,440"],
          ["Supervisión Provincial", "Supervisor Provincial", "9,265", "9,265"],
          ["Supervisión Municipal", "Jefe de Grupo", "10,370", "9,875"],
          ["Supervisión Municipal", "Supervisor Municipal", "8,880", "8,880"],
          ["Inspección Provincial", "Director", "Grupo XXVIII", "Grupo XXVII"],
          ["Inspección Provincial", "Inspector Provincial", "Grupo XX", "Grupo XX"],
          ["Inspección Municipal", "Director", "Grupo XXV", "Grupo XXIV"],
          ["Inspección Municipal", "Inspector Municipal", "Grupo XIX", "Grupo XIX"]
        ]
      }
    ]
  },
  {
    id: "R17",
    title: "Sistema de Salud Pública",
    subtitle: "Escala para médicos, estomatólogos, enfermeros, antigüedad y turnicidad",
    gaceta: "Resolución 17/2026",
    iconName: "HeartPulse",
    color: "teal",
    summary: "Actualiza de manera integral el sistema salarial de los profesionales, técnicos y personal de apoyo del Sistema Nacional de Salud. Regula los pagos por antigüedad (años de servicio), tarifas nocturnas especiales y bonificaciones por condiciones de alta demanda asistencial.",
    sections: [
      {
        title: "Escala Salarial por Cargos Profesionales de Salud",
        type: "table",
        columns: ["Cargos", "Grupo de Complejidad"],
        rows: [
          ["Médico Especialista de II Grado / Cirujano Maxilofacial de II Grado / Con dos especialidades", "Grupo XXII"],
          ["Médico Especialista de I Grado / Médico Especialista Residente / Cirujano Maxilofacial de I Grado", "Grupo XXI"],
          ["Estomatólogo Especialista de I Grado / Estomatólogo Especialista Residente", "Grupo XX"],
          ["Médico Residente", "Grupo XIX"],
          ["Estomatólogo Residente", "Grupo XVIII"],
          ["Médico No Especializado (Recién Graduado)", "Grupo XVII"],
          ["Estomatólogo No Especializado (Recién Graduado)", "Grupo XVI"],
          ["Enfermero Especialista", "Grupo XVII"],
          ["Enfermero Superior", "Grupo XVI"],
          ["Enfermero Técnico Superior", "Grupo XIV"],
          ["Enfermero Técnico", "Grupo XIII"],
          ["Enfermero Básico", "Grupo IX"]
        ]
      },
      {
        title: "Pagos Adicionales por Años de Servicios Prestados (Mensual)",
        description: "Estimula la permanencia y el servicio acumulado en el sector.",
        type: "table",
        columns: ["Años de Servicio", "Médicos, Enfermeros y Licenciados (CUP)", "Operarios y Personal de Servicio Vital (CUP)"],
        rows: [
          ["5 años", "1,000", "500"],
          ["10 años", "1,400", "700"],
          ["15 años", "1,800", "900"],
          ["20 años", "2,200", "1,100"],
          ["25 años", "2,600", "1,300"],
          ["30 años", "3,000", "1,500"],
          ["Más de 30 años", "Añadir +400 cada dos años", "Añadir +200 cada dos años"]
        ]
      },
      {
        title: "Tarifas Horarias Especiales por Trabajo Nocturno (7:00 PM a 7:00 AM)",
        type: "table",
        columns: ["Funciones del Personal", "Tarifa Horaria (Pesos/Hora)"],
        rows: [
          ["Médicos y Estomatólogos", "50.00"],
          ["Personal de Enfermería", "40.00"],
          ["Tecnólogos, otros licenciados y técnicos de la salud", "30.00"]
        ]
      },
      {
        title: "Especialidades de Alta Demanda (Anestesiología, Terapia, Neonatología)",
        type: "bulletList",
        bullets: [
          "Tarifa adicional de 100 CUP por hora en horario nocturno (7:00 PM a 7:00 AM) para médicos de estas especialidades.",
          "Pago por alto desempeño de 20.00 CUP por hora, en correspondencia con las condiciones de exigencia de estas unidades críticas."
        ]
      },
      {
        title: "Condiciones Especiales de Trabajo (Mayor Demanda Asistencial o Esfuerzo)",
        description: "Tarifas horarias según el Grupo de Condiciones Especiales (I al V) en los que se dividen las instituciones (ej. salas de terapia, cuidados críticos, urgencias):",
        type: "table",
        columns: ["Grupo de Condiciones", "Médicos y Estomatólogos (CUP/h)", "Enfermeros, Psicólogos y Tecnólogos (CUP/h)"],
        rows: [
          ["Grupo I", "3.00", "1.20"],
          ["Grupo II", "4.50", "2.30"],
          ["Grupo III", "6.00", "3.50"],
          ["Grupo IV", "7.80", "Consulte escalas"],
          ["Grupo V", "9.00", "Consulte escalas"]
        ]
      }
    ]
  },
  {
    id: "R18",
    title: "Educación General y Media",
    subtitle: "Ubicación de maestros y educadoras, categorías docentes y antigüedad",
    gaceta: "Resolución 18/2026",
    iconName: "GraduationCap",
    color: "orange",
    summary: "Modifica y unifica la organización salarial del sistema de educación general y media. Regula los salarios de maestros, profesores, auxiliares pedagógicas, así como estímulos por categorías docentes y antigüedad acumulada.",
    sections: [
      {
        title: "Ubicación Salarial por Cargos Docentes directos",
        type: "table",
        columns: ["Cargos", "Nivel Superior (Grupo)", "Nivel Técnico Superior (Grupo)", "Nivel Medio (Grupo)"],
        rows: [
          ["Educadora, Maestro, Profesor, Psicopedagogo, Psicólogo, Logopeda", "Grupo XIX", "Grupo XVI", "Grupo XIV"],
          ["Bibliotecario Escolar, Auxiliar Técnico de la Docencia", "Grupo XV", "-", "Grupo XII"],
          ["Profesor No Titulado, Instructor de Deporte", "-", "-", "Grupo XII"],
          ["Auxiliar Pedagógica, Asistente de Trabajo Educativo", "Grado 12: Grupo IX", "-", "Grado 9: Grupo VIII"]
        ]
      },
      {
        title: "Pago Adicional Mensual por Categorías Docentes",
        type: "table",
        columns: ["Categoría Docente", "Cuantía Mensual (CUP)"],
        rows: [
          ["Docente Experto", "750"],
          ["Docente Especialista Principal", "500"],
          ["Docente Especialista", "250"]
        ]
      },
      {
        title: "Pago Adicional por Años de Servicios Prestados (Antigüedad mensual)",
        type: "table",
        columns: ["Años de Servicio", "Docentes e Investigadores (CUP)", "Resto de los Trabajadores (CUP)"],
        rows: [
          ["5 años", "1,000", "500"],
          ["10 años", "1,400", "700"],
          ["15 años", "1,800", "900"],
          ["20 años", "2,200", "1,100"],
          ["25 años", "2,600", "1,300"],
          ["30 años", "3,000", "1,500"],
          ["Más de 30 años", "Añadir +400 cada dos años", "Añadir +200 cada dos años"]
        ]
      },
      {
        title: "Bonificaciones Mensuales de Centros Educacionales",
        type: "bulletList",
        bullets: [
          "Profesores y bibliotecarios en Institutos Preuniversitarios Vocacionales de Ciencias Exactas (IPVCE) y escuelas pedagógicas: +1,000 pesos mensuales.",
          "Profesores en centros de enseñanza técnica y artística, escuelas militares Camilo Cienfuegos, EIDE y ESPA: +100 pesos mensuales.",
          "Maestros y administradores que trabajan en centros internos de Educación Especial de Conducta I y II: +70 pesos mensuales.",
          "Docentes en círculos infantiles mixtos, hogares de menores sin amparo familiar y escuelas de limitados físicos de La Habana, Villa Clara y Santiago: Docentes (+200 CUP), No docentes (+150 CUP).",
          "Guardia educativa nocturna (matrícula interna) entre 7:00 PM y 7:00 AM: +5.00 CUP por hora."
        ]
      }
    ]
  },
  {
    id: "R19",
    title: "Educación Superior (Universidades)",
    subtitle: "Escala salarial para profesores universitarios y cuadros directivos",
    gaceta: "Resolución 19/2026",
    iconName: "BookOpen",
    color: "cyan",
    summary: "Regula el tratamiento salarial del personal docente, de investigación, auxiliares técnicos y cuadros directivos en las Universidades de Cuba adscriptas a todos los ministerios.",
    sections: [
      {
        title: "Cargos Técnicos Universitarios Vinculados a la Docencia",
        type: "table",
        columns: ["Cargos Docentes e Investigadores", "Grupo de Complejidad Asignado"],
        rows: [
          ["Profesor Titular", "Grupo XXII"],
          ["Profesor Auxiliar", "Grupo XXI"],
          ["Profesor Asistente", "Grupo XX"],
          ["Instructor", "Grupo XIX"],
          ["Auxiliar Técnico de la Docencia (Nivel Superior)", "Grupo XV"],
          ["Auxiliar Técnico de la Docencia (Nivel Medio Superior)", "Grupo XII"]
        ]
      },
      {
        title: "Cargos Especiales de Gestión Docente",
        description: "Salario asignado por ostentar responsabilidades directivas docentes (como Metodólogo, Secretario Docente o Profesor Principal):",
        type: "table",
        columns: ["Cargo y Rango de Categoría Docente", "Grupo de Complejidad Asignado"],
        rows: [
          ["Metodólogo, Sec. Docente, Prof. Principal - Titular", "Grupo XXIII"],
          ["Metodólogo, Sec. Docente, Prof. Principal - Auxiliar", "Grupo XXII"],
          ["Metodólogo, Sec. Docente, Prof. Principal - Asistente", "Grupo XXI"],
          ["Metodólogo, Sec. Docente, Prof. Principal - Instructor", "Grupo XX"]
        ]
      },
      {
        title: "Cuadros de las Instituciones de Educación Superior",
        description: "El salario de los directivos depende del Grupo del Centro Universitario (Grupo I: Mayor complejidad, Grupo II: Menor complejidad).",
        type: "table",
        columns: ["Cargo Directivo", "Grupo I (Complejidad)", "Grupo II (Complejidad)"],
        rows: [
          ["Rector", "Grupo XXVIII", "Grupo XXVII"],
          ["Vicerrector Primero", "Grupo XXVII", "Grupo XXVI"],
          ["Vicerrector / Decano / Secretario General / Dir. General de Universidades", "Grupo XXVI", "Grupo XXV"],
          ["Vicedecano / Director de CUM o Filial Universitaria Municipal", "Grupo XXV", "Grupo XXIV"],
          ["Subdirector / Jefe de Departamento Docente", "Grupo XXIV", "Grupo XXIII"],
          ["Segundo Jefe de Departamento Docente / Jefe de Cátedra", "Grupo XXIII", "Grupo XXII"],
          ["Jefe de Puesto de Dirección", "Grupo XXII", "Grupo XXI"]
        ]
      },
      {
        title: "Antigüedad y Recién Graduados en Universidades",
        type: "bulletList",
        bullets: [
          "Mantiene la escala acumulativa mensual por años de servicio prestados para docentes e investigadores: 5 años (1000 CUP), 10 años (1400 CUP), 15 años (1800 CUP), 20 años (2200 CUP), 25 años (2600 CUP) y 30 años (3000 CUP).",
          "Los recién graduados de nivel superior ubicados excepcionalmente como profesores en universidades perciben el salario del Grupo XIV durante el período de preparación.",
          "Se aprueba el pago adicional por sobrecarga de trabajo docente para profesores titulares y auxiliares según las horas lectivas extraordinarias impartidas."
        ]
      }
    ]
  },
  {
    id: "R20",
    title: "Ciencia, Tecnología e Innovación (CITMA)",
    subtitle: "Salarios para investigadores, tecnólogos y biotecnología de alta tecnología",
    gaceta: "Resolución 20/2026",
    iconName: "Atom",
    color: "purple",
    summary: "Establece el sistema salarial para los investigadores, tecnólogos, innovadores y cuadros de las entidades de Ciencia, Tecnología e Innovación, así como la industria biotecnológica y farmacéutica nacional.",
    sections: [
      {
        title: "Cargos de Dirección (Ciencia y Tecnología)",
        type: "table",
        columns: ["Cargos de Dirección - Centros de Investigación", "Grupo de Complejidad Asignado"],
        rows: [
          ["Director o Director General", "Grupo XXVI"],
          ["Segundo nivel de dirección", "Grupo XXV"],
          ["Tercer nivel de dirección", "Grupo XXIV"],
          ["Cuarto nivel de dirección", "Grupo XXIII"]
        ]
      },
      {
        title: "Escala para Cargos de Investigación (Técnicos)",
        type: "table",
        columns: ["Cargo Científico", "Grupo de Complejidad Asignado"],
        rows: [
          ["Investigador Titular", "Grupo XXI"],
          ["Investigador Auxiliar", "Grupo XX"],
          ["Investigador Agregado", "Grupo XIX"],
          ["Aspirante a Investigador", "Grupo XVIII"]
        ]
      },
      {
        title: "Escala para Tecnólogos e Innovadores (Alta Tecnología)",
        type: "table",
        columns: ["Cargo Tecnológico", "Grupo de Complejidad Asignado"],
        rows: [
          ["Tecnólogo de Primer Nivel", "Grupo XXI"],
          ["Tecnólogo de Segundo Nivel", "Grupo XX"],
          ["Tecnólogo de Tercer Nivel", "Grupo XIX"],
          ["Técnico Innovador de Primer Nivel", "Grupo XVII"],
          ["Técnico Innovador de Segundo Nivel", "Grupo XVI"]
        ]
      },
      {
        title: "Escala para la Industria Biotecnológica y Farmacéutica",
        type: "table",
        columns: ["Cargo en Biotecnología", "Grupo de Complejidad Asignado"],
        rows: [
          ["Biotecnólogo Superior I nivel", "Grupo XXII"],
          ["Biotecnólogo Superior II nivel", "Grupo XXI"],
          ["Biotecnólogo Superior III nivel", "Grupo XX"],
          ["Especialista en Procesos de Alta Tecnología I", "Grupo XX"],
          ["Especialista en Procesos de Alta Tecnología II", "Grupo XVIII"],
          ["Especialista en Procesos de Alta Tecnología III", "Grupo XVII"]
        ]
      }
    ]
  },
  {
    id: "R22",
    title: "Sector de la Cultura e Historiador",
    subtitle: "Ubicación para directores de bibliotecas, galerías, museos y teatros",
    gaceta: "Resolución 22/2026",
    iconName: "Palette",
    color: "pink",
    summary: "Actualiza el sistema salarial para cuadros de instituciones culturales categorizadas y centros culturales pertenecientes a la Oficina del Historiador de La Habana.",
    sections: [
      {
        title: "Ubicación de Dirección de Bibliotecas y Galerías",
        type: "table",
        columns: ["Cargo", "Categoría del Centro", "Grupo de Complejidad"],
        rows: [
          ["Director de Biblioteca", "Categoría I", "Grupo XXII"],
          ["Director de Biblioteca", "Categoría II", "Grupo XXI"],
          ["Subdirector de Biblioteca", "Categoría I o II", "Grupo XXI"],
          ["Director de Galería", "Categoría I", "Grupo XX"],
          ["Director de Galería", "Categoría II", "Grupo XIX"],
          ["Director de Galería", "Categoría III", "Grupo XVIII"]
        ]
      },
      {
        title: "Dirección de Museos, Salas Teatrales y Cinematográficas",
        type: "table",
        columns: ["Tipo de Institución", "Clasificación de Categoría", "Grupo de Complejidad (Director)", "Grupo de Complejidad (Subdirector)"],
        rows: [
          ["Complejos de Museo", "Categoría Especial / Categoría I", "Grupo XXIV / XXIII", "Grupo XXIII / XXII"],
          ["Museos Generales", "Categoría Especial / Categoría I", "Grupo XXIII / XXII", "Grupo XXII / XXI"],
          ["Museos Generales", "Categoría II / Categoría III", "Grupo XXI / XX", "Grupo XX / -"],
          ["Salas Teatrales", "Categoría Especial / Categoría I", "Grupo XXV / XX", "Grupo XXIV / XIX"],
          ["Salas Teatrales", "Categoría II / Categoría III", "Grupo XIX / XVIII", "Grupo XVIII / XVII"],
          ["Salas Cinematográficas", "Categoría I / Categoría II", "Grupo XVIII / XVII", "- / -"]
        ]
      },
      {
        title: "Centros Culturales de la Oficina del Historiador de la Ciudad de La Habana",
        type: "table",
        columns: ["Centro Cultural", "Cargo", "Grupo de Complejidad"],
        rows: [
          ["Jardín \"Quinta de Los Molinos\"", "Director", "Grupo XXIII"],
          ["Casa de las Tejas Verdes", "Director", "Grupo XXIII"],
          ["Centro de Referencia para la Adolescencia de La Habana Vieja", "Director", "Grupo XXIII"],
          ["Centro Hispanoamericano de la Cultura", "Director", "Grupo XXIII"],
          ["Palacio Segundo Cabo", "Director", "Grupo XXIII"],
          ["Habana \"Espacios Creativos\"", "Director", "Grupo XXIII"],
          ["Casa de Artes y Tradiciones Chinas", "Director", "Grupo XXII"]
        ]
      }
    ]
  },
  {
    id: "R23",
    title: "Artistas y Creadores Subvencionados",
    subtitle: "Grupos salariales para músicos de sinfónicas, coros, teatro, danza y circo",
    gaceta: "Resolución 23/2026",
    iconName: "Music",
    color: "emerald",
    summary: "Regula las tarifas de remuneración de los artistas subvencionados en Cuba, pertenecientes a orquestas sinfónicas, coros nacionales, agrupaciones de música popular, agrupaciones teatrales, danza nacional, ballet clásico, folklore y circo.",
    sections: [
      {
        title: "Orquesta Sinfónica Nacional (Remuneraciones)",
        type: "table",
        columns: ["Cargo", "Nivel de Evaluación Artística", "Grupo de Complejidad"],
        rows: [
          ["Director Titular", "Sujeto a Evaluación", "Grupo XXV"],
          ["Director Adjunto", "Sujeto a Evaluación", "Grupo XXIV"],
          ["Concertino", "Sujeto a Evaluación", "Grupo XXIII"],
          ["Solista de Orquesta y Banda", "Sujeto a Evaluación", "Grupo XXI"],
          ["Músico Instrumentista", "Nivel 1", "Grupo XIX"],
          ["Músico Instrumentista", "Nivel 2", "Grupo XVIII"],
          ["Músico Instrumentista", "Nivel 3", "Grupo XVII"]
        ]
      },
      {
        title: "Coro Nacional de Cuba",
        type: "table",
        columns: ["Cargos", "Nivel de Evaluación Artística", "Grupo de Complejidad Asignado"],
        rows: [
          ["Director de Coro", "-", "Grupo XXV"],
          ["Cantante de Coro", "Nivel 1", "Grupo XVI"],
          ["Cantante de Coro", "Nivel 2", "Grupo XV"],
          ["Cantante de Coro", "Nivel 3", "Grupo XIV"]
        ]
      },
      {
        title: "Danza y Ballet Clásico (Ballet Nacional de Cuba)",
        description: "Regula los ingresos para el Ballet Nacional y Danza Contemporánea.",
        type: "table",
        columns: ["Cargo en Danza", "Ballet Nacional de Cuba (Grupo)", "Danza Nacional y Folklórico (Grupo)", "Ballet de Televisión Cubana (Grupo)"],
        rows: [
          ["Director General (Por funciones)", "Grupo XXXII", "Grupo XXXII", "Grupo XXI"],
          ["Coreógrafo", "Grupo XXXI (Eval 1)", "Grupo XXXI (Eval 1)", "Grupo XX (Eval 1)"],
          ["Primer Bailarín de Ballet", "Grupo XXX", "-", "Grupo XX"],
          ["Bailarín Principal de Ballet", "Grupo XXIX", "-", "Grupo XIX"],
          ["Bailarín Solista de Ballet", "Grupo XXVII", "-", "Grupo XVII"],
          ["Bailarín Cuerpo de Baile", "Grupo XXV (Eval 1)", "-", "Grupo XII (Eval 1)"]
        ]
      },
      {
        title: "Manifestación de Circo y Magia",
        type: "table",
        columns: ["Cargos", "Evaluación Artística", "Complejidad del Número", "Grupo de Complejidad"],
        rows: [
          ["Director General de Circo", "-", "-", "Grupo XXI"],
          ["Domador, Gimnasta, Mago, Payaso", "Nivel 1", "Complejidad I (Alta)", "Grupo XIX"],
          ["Domador, Gimnasta, Mago, Payaso", "Nivel 1", "Complejidad II (Media)", "Grupo XVII"],
          ["Domador, Gimnasta, Mago, Payaso", "Nivel 1", "Complejidad III (Baja)", "Grupo XIV"],
          ["Asistente de Espectáculos Circenses", "-", "Complejidad I", "Grupo VIII"]
        ]
      }
    ]
  },
  {
    id: "R25",
    title: "Órganos de Prensa y Periodistas",
    subtitle: "Sueldos de directores de noticieros de televisión y redactores de prensa",
    gaceta: "Resolución 25/2026",
    iconName: "FileText",
    color: "blue",
    summary: "Determina los salarios básicos de directores de noticieros, redactores, fotógrafos, periodistas y cuadros de los órganos de prensa provinciales, nacionales y municipales.",
    sections: [
      {
        title: "Escala para Cuadros de Órganos de Prensa",
        description: "Varía según la categoría de alcance o repercusión (I, II o III) otorgada al medio.",
        type: "table",
        columns: ["Cargos de Dirección", "Categoría I (Grupo)", "Categoría II (Grupo)", "Categoría III (Grupo)"],
        rows: [
          ["Director de Órgano de Prensa", "Grupo XXV", "Grupo XXIV", "Grupo XXIII"],
          ["Subdirector de Órgano de Prensa", "Grupo XXIV", "Grupo XXIII", "Grupo XXII"],
          ["Jefe de Departamento de Prensa", "Grupo XXIII", "Grupo XXII", "Grupo XXI"]
        ]
      },
      {
        title: "Director General de Noticieros de Televisión Nacional y Revistas",
        type: "table",
        columns: ["Cargo", "Medio o Programa de Televisión", "Grupo de Complejidad Asignado"],
        rows: [
          ["Director General", "Noticiero Estelar de la Televisión Cubana", "Grupo XXIII"],
          ["Director General", "Noticiero del Mediodía", "Grupo XXII"],
          ["Director General", "Noticiero del Cierre", "Grupo XXII"],
          ["Director General", "Revista Buenos Días", "Grupo XXII"],
          ["Director de Noticiero", "Cubavisión Internacional", "Grupo XXII"]
        ]
      },
      {
        title: "Personal Periodístico por Categorías",
        type: "table",
        columns: ["Cargo", "Nivel de Estudios", "Órgano Categoría I (Grupo)", "Órgano Categoría II (Grupo)", "Órgano Categoría III (Grupo)"],
        rows: [
          ["Periodista / Reportero", "Nivel Superior", "Grupo XIX", "Grupo XVIII", "Grupo XVII"],
          ["Personal Periodístico", "Nivel Medio", "Grupo XII", "Grupo XII", "Grupo XII"]
        ]
      },
      {
        title: "Requisitos de Calificación para Profesiones de Prensa",
        type: "table",
        columns: ["Cargo", "Requisito de Calificación Requerido"],
        rows: [
          ["Periodista", "Nivel Superior en Periodismo o Comunicación Social"],
          ["Fotorreportero", "Nivel Superior o Nivel Medio Superior calificado"],
          ["Redactor Asistente de Prensa", "Nivel Medio Superior con curso de habilitación o entrenamiento"],
          ["Camarógrafo", "Nivel Superior con curso de habilitación técnica"]
        ]
      }
    ]
  },
  {
    id: "R26",
    title: "Personal del Servicio Exterior",
    subtitle: "Sueldos regulados para embajadores, cónsules y delegados de Cuba",
    gaceta: "Resolución 26/2026",
    iconName: "Globe",
    color: "slate",
    summary: "Actualiza los sueldos en pesos cubanos (CUP) que devengan los funcionarios diplomáticos del servicio exterior de Cuba durante períodos vacacionales o de preparación en el país, basándose en una escala clasificada por Grupos de Complejidad del I al IX.",
    sections: [
      {
        title: "Escala de Salarios para Cargos del Servicio Exterior",
        type: "table",
        columns: ["Grupo de Complejidad", "Cargos Incluidos en el Rango", "Salario Mensual en Cuba (CUP)"],
        rows: [
          ["Grupo I", "Embajador, Jefe de la Misión Diplomática", "10,640"],
          ["Grupo II", "Director Empresa I, Presidente de Banco, II Jefe de Misión, Ministro Consejero, Cónsul General", "9,265"],
          ["Grupo III", "Consejero, Corresponsal Jefe de Oficina, Director II, Administrador \"A\", Contador \"A\", Traductor \"A\"", "8,117"],
          ["Grupo IV", "Administrador \"B\", Agregado Científico-Técnico, Primer Secretario, Médico y Estomatólogo", "7,350"],
          ["Grupo V", "Agregado Diplomático \"A\", Cónsul de Segunda, Administrador \"C\"", "6,740"],
          ["Grupo VI", "Agente de Ventas, Cónsul de Tercera, Fotorreportero, Segundo Corresponsal, Tercer Secretario", "6,130"],
          ["Grupo VII", "Agregado Diplomático, Analista de Información, Maestro, Secretaria \"A\", Vicecónsul, Chofer Escolta", "5,520"],
          ["Grupo VIII", "Ama de Llaves, Auxiliar de Contabilidad, Chofer, Cocinero, Recepcionista, Secretaria \"B\", Sereno", "4,985"],
          ["Grupo IX", "Auxiliar de Administración, Auxiliar de Cocina, Auxiliar de Limpieza, Camarero de Servicios", "4,525"]
        ]
      }
    ]
  }
];
