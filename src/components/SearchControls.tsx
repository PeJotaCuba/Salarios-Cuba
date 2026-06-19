/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Search, ListFilter, AlertCircle, Clock } from "lucide-react";
import { SalaryGroup } from "../types";
import { BASE_SALARY_SCALE } from "../salaryData";

interface SearchControlsProps {
  selectedGroupId: string;
  selectedHours: 44 | 40;
  onSelectGroupAndHours: (groupId: string, hours: 44 | 40) => void;
  darkMode?: boolean;
}

export default function SearchControls({
  selectedGroupId,
  selectedHours,
  onSelectGroupAndHours,
  darkMode = false,
}: SearchControlsProps) {
  const [searchMode, setSearchMode] = useState<"group" | "previous">("group");
  const [antesInput, setAntesInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<
    Array<{ group: SalaryGroup; hours: 44 | 40; matchVal: number }>
  >([]);

  // Calculate suggestions based on "Antes" salary input
  useEffect(() => {
    const num = parseFloat(antesInput);
    if (isNaN(num) || num <= 0) {
      setSuggestions([]);
      return;
    }

    const matches: Array<{ group: SalaryGroup; hours: 44 | 40; matchVal: number }> = [];

    // Search exact or very close starting matches in the baseline scale (BASE_SALARY_SCALE)
    BASE_SALARY_SCALE.forEach((g) => {
      // Check 44h before
      if (Math.abs(g.antes44 - num) < 150) {
        matches.push({ group: g, hours: 44, matchVal: g.antes44 });
      }
      // Check 40h before
      if (Math.abs(g.antes40 - num) < 150) {
        matches.push({ group: g, hours: 40, matchVal: g.antes40 });
      }
    });

    // Sort by closeness of Match Value
    matches.sort((a, b) => Math.abs(a.matchVal - num) - Math.abs(b.matchVal - num));

    // Keep top 4 matches
    setSuggestions(matches.slice(0, 4));
  }, [antesInput]);

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      onSelectGroupAndHours(e.target.value, selectedHours);
    }
  };

  const handleHoursSelect = (hours: 44 | 40) => {
    onSelectGroupAndHours(selectedGroupId, hours);
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 shadow-xs transition-colors duration-200">
      
      {/* Mobile-optimized Pestañas */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 pb-2.5 mb-4 gap-1">
        <button
          id="btn-tab-group"
          type="button"
          onClick={() => setSearchMode("group")}
          className={`flex-1 pb-2.5 text-xs sm:text-sm font-bold border-b-2 text-center transition-all cursor-pointer active:scale-[0.98] ${
            searchMode === "group"
              ? "border-[#002A8F] dark:border-blue-500 text-[#002A8F] dark:text-blue-400"
              : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 h-8">
            <ListFilter className="h-4.5 w-4.5 shrink-0" />
            <span>Por Grupo</span>
          </div>
        </button>
        <button
          id="btn-tab-previous"
          type="button"
          onClick={() => setSearchMode("previous")}
          className={`flex-1 pb-2.5 text-xs sm:text-sm font-bold border-b-2 text-center transition-all cursor-pointer active:scale-[0.98] ${
            searchMode === "previous"
              ? "border-[#002A8F] dark:border-blue-500 text-[#002A8F] dark:text-blue-400"
              : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 h-8">
            <Search className="h-4.5 w-4.5 shrink-0" />
            <span>Por Salario Anterior</span>
          </div>
        </button>
      </div>

      {searchMode === "group" ? (
        <div className="space-y-4">
          <div>
            <label htmlFor="group-select" className="block text-[11px] font-bold text-slate-500 dark:text-slate-450 uppercase tracking-widest mb-2">
              Grupo de Complejidad
            </label>
            <select
              id="group-select"
              value={selectedGroupId}
              onChange={handleGroupChange}
              className="block w-full rounded-xl border border-slate-205 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-3 text-sm font-bold text-slate-850 dark:text-white shadow-xs focus:border-[#002A8F] dark:focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-[#002A8F] dark:focus:ring-blue-500 transition-colors cursor-pointer"
            >
              {BASE_SALARY_SCALE.map((g) => (
                <option key={g.id} value={g.id} className="bg-white dark:bg-slate-900 text-slate-850 dark:text-white">
                  Grupo de escala {g.id}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label htmlFor="prev-salary" className="block text-[11px] font-bold text-slate-500 dark:text-slate-450 uppercase tracking-widest mb-2">
              Salario anterior en CUP (Antes de 2026)
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-slate-400 dark:text-slate-550" />
              </div>
              <input
                id="prev-salary"
                type="number"
                value={antesInput}
                onChange={(e) => setAntesInput(e.target.value)}
                placeholder="Ejemplo: 4010, 2420, 2200..."
                className="block w-full rounded-xl border border-slate-205 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 py-3 pl-10 pr-3 text-sm font-semibold text-slate-850 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 shadow-xs focus:border-[#002A8F] dark:focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-[#002A8F] dark:focus:ring-blue-500 transition-colors"
              />
            </div>
            <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Le sugeriremos los grupos que corresponden a este monto según la escala vigente previa a las modificaciones de 2026.
            </p>
          </div>

          {suggestions.length > 0 && (
            <div className="rounded-xl border border-slate-105 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 p-3">
              <span className="block text-[10px] font-extrabold text-[#002A8F] dark:text-blue-400 uppercase tracking-widest mb-2">
                Coincidencias estimadas:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {suggestions.map(({ group, hours, matchVal }) => (
                  <button
                    key={`${group.id}-${hours}`}
                    type="button"
                    onClick={() => {
                      onSelectGroupAndHours(group.id, hours);
                      setAntesInput(matchVal.toString());
                    }}
                    className={`flex items-center justify-between rounded-lg p-2.5 text-left text-xs font-semibold border transition-all cursor-pointer active:scale-[0.99] ${
                      selectedGroupId === group.id && selectedHours === hours
                        ? "bg-[#002A8F]/10 dark:bg-blue-500/10 text-[#002A8F] dark:text-blue-400 border-[#002A8F] dark:border-blue-500 shadow-xs"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    <span>
                      Grupo <b className="font-extrabold">{group.id}</b> ({hours}h/sem)
                    </span>
                    <span className={selectedGroupId === group.id && selectedHours === hours ? "text-[#002A8F] dark:text-blue-300 font-bold" : "text-slate-555 dark:text-slate-500 font-mono"}>
                      Antes: <b>{matchVal} CUP</b>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {suggestions.length === 0 && antesInput !== "" && (
            <div className="flex items-center gap-2 rounded-xl bg-[#CF142B]/5 dark:bg-[#CF142B]/10 border border-[#CF142B]/20 p-3 text-xs text-[#CF142B] dark:text-red-400 font-medium">
              <AlertCircle className="h-4.5 w-4.5 shrink-0" />
              <span>Sin coincidencia exacta. Seleccione un grupo manualmente arriba.</span>
            </div>
          )}
        </div>
      )}

      {/* Hours Selector - Mobile Highly optimized */}
      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-850">
        <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-450 uppercase tracking-widest mb-2.5">
          Jornada Laboral Semanal
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            id="btn-hours-44"
            type="button"
            onClick={() => handleHoursSelect(44)}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-bold transition-all border cursor-pointer active:scale-[0.98] ${
              selectedHours === 44
                ? "bg-[#002A8F] text-white border-[#002A8F] shadow-sm transform dark:bg-blue-600 dark:border-blue-500"
                : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-850"
            }`}
          >
            <Clock className={`h-4 w-4 ${selectedHours === 44 ? "text-white" : "text-[#002A8F] dark:text-blue-400"}`} />
            <span>44 horas</span>
          </button>
          <button
            id="btn-hours-40"
            type="button"
            onClick={() => handleHoursSelect(40)}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-bold transition-all border cursor-pointer active:scale-[0.98] ${
              selectedHours === 40
                ? "bg-[#002A8F] text-white border-[#002A8F] shadow-sm transform dark:bg-blue-600 dark:border-blue-500"
                : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-850"
            }`}
          >
            <Clock className={`h-4 w-4 ${selectedHours === 40 ? "text-white" : "text-[#002A8F] dark:text-blue-400"}`} />
            <span>40 horas</span>
          </button>
        </div>
      </div>
    </div>
  );
}
