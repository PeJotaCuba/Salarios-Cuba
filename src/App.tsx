/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import SearchControls from "./components/SearchControls";
import SalaryScaleTable from "./components/SalaryScaleTable";
import SalaryDetailsPanel from "./components/SalaryDetailsPanel";
import { BASE_SALARY_SCALE } from "./salaryData";

export default function App() {
  // Load dark mode state from localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("salarios_cuba_dark_mode");
      return stored === "true";
    } catch (e) {
      console.error("Local storage error on dark mode load:", e);
      return false;
    }
  });

  // Selected complexity group and active working hours
  const [selectedGroupId, setSelectedGroupId] = useState<string>("I");
  const [selectedHours, setSelectedHours] = useState<44 | 40>(44);

  // Sync dark mode state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("salarios_cuba_dark_mode", darkMode.toString());
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      console.error("Local storage error on dark mode write:", e);
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Selection callback
  const handleSelectGroupAndHours = (groupId: string, hours: 44 | 40) => {
    setSelectedGroupId(groupId);
    setSelectedHours(hours);
  };

  const handleSelectGroup = (groupId: string) => {
    setSelectedGroupId(groupId);
  };

  // Since minimum salary config is removed from UI, we work with the official BASE_SALARY_SCALE directly
  const scaledScale = useMemo(() => {
    return BASE_SALARY_SCALE;
  }, []);

  // Selected active group
  const selectedGroup = useMemo(() => {
    return (
      scaledScale.find((g) => g.id === selectedGroupId) ||
      scaledScale[0]
    );
  }, [scaledScale, selectedGroupId]);

  // Selected active group from the baseline to extract "Antes" salary
  const baseGroupInstance = useMemo(() => {
    return (
      BASE_SALARY_SCALE.find((g) => g.id === selectedGroupId) ||
      BASE_SALARY_SCALE[0]
    );
  }, [selectedGroupId]);

  const baseSalaryValue = selectedHours === 44 ? selectedGroup.despues44 : selectedGroup.despues40;
  const anteriorSalaryValue = selectedHours === 44 ? baseGroupInstance.antes44 : baseGroupInstance.antes40;

  return (
    <div className={`min-h-screen font-sans ${darkMode ? "dark bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"} transition-colors duration-200 relative overflow-x-hidden selection:bg-red-500/20 selection:text-red-600`}>
      
      {/* Respectful background Cuban Flag Watermark */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.02] flex items-center justify-center overflow-hidden z-0">
        <svg className="w-[110vw] max-w-5xl h-[100vh] select-none" viewBox="0 0 2 1" xmlns="http://www.w3.org/2000/svg">
          <rect width="2" height="1" fill="#002A8F" />
          <rect y="0.2" width="2" height="0.2" fill="#FFFFFF" />
          <rect y="0.6" width="2" height="0.2" fill="#FFFFFF" />
          <polygon points="0,0 0.866,0.5 0,1" fill="#CF142B" />
          <polygon points="0.2887,0.38 0.3187,0.47 0.4087,0.47 0.3387,0.52 0.3687,0.61 0.2887,0.55 0.2087,0.61 0.2387,0.52 0.1687,0.47 0.2587,0.47" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header component */}
        <Header darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />

        <main className="flex-1 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          {/* Core Layout - Split Panel divided screen */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
            
            {/* Left Columns (5 of 12) - Configuration, Search and Information */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Instructions Panel - Elegant and with custom Cuba Flag details */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 shadow-xs transition-colors duration-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#002A8F] to-[#CF142B]" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#002A8F] dark:text-blue-400 block mb-1">
                  Guía de ayuda
                </span>
                <h2 className="text-md font-bold text-slate-800 dark:text-white mb-4">Instrucciones de Uso</h2>
                
                <ol className="space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed list-none pl-0">
                  <li className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#002A8F]/10 dark:bg-[#002A8F]/20 text-[#002A8F] dark:text-blue-400 font-bold text-[11px] border border-[#002A8F]/20">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-white mb-0.5">Búsqueda del Grupo o Salario</p>
                      <p className="text-slate-500 dark:text-slate-400">
                        Seleccione su <b>Grupo de Complejidad</b> (desde Grupo I hasta el XXXII) o escriba su anterior salario básico para sugerirle el grupo de complejidad equivalente.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#CF142B]/10 dark:bg-[#CF142B]/20 text-[#CF142B] dark:text-red-400 font-bold text-[11px] border border-[#CF142B]/20">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-white mb-0.5">Agregar Pagos Adicionales</p>
                      <p className="text-slate-500 dark:text-slate-400">
                        Añada de forma personalizada otros atractivos o ingresos mensuales asignados por ley (maestrías, perfeccionamiento, turnicidad, antigüedad, etc.) en la sección de bonificaciones.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#002A8F]/10 dark:bg-[#002A8F]/20 text-[#002A8F] dark:text-blue-400 font-bold text-[11px] border border-[#002A8F]/20">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-white mb-0.5">Cálculo de Impuestos</p>
                      <p className="text-slate-500 dark:text-slate-400">
                        La calculadora aplica automáticamente el descuento del 5% de Seguridad Social y la escala condicional del Impuesto sobre Ingresos Personales para obtener su Salario Neto real.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Inputs: Search by Group or Previous Salary, with suggest matches */}
              <SearchControls
                selectedGroupId={selectedGroupId}
                selectedHours={selectedHours}
                onSelectGroupAndHours={handleSelectGroupAndHours}
                darkMode={darkMode}
              />

              {/* Full 32 groups grid viewer with clickable rows */}
              <SalaryScaleTable
                scaledScale={scaledScale}
                selectedGroupId={selectedGroupId}
                selectedHours={selectedHours}
                onSelectGroup={handleSelectGroup}
                darkMode={darkMode}
              />
            </div>

            {/* Right Columns (7 of 12) - Identified Salary & Live calculators */}
            <div className="lg:col-span-7">
              <SalaryDetailsPanel
                selectedGroup={selectedGroup}
                selectedHours={selectedHours}
                baseSalary={baseSalaryValue}
                anteriorSalary={anteriorSalaryValue}
                darkMode={darkMode}
              />
            </div>

          </div>
        </main>

        {/* Footer */}
        <footer className={`border-t ${darkMode ? "border-slate-900 bg-slate-950/80 text-slate-500" : "border-slate-200 bg-white/80 text-slate-400"} py-5 text-center text-xs mt-auto transition-colors duration-200`}>
          <div className="mx-auto max-w-7xl px-4">
            <p className="font-medium">© 2026 Salarios Cuba • Consulta legislativa para el sector presupuestado.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

