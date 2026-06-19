/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { Plus, Trash2, Percent, CheckCircle2, DollarSign, Calendar, Info, TrendingUp } from "lucide-react";
import { SalaryGroup, AdditionalPayment } from "../types";
import { calculateTaxes } from "../salaryUtils";

interface SalaryDetailsPanelProps {
  selectedGroup: SalaryGroup;
  selectedHours: 44 | 40;
  baseSalary: number; // "Después" salary
  anteriorSalary: number; // original "Antes" salary
  darkMode?: boolean;
}

// Pre-defined common Cuban bonuses to help the user insert easily
const SUGGESTED_BONUSES = [
  { name: "Maestría", amount: 440 },
  { name: "Doctorado", amount: 825 },
];

export default function SalaryDetailsPanel({
  selectedGroup,
  selectedHours,
  baseSalary,
  anteriorSalary,
  darkMode = false,
}: SalaryDetailsPanelProps) {
  // Additional payments state
  const [payments, setPayments] = useState<AdditionalPayment[]>([]);
  const [newPaymentName, setNewPaymentName] = useState("");
  const [newPaymentAmount, setNewPaymentAmount] = useState("");

  // Tax application is mandatory
  const applyTaxes = true;

  // Add additional payment handler
  const handleAddPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(newPaymentAmount);
    if (!newPaymentName.trim() || isNaN(amountNum) || amountNum <= 0) {
      return;
    }

    const newItem: AdditionalPayment = {
      id: Math.random().toString(),
      name: newPaymentName.trim(),
      amount: amountNum,
    };

    setPayments([...payments, newItem]);
    setNewPaymentName("");
    setNewPaymentAmount("");
  };

  // Add a suggested pre-defined bonus directly
  const handleAddSuggested = (name: string, amount: number) => {
    // Avoid duplicates of the exact name for UX
    if (payments.some((p) => p.name === name)) return;
    
    const newItem: AdditionalPayment = {
      id: Math.random().toString(),
      name,
      amount,
    };
    setPayments([...payments, newItem]);
  };

  // Remove additional payment handler
  const handleRemovePayment = (id: string) => {
    setPayments(payments.filter((p) => p.id !== id));
  };

  // Calculations
  const sumExtras = useMemo(() => {
    return payments.reduce((acc, curr) => acc + curr.amount, 0);
  }, [payments]);

  const totalBruto = baseSalary + sumExtras;

  const taxDetails = useMemo(() => {
    return calculateTaxes(totalBruto);
  }, [totalBruto]);

  // Salary to display at the top-right
  const finalSalaryDisplay = applyTaxes ? taxDetails.finalNet : totalBruto;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 shadow-xs relative transition-colors duration-200">
      
      {/* Upper Grid: Group details and Target Salary identified at top-right */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between border-b border-slate-205 dark:border-slate-800 pb-5 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#002A8F]/10 dark:bg-blue-500/15 border border-[#002A8F]/20 px-2.5 py-1 text-xs font-extrabold text-[#002A8F] dark:text-blue-400">
            <span className="h-2 w-2 rounded-full bg-[#CF142B] animate-pulse"></span>
            Resultado del Cálculo
          </span>
          <h2 className="mt-2 text-xl font-extrabold text-slate-800 dark:text-white sm:text-2xl">
            Grupo de Complejidad {selectedGroup.id}
          </h2>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-[#002A8F] dark:text-blue-400" />
              Jornada: <span className="font-bold text-slate-800 dark:text-white">{selectedHours} horas/semana</span>
            </span>
            <span className="h-3 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:inline"></span>
            <span>
              Escala Base: <span className="font-bold text-slate-800 dark:text-white">{baseSalary} CUP</span>
            </span>
          </div>
        </div>

        {/* Highlighted identified salary on top-right (Cuban flagship layout) */}
        <div className="self-stretch sm:self-center p-4 rounded-2xl shadow-sm min-w-[220px] text-right border bg-[#002A8F] text-white border-[#002A8F]">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-blue-200">
            Salario Neto (A Devengar)
          </p>

          <div className="mt-1 flex items-baseline justify-end gap-1.5">
            <span className="text-2xl font-black font-sans leading-none tracking-tight text-white">
              {finalSalaryDisplay.toLocaleString("es-CU", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <span className="text-xs font-black text-blue-200">CUP</span>
          </div>
          
          <div className="mt-2 pt-2 border-t flex items-center justify-between text-xs gap-2 border-blue-500/30 text-blue-105">
            <span>Antes: <b>{anteriorSalary} CUP</b></span>
            <span className="flex items-center gap-0.5 font-black text-blue-200">
              <TrendingUp className="h-3.5 w-3.5" />
              +{(((baseSalary - anteriorSalary) / anteriorSalary) * 100).toFixed(0)}%
            </span>
          </div>
        </div>
      </div>

      {/* Main interactive controls */}
      <div className="space-y-6">
        
        {/* SECTION 1: Pagos Adicionales */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 p-4 shadow-2xs transition-colors duration-200">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5 mb-3.5">
            <h3 className="text-sm font-bold text-slate-850 dark:text-white flex items-center gap-2">
              <DollarSign className="h-4.5 w-4.5 text-[#002A8F] dark:text-blue-400" />
              1. Pagos Adicionales (Bonificaciones)
            </h3>
            <span className="text-xs font-bold text-[#002A8F] dark:text-blue-400 bg-[#002A8F]/10 dark:bg-[#002A8F]/20 border border-[#002A8F]/15 px-2.5 py-0.5 rounded-full">
              Suman: +{sumExtras.toFixed(0)} CUP
            </span>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
            Introduzca otros pagos adicionales mensuales asignados a su puesto por la legislación vigente (antigüedad, maestrías o doctorados, perfeccionamiento, turnicidad, etc.).
          </p>

          {/* Form to add custom payments */}
          <form onSubmit={handleAddPayment} className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 mb-4">
            <div className="sm:col-span-2">
              <input
                id="payment-name-input"
                type="text"
                value={newPaymentName}
                onChange={(e) => setNewPaymentName(e.target.value)}
                placeholder="Nombre (ej. Maestría o Doctorado)"
                className="block w-full rounded-lg border border-slate-205 dark:border-slate-755 bg-white dark:bg-slate-950 px-3 py-2.5 text-xs text-slate-855 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-[#002A8F] dark:focus:border-blue-500 focus:outline-hidden"
              />
            </div>
            <div className="flex gap-2">
              <input
                id="payment-amount-input"
                type="number"
                value={newPaymentAmount}
                onChange={(e) => setNewPaymentAmount(e.target.value)}
                placeholder="Monto CUP"
                className="block w-full rounded-lg border border-slate-205 dark:border-slate-755 bg-white dark:bg-slate-950 px-3 py-2.5 text-xs text-slate-855 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-[#002A8F] dark:focus:border-blue-500 focus:outline-hidden"
              />
              <button
                id="btn-add-payment"
                type="submit"
                className="flex items-center justify-center rounded-lg bg-[#002A8F] text-white px-3 hover:bg-blue-800 transition-colors cursor-pointer active:scale-95 shrink-0"
                title="Añadir pago"
              >
                <Plus className="h-4.5 w-4.5" />
              </button>
            </div>
          </form>

          {/* Quick recommendations */}
          {payments.length < 5 && (
            <div className="mb-4">
              <span className="block text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
                Sugerencias rápidas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_BONUSES.map((bonus) => (
                  <button
                    key={bonus.name}
                    type="button"
                    onClick={() => handleAddSuggested(bonus.name, bonus.amount)}
                    className="inline-flex items-center gap-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 text-[11px] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all font-semibold cursor-pointer"
                  >
                    <span>{bonus.name}</span>
                    <span className="text-[#002A8F] dark:text-blue-400 font-bold">+{bonus.amount}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* List of active payments */}
          {payments.length > 0 ? (
            <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
              {payments.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between rounded-lg bg-white dark:bg-slate-950/60 p-2.5 text-xs border border-slate-200 dark:border-slate-800 transition-all hover:bg-slate-50 dark:hover:bg-slate-900"
                >
                  <span className="font-bold text-slate-700 dark:text-slate-300">{p.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-850 dark:text-white font-mono">+{p.amount} CUP</span>
                    <button
                      type="button"
                      onClick={() => handleRemovePayment(p.id)}
                      className="text-slate-400 hover:text-[#CF142B] dark:hover:text-red-400 transition-colors cursor-pointer"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-955/20 text-xs text-slate-500">
              No se han agregado pagos adicionales.
            </div>
          )}
        </div>

        {/* SECTION 2: Aplicar Impuestos */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 p-4 shadow-2xs transition-colors duration-200">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5 mb-3.5">
            <h3 className="text-sm font-bold text-slate-850 dark:text-white flex items-center gap-2">
              <Percent className="h-4.5 w-4.5 text-[#002A8F] dark:text-blue-400" />
              2. Impuestos y Seguridad Social Aplicados
            </h3>
            <span className="inline-flex items-center rounded-md bg-[#002A8F]/10 dark:bg-blue-500/15 border border-[#002A8F]/20 text-[#002A8F] dark:text-blue-400 text-[10px] font-extrabold px-2.5 py-1 uppercase tracking-wider">
              Efectuado de Oficio
            </span>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
            Muestra el descuento automático de la contribución especial a la Seguridad Social (5%) y la escala del Impuesto sobre Ingresos Personales de Cuba exigidos por ley.
          </p>

          <div className="rounded-xl border border-slate-205 dark:border-slate-800 bg-white/60 dark:bg-slate-950 p-4 space-y-3 font-sans transition-colors duration-200">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#002A8F] dark:text-blue-400 uppercase tracking-widest border-b border-slate-105 dark:border-slate-800 pb-2">
              <CheckCircle2 className="h-4.5 w-4.5 text-[#002A8F] dark:text-blue-400 shrink-0" />
              <span>Desglose de cálculo (Deducciones)</span>
            </div>

            {/* Formula Steps */}
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              {/* Step 1 */}
              <div className="flex justify-between items-center">
                <span className="font-semibold">Monto inicial (Base + Pagos):</span>
                <span className="font-extrabold text-slate-800 dark:text-white font-mono">{totalBruto.toFixed(2)} CUP</span>
              </div>

              {/* Step 2 */}
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 font-semibold">
                  • CSS / Seguridad Social (5%):
                  <div className="group relative inline-block">
                    <Info className="h-3.5 w-3.5 text-slate-405 dark:text-slate-500 cursor-pointer" />
                    <div className="pointer-events-none absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] rounded-md p-2 w-48 shadow-xl text-center z-12 leading-relaxed">
                      Contribución de asignación jubilatoria aplicable sobre el monto total.
                    </div>
                  </div>
                </span>
                <span className="font-extrabold text-[#CF142B] font-mono">-{taxDetails.discount5.toFixed(2)} CUP</span>
              </div>

              <div className="flex justify-between items-center bg-slate-105 dark:bg-slate-900 px-2 py-1.5 rounded-lg text-[#002A8F] dark:text-blue-400 border border-slate-200 dark:border-slate-800 font-extrabold font-mono text-center">
                <span>Resultado tras el 5%:</span>
                <span>{taxDetails.after5Percent.toFixed(2)} CUP</span>
              </div>

              {/* Step 3 */}
              <div className="flex justify-between items-center">
                <span className="font-semibold">• Mínimo exento restar:</span>
                <span className="font-bold text-slate-550 dark:text-slate-500 font-mono">-3,260.00 CUP</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold">Base Imponible resultante:</span>
                <span className="font-bold text-slate-800 dark:text-white font-mono">
                  {taxDetails.minus3260 > 0 ? `${taxDetails.minus3260.toFixed(2)} CUP` : "Exento (0.00 CUP)"}
                </span>
              </div>

              {/* Step 4 */}
              {taxDetails.minus3260 > 0 ? (
                <div className="flex justify-between items-center border-t border-dashed border-slate-200 dark:border-slate-800 pt-2">
                  <span className="flex items-center gap-1 font-semibold">
                    • Impuesto Ingresos Personales (<b>{taxDetails.taxRate * 100}%</b>):
                    <div className="group relative inline-block">
                      <Info className="h-3.5 w-3.5 text-slate-405 dark:text-slate-550 cursor-pointer" />
                      <div className="pointer-events-none absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] rounded-md p-2 w-52 shadow-xl text-center z-12 leading-relaxed">
                        Si la base imponible excede los 9,510 CUP se aplica el 5%. Si es menor o igual, se aplica el 3%.
                      </div>
                    </div>
                  </span>
                  <div className="text-right">
                    <span className="font-extrabold text-[#CF142B] font-mono">-{taxDetails.taxAmount.toFixed(2)} CUP</span>
                    <span className="block text-[10px] text-slate-500 font-mono mt-0.5">
                      ({taxDetails.taxRate * 100}% de {taxDetails.minus3260.toFixed(2)} CUP)
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center text-[#002A8F] dark:text-blue-400 font-medium border-t border-dashed border-slate-200 dark:border-slate-800 pt-2">
                  <span className="font-semibold">• Impuesto Ingresos Personales (Exento):</span>
                  <span className="font-bold font-mono">0.00 CUP</span>
                </div>
              )}

              {/* Step 5 */}
              <div className="mt-3.5 pt-3 border-t border-slate-250 dark:border-slate-800 flex justify-between items-baseline text-sm font-extrabold text-slate-850 dark:text-white">
                <span>Ingreso neto / Salario a cobrar:</span>
                <div className="text-right">
                  <span className="text-lg text-[#002A8F] dark:text-blue-400 font-extrabold font-mono">{taxDetails.finalNet.toLocaleString("es-CU", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })} CUP</span>
                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">
                    Equivale al {(taxDetails.finalNet / totalBruto * 100).toFixed(1)}% de su salario total
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
