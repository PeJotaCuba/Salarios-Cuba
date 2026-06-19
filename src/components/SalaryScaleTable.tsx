/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { HelpCircle, Eye, ArrowRight } from "lucide-react";
import { SalaryGroup } from "../types";

interface SalaryScaleTableProps {
  scaledScale: SalaryGroup[];
  selectedGroupId: string;
  selectedHours: 44 | 40;
  onSelectGroup: (groupId: string) => void;
  darkMode?: boolean;
}

export default function SalaryScaleTable({
  scaledScale,
  selectedGroupId,
  selectedHours,
  onSelectGroup,
  darkMode = false,
}: SalaryScaleTableProps) {
  
  // Rule: Until August 31, 2026, show 'Before → After'. From September 1st, 2026 onwards, show only current scale.
  // Current local time: 2026-06-18. This evaluates to true.
  const isBeforeSept2026 = new Date() < new Date("2026-09-01");

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 shadow-xs transition-colors duration-200">
      
      {/* Title block */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#002A8F]/10 dark:bg-blue-500/15 text-[#002A8F] dark:text-blue-400 border border-[#002A8F]/15">
            <Eye className="h-4.5 w-4.5 shrink-0" />
          </div>
          <h2 className="text-sm font-extrabold text-slate-800 dark:text-white uppercase tracking-wider">
            Escala Salarial Oficial (32 Grupos)
          </h2>
        </div>
        <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          {selectedHours}h / sem
        </span>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 max-h-[380px] overflow-y-auto custom-scrollbar">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-left text-xs bg-white dark:bg-slate-950">
          <thead className="sticky top-0 bg-slate-50 dark:bg-slate-950 font-bold text-slate-600 dark:text-slate-400 shadow-xs z-10">
            <tr>
              <th scope="col" className="px-4 py-3 font-extrabold text-slate-700 dark:text-slate-300 w-1/4">Grupo</th>
              <th scope="col" className="px-4 py-3 font-extrabold text-center text-slate-700 dark:text-slate-300">
                {isBeforeSept2026 ? "Salario Antes → Después" : "Salario Escala Actual"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
            {scaledScale.map((g) => {
              const isSelected = g.id === selectedGroupId;
              const antes = selectedHours === 44 ? g.antes44 : g.antes40;
              const despues = selectedHours === 44 ? g.despues44 : g.despues40;

              return (
                <tr
                  key={g.id}
                  onClick={() => onSelectGroup(g.id)}
                  className={`group cursor-pointer transition-all ${
                    isSelected
                      ? "bg-[#002A8F]/5 dark:bg-blue-500/10 font-bold border-l-4 border-l-[#002A8F] dark:border-l-blue-500"
                      : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {/* Group Identity Column */}
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset ${
                      isSelected
                        ? "bg-[#002A8F] text-white ring-[#002A8F]/30"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 ring-slate-200 dark:ring-slate-700"
                    }`}>
                      Grupo {g.id}
                    </span>
                  </td>

                  {/* Hourly rates (Before -> After, or only After depending on the current date relative to Sept 2026) */}
                  <td className={`whitespace-nowrap px-4 py-3 text-center font-bold font-mono transition-colors ${
                    isSelected 
                      ? "text-[#002A8F] dark:text-blue-400" 
                      : "text-slate-700 dark:text-slate-350"
                  }`}>
                    {isBeforeSept2026 ? (
                      <span className="flex items-center justify-center gap-1.5">
                        <span className="text-slate-400 dark:text-slate-550 font-normal line-through">{antes}</span>
                        <span className="text-slate-400 dark:text-slate-500 font-normal">→</span>
                        <span className="font-extrabold">{despues} CUP</span>
                      </span>
                    ) : (
                      <span>{despues} CUP</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom informational bar */}
      <div className="mt-3 flex items-start gap-1.5 rounded-lg bg-slate-50 dark:bg-slate-950/40 p-3 text-[11px] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-850 leading-normal">
        <HelpCircle className="h-4 w-4 text-[#002A8F] dark:text-blue-400 shrink-0 mt-0.5" />
        <span>
          {isBeforeSept2026
            ? "Muestra la transición salarial aprobada (Escala Anterior → Escala Nueva de 2026). A partir del 31 de agosto de 2026 se desactivará la comparación."
            : "Muestra la escala oficial obligatoria vigente. Toque cualquier fila para calcular."}
        </span>
      </div>
    </div>
  );
}
