/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import SearchControls from "./components/SearchControls";
import SalaryScaleTable from "./components/SalaryScaleTable";
import SalaryDetailsPanel from "./components/SalaryDetailsPanel";
import LandingView from "./components/LandingView";
import ResolutionsPanel from "./components/ResolutionsPanel";
import { BASE_SALARY_SCALE } from "./salaryData";
import { RESOLUTIONS_LIST } from "./resolutionsData";
import { 
  Home, 
  Calculator, 
  ChevronRight, 
  X, 
  Trophy, 
  TrendingUp, 
  Layers, 
  MapPin, 
  HeartPulse, 
  GraduationCap, 
  BookOpen, 
  Atom, 
  Palette, 
  Music, 
  FileText, 
  Globe 
} from "lucide-react";

// Map string icon names to Lucide icon components for the sidebar navigation
const iconMap: Record<string, React.ComponentType<any>> = {
  Trophy: Trophy,
  TrendingUp: TrendingUp,
  Layers: Layers,
  MapPin: MapPin,
  HeartPulse: HeartPulse,
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Atom: Atom,
  Palette: Palette,
  Music: Music,
  FileText: FileText,
  Globe: Globe
};

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

  // Sidebar navigation and layout states
  const [currentView, setCurrentView] = useState<string>("landing"); // "landing" | "calculator" | "R12" | "R14" etc.
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() => {
    // Default open on desktop, closed on smaller mobile viewports
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024;
    }
    return true;
  });

  // Selected complexity group and active working hours for the calculator
  const [selectedGroupId, setSelectedGroupId] = useState<string>("I");
  const [selectedHours, setSelectedHours] = useState<44 | 40>(44);

  // Sync dark mode state to localStorage and DOM
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

  // Adjust sidebar state when window size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Selection callbacks for the calculator
  const handleSelectGroupAndHours = (groupId: string, hours: 44 | 40) => {
    setSelectedGroupId(groupId);
    setSelectedHours(hours);
  };

  const handleSelectGroup = (groupId: string) => {
    setSelectedGroupId(groupId);
  };

  const scaledScale = useMemo(() => {
    return BASE_SALARY_SCALE;
  }, []);

  // Selected active group for the calculator
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

  // Find currently active resolution if applicable
  const activeResolution = useMemo(() => {
    return RESOLUTIONS_LIST.find((res) => res.id === currentView);
  }, [currentView]);

  // Handler to jump to a specific resolution and close sidebar on mobile
  const handleNavigateToView = (viewId: string) => {
    setCurrentView(viewId);
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className={`min-h-screen font-sans ${darkMode ? "dark bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"} transition-colors duration-200 relative overflow-x-hidden selection:bg-red-500/20 selection:text-red-600`}>
      
      {/* Respectful background Cuban Flag Watermark */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.015] flex items-center justify-center overflow-hidden z-0">
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
        <Header 
          darkMode={darkMode} 
          onToggleDarkMode={handleToggleDarkMode} 
          onToggleSidebar={handleToggleSidebar} 
        />

        {/* Global Sidebar Overlay Backdrop on Mobile */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs lg:hidden transition-opacity"
          />
        )}

        <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 gap-6">
          
          {/* LEFT SLIDING / COLLAPSIBLE SIDEBAR MENU */}
          <aside className={`fixed lg:relative top-0 bottom-0 left-0 z-50 lg:z-10 w-80 lg:w-64 shrink-0 bg-white dark:bg-slate-900 lg:bg-transparent lg:dark:bg-transparent border-r lg:border-r-0 border-slate-200 dark:border-slate-800 p-5 lg:p-0 flex flex-col transform transition-transform duration-200 ease-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:hidden"}`}>
            
            {/* Sidebar header (Visible on mobile drawers only) */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800 lg:hidden">
              <span className="text-xs font-bold text-[#002A8F] dark:text-blue-400 uppercase tracking-widest">
                Menú de Opciones
              </span>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-6">
              
              {/* SECTION 1: CORE PANELS */}
              <div>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase block px-3 mb-2">
                  Panel Principal
                </span>
                
                <nav className="space-y-1">
                  <button
                    onClick={() => handleNavigateToView("landing")}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer border ${currentView === "landing" ? "bg-[#002A8F]/10 dark:bg-blue-500/15 text-[#002A8F] dark:text-blue-400 border-blue-200/50 dark:border-blue-500/15" : "text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800/60 border-transparent"}`}
                  >
                    <Home className="h-4.5 w-4.5 shrink-0" />
                    Resumen e Inicio
                  </button>

                  <button
                    onClick={() => handleNavigateToView("calculator")}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer border ${currentView === "calculator" ? "bg-[#002A8F]/10 dark:bg-blue-500/15 text-[#002A8F] dark:text-blue-400 border-blue-200/50 dark:border-blue-500/15" : "text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800/60 border-transparent"}`}
                  >
                    <Calculator className="h-4.5 w-4.5 shrink-0" />
                    Calculadora de Salario
                  </button>
                </nav>
              </div>

              {/* SECTION 2: SECTORIAL RESOLUTIONS */}
              <div>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase block px-3 mb-2">
                  Resoluciones Sectoriales
                </span>
                
                <nav className="space-y-1">
                  {RESOLUTIONS_LIST.map((res) => {
                    const ResIcon = iconMap[res.iconName] || FileText;
                    const isActive = currentView === res.id;

                    return (
                      <button
                        key={res.id}
                        onClick={() => handleNavigateToView(res.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs font-medium rounded-xl transition-all cursor-pointer border ${isActive ? "bg-[#002A8F]/10 dark:bg-blue-500/15 text-[#002A8F] dark:text-blue-400 border-blue-200/50 dark:border-blue-500/15 font-bold" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-800 dark:hover:text-slate-200 border-transparent"}`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`flex h-7 w-7 items-center justify-center rounded-lg shrink-0 ${isActive ? "bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400" : "bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500"}`}>
                            <ResIcon className="h-4 w-4" />
                          </span>
                          <span className="truncate">{res.title}</span>
                        </div>
                        <ChevronRight className={`h-3.5 w-3.5 shrink-0 text-slate-400 opacity-60 transition-transform ${isActive ? "rotate-90 text-[#002A8F] dark:text-blue-400" : ""}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>

            </div>

            {/* Respectful mini credit */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-600 font-medium">
              Gaceta Oficial No. 60 Ordinaria
            </div>
          </aside>

          {/* MAIN CONTENT WORKSPACE VIEW */}
          <main className="flex-1 min-w-0">
            
            {/* VIEW 1: LANDING OVERVIEW */}
            {currentView === "landing" && (
              <LandingView 
                onGoToCalculator={() => setCurrentView("calculator")} 
                onGoToResolution={(resId) => setCurrentView(resId)}
              />
            )}

            {/* VIEW 2: CALCULATOR WORKSPACE */}
            {currentView === "calculator" && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start animate-fade-in">
                
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
            )}

            {/* VIEW 3: SECTORIAL RESOLUTION RESOLVER */}
            {activeResolution && (
              <ResolutionsPanel resolution={activeResolution} />
            )}

          </main>

        </div>

        {/* Footer */}
        <footer className={`border-t ${darkMode ? "border-slate-900 bg-slate-950/80 text-slate-500" : "border-slate-200 bg-white/80 text-slate-400"} py-5 text-center text-xs mt-auto transition-colors duration-200`}>
          <div className="mx-auto max-w-7xl px-4">
            <p className="font-medium">© 2026 Salarios Cuba • Escala salarial para el sector presupuestado ordinario.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
