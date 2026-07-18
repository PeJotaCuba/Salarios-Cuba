/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Search, Info, HelpCircle, Trophy, TrendingUp, Layers, MapPin, HeartPulse, GraduationCap, BookOpen, Atom, Palette, Music, FileText, Globe, CheckCircle2, Star, Sparkles } from "lucide-react";
import { ResolutionData } from "../resolutionsData";
import { BASE_SALARY_SCALE } from "../salaryData";

// Create a lookup map for groups and their new salaries (44h and 40h)
const groupSalaryMap = new Map<string, { despues44: number; despues40: number }>();
BASE_SALARY_SCALE.forEach((group) => {
  groupSalaryMap.set(group.id, {
    despues44: group.despues44,
    despues40: group.despues40,
  });
});

// Helper to check if a table already contains both 44h and 40h schedules in its headers
const tableHasBothSchedules = (columns: string[]) => {
  let has44 = false;
  let has40 = false;
  columns.forEach((col) => {
    const c = col.toLowerCase();
    if (c.includes("44h") || c.includes("44 h") || c.includes("cuarenta y cuatro")) has44 = true;
    if (c.includes("40h") || c.includes("40 h") || c.includes("cuarenta")) has40 = true;
  });
  return has44 && has40;
};

// Helper to render cell contents and automatically append the 44h and 40h salaries 
// when a complexity group (e.g., "Grupo XXII") is mentioned.
const renderCellContent = (cellValue: any, skipBadge = false) => {
  if (cellValue === null || cellValue === undefined) return "";
  const stringVal = String(cellValue);

  // Match the word "Grupo" followed by Roman numerals I to XXXII
  const groupRegex = /(Grupo\s+)(XXXII|XXXI|XXX|XXIX|XXVIII|XXVII|XXVI|XXV|XXIV|XXIII|XXII|XXI|XX|XIX|XVIII|XVII|XVI|XV|XIV|XIII|XII|XI|X|IX|VIII|VII|VI|V|IV|III|II|I)\b/gi;

  const foundGroups = new Set<string>();
  let match;
  groupRegex.lastIndex = 0;

  while ((match = groupRegex.exec(stringVal)) !== null) {
    if (match[2]) {
      foundGroups.add(match[2].toUpperCase());
    }
  }

  if (foundGroups.size === 0 || skipBadge) {
    return <span>{stringVal}</span>;
  }

  return (
    <div className="flex flex-col gap-1.5 py-0.5">
      <span className="font-medium text-slate-800 dark:text-white leading-normal">{stringVal}</span>
      <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap">
        {Array.from(foundGroups).map((groupId) => {
          const salaryInfo = groupSalaryMap.get(groupId);
          if (!salaryInfo) return null;
          
          return (
            <div key={groupId} className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold tracking-tight">
              <span className="inline-flex items-center gap-1 rounded-md bg-[#002A8F]/5 dark:bg-blue-500/10 px-1.5 py-0.5 text-[#002A8F] dark:text-blue-400 border border-blue-500/15">
                <span className="text-[8px] font-normal opacity-70">44h:</span>
                <span>{salaryInfo.despues44.toLocaleString()} CUP</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800/60 px-1.5 py-0.5 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                <span className="text-[8px] font-normal opacity-70">40h:</span>
                <span>{salaryInfo.despues40.toLocaleString()} CUP</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface ResolutionsPanelProps {
  resolution: ResolutionData;
}

// Map string icon names to Lucide icons safely
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

export default function ResolutionsPanel({ resolution }: ResolutionsPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const IconComponent = iconMap[resolution.iconName] || FileText;

  // Filter table rows if a search query is active
  const filterRows = (rows: any[][], columns: string[]) => {
    if (!searchQuery) return rows;
    const lowerQuery = searchQuery.toLowerCase();
    return rows.filter((row) => {
      return row.some((cell) => {
        if (cell === null || cell === undefined) return false;
        return String(cell).toLowerCase().includes(lowerQuery);
      });
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Resolution Header Box */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs relative overflow-hidden transition-all duration-200">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#002A8F]" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
              <IconComponent className="h-6 w-6" />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#CF142B] dark:text-red-400">
                {resolution.gaceta}
              </span>
              <h2 className="text-xl font-extrabold text-slate-800 dark:text-white mt-0.5">
                {resolution.title}
              </h2>
            </div>
          </div>
          
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 dark:text-slate-400 dark:bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
              <Info className="h-3 w-3" />
              Sectorial de Cuba
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
          {resolution.summary}
        </p>

        {/* Dynamic Search Bar inside resolution to browse roles easily */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
          <div className="relative rounded-xl shadow-xs">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-slate-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="role-search"
              id="role-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#002A8F] focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 transition-colors"
              placeholder="Buscar cargo, rango, medalla, premio, o palabras clave dentro de esta resolución..."
            />
          </div>
        </div>
      </div>

      {/* Render Resolution Sections */}
      <div className="space-y-6">
        {resolution.sections.map((section, sIdx) => {
          if (section.type === "table" && section.columns && section.rows) {
            const filteredRows = filterRows(section.rows, section.columns);
            const hasHiddenRows = filteredRows.length < section.rows.length;
            const skipBadge = tableHasBothSchedules(section.columns);

            return (
              <div 
                key={sIdx} 
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs overflow-hidden transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#002A8F]" />
                    {section.title}
                  </h3>
                  {section.description && (
                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500 leading-normal">
                      {section.description}
                    </p>
                  )}
                </div>

                <div className="overflow-x-auto -mx-5 sm:-mx-0">
                  <div className="inline-block min-w-full align-middle sm:px-0">
                    <table className="min-w-full divide-y divide-slate-100 dark:divide-slate-800/80">
                      <thead className="bg-slate-50 dark:bg-slate-800/40">
                        <tr>
                          {section.columns.map((col, cIdx) => (
                            <th 
                              key={cIdx} 
                              scope="col" 
                              className={`py-3 ${cIdx === 0 ? "pl-5 pr-3 text-left" : "px-3 text-left"} text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500`}
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
                        {filteredRows.length > 0 ? (
                          filteredRows.map((row, rIdx) => (
                            <tr 
                              key={rIdx} 
                              className="hover:bg-slate-50/60 dark:hover:bg-slate-800/20 transition-colors"
                            >
                              {row.map((cell, cIdx) => (
                                <td 
                                  key={cIdx} 
                                  className={`py-3 ${cIdx === 0 ? "pl-5 pr-3 font-semibold text-slate-800 dark:text-white" : "px-3 text-slate-600 dark:text-slate-300"} text-xs`}
                                >
                                  {renderCellContent(cell, skipBadge)}
                                </td>
                              ))}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td 
                              colSpan={section.columns.length} 
                              className="py-10 text-center text-xs text-slate-400 dark:text-slate-500"
                            >
                              No se encontraron resultados para "{searchQuery}"
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {hasHiddenRows && (
                  <div className="mt-3 text-right">
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 italic">
                      Mostrando {filteredRows.length} de {section.rows.length} registros (filtrado por búsqueda)
                    </span>
                  </div>
                )}
              </div>
            );
          }

          if (section.type === "grid" && section.rows) {
            // Filter grid elements
            const filteredRows = searchQuery
              ? section.rows.filter(row => row.some(cell => String(cell).toLowerCase().includes(searchQuery.toLowerCase())))
              : section.rows;

            return (
              <div 
                key={sIdx} 
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs"
              >
                <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#002A8F]" />
                  {section.title}
                </h3>
                
                {filteredRows.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredRows.map((card, rIdx) => (
                      <div 
                        key={rIdx} 
                        className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-4 transition-all duration-200 relative overflow-hidden"
                      >
                        <span className="text-[10px] font-bold text-[#002A8F] dark:text-blue-400 uppercase tracking-wider block mb-1">
                          {card[0]}
                        </span>
                        <div className="text-2xl font-black text-slate-800 dark:text-white leading-tight">
                          {card[1]}
                        </div>
                        {card[2] && (
                          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-normal">
                            {card[2]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-xs text-slate-400 py-6">No se encontraron tarjetas que coincidan con la búsqueda.</p>
                )}
              </div>
            );
          }

          if (section.type === "bulletList" && section.bullets) {
            const filteredBullets = searchQuery
              ? section.bullets.filter(bullet => bullet.toLowerCase().includes(searchQuery.toLowerCase()))
              : section.bullets;

            return (
              <div 
                key={sIdx} 
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 text-emerald-500 opacity-5">
                  <CheckCircle2 className="h-24 w-24" />
                </div>
                
                <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-1.5 relative z-10">
                  <span className="h-2 w-2 rounded-full bg-[#CF142B]" />
                  {section.title}
                </h3>
                
                {filteredBullets.length > 0 ? (
                  <ul className="space-y-3.5 pl-0 list-none relative z-10">
                    {filteredBullets.map((bullet, bIdx) => (
                      <li 
                        key={bIdx} 
                        className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#002A8F]/10 dark:bg-blue-500/10 text-[#002A8F] dark:text-blue-400 font-bold border border-blue-500/10">
                          <Star className="h-3 w-3 fill-current" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center text-xs text-slate-400 py-6">No se encontraron incisos que coincidan con la búsqueda.</p>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>

    </div>
  );
}
