/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sun, Moon, Landmark } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="mb-6 border-b border-light-border dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md pb-4 pt-4 shadow-xs transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
          
          {/* Logo and Brand Title */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center">
              <img src="/icon.svg" alt="Salarios Cuba Logo" className="h-full w-full object-contain drop-shadow-sm" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-[#002A8F] dark:text-blue-400 uppercase sm:text-2xl flex items-center gap-2">
                Salarios Cuba
                <span className="inline-block h-2 w-2 rounded-full bg-[#CF142B]" />
              </h1>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                Sector Presupuestado • Consulta, Simulación de Impuestos y Escala Oficial
              </p>
            </div>
          </div>
          
          {/* Right Side Controls & Effective Date */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <div className="text-right flex-1 sm:flex-initial">
              <div className="inline-flex flex-col items-end rounded-xl bg-slate-100 dark:bg-slate-800/85 px-4 py-2 border border-slate-200/50 dark:border-slate-700/50">
                <span className="text-xs font-bold text-[#002A8F] dark:text-blue-400">
                  Vigente a partir de Julio de 2026
                </span>
                <span className="text-[10px] font-medium text-[#CF142B] dark:text-red-400 mt-0.5">
                  Primer pago en el mes de Agosto
                </span>
              </div>
            </div>
            
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle"
              type="button"
              onClick={onToggleDarkMode}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-350 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer shadow-xs"
              title={darkMode ? "Establecer Modo Claro" : "Establecer Modo Oscuro"}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="h-4.5 w-4.5 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-[#002A8F]" />
              )}
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}
