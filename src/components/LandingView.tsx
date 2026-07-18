/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, TrendingUp, DollarSign, Award, Landmark, BookOpen, HeartPulse, Sparkles, Trophy, Atom } from "lucide-react";

interface LandingViewProps {
  onGoToCalculator: () => void;
  onGoToResolution: (id: string) => void;
}

export default function LandingView({ onGoToCalculator, onGoToResolution }: LandingViewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Hero Explainer Header */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-800 bg-gradient-to-br from-[#002A8F]/5 via-white/50 to-[#CF142B]/5 dark:from-blue-950/20 dark:via-slate-900/40 dark:to-red-950/10 p-6 sm:p-10 shadow-sm">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 -translate-x-12 translate-y-12 h-64 w-64 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 dark:bg-blue-500/15 px-3 py-1 text-xs font-bold text-[#002A8F] dark:text-blue-400 mb-4 border border-blue-200/50 dark:border-blue-500/20">
            <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
            Nueva Reforma Salarial • Julio 2026
          </div>
          
          <h2 className="text-3xl font-black tracking-tight text-slate-800 dark:text-white sm:text-4xl leading-tight">
            Guía y Simulador Oficial del <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002A8F] to-blue-500 dark:from-blue-400 dark:to-cyan-400">
              Incremento Salarial en Cuba
            </span>
          </h2>
          
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Las nuevas resoluciones del Ministerio de Trabajo y Seguridad Social actualizan la escala salarial del país, implementando una subida sustancial en el salario mínimo y reestructurando las bonificaciones y compensaciones para sectores clave como <b>Salud Pública</b>, <b>Educación</b>, <b>Cultura</b>, <b>Deportes</b> y <b>Ciencia</b>.
          </p>
        </div>
      </div>

      {/* Main Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Metric 1: Minimum Wage */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 text-[#CF142B] opacity-15">
            <DollarSign className="h-14 w-14" />
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Salario Mínimo Nacional</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[#CF142B] dark:text-red-400 tracking-tight">3,210 CUP</span>
            <span className="text-xs text-emerald-500 font-bold flex items-center gap-0.5">
              <TrendingUp className="h-3.5 w-3.5" /> +52.8%
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-normal">
            Incrementa la base salarial del país (Grupo I) desde los 2,100 CUP anteriores. Tarifa horaria mínima fijada en <b>16.84 CUP/hora</b>.
          </p>
        </div>

        {/* Metric 2: Complexity Groups */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 text-[#002A8F] opacity-15">
            <Landmark className="h-14 w-14" />
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Escala de Complejidad</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[#002A8F] dark:text-blue-400 tracking-tight">32 Grupos</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">I al XXXII</span>
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-normal">
            El rango salarial se expande progresivamente para proteger la pirámide, alcanzando un tope básico de hasta <b>14,535 CUP</b> en jornadas de 44h.
          </p>
        </div>

        {/* Metric 3: Target sectors */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 text-amber-500 opacity-15">
            <Award className="h-14 w-14" />
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Adicionales y Antigüedad</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-amber-500 dark:text-amber-400 tracking-tight">+1k a +3k</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">CUP/mes</span>
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-normal">
            Nuevos pagos mensuales acumulativos de antigüedad por años de servicio en Salud y Educación de hasta <b>3,000 CUP</b>.
          </p>
        </div>

      </div>

      {/* Percentage-based and Section Breakdown */}
      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 space-y-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-[#002A8F] dark:text-blue-400" />
          ¿Cómo incrementan los salarios de forma general?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3 leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              El incremento salarial no solo actualiza el mínimo, sino que introduce un reajuste proporcional de toda la pirámide de complejidad del sector presupuestado cubano:
            </p>
            <ul className="space-y-2.5 list-disc pl-4 text-xs">
              <li>
                <strong className="text-slate-800 dark:text-white">Grupos del I al VI (Servicios y Administrativos Básicos):</strong> Registran un incremento promedio de entre el <b>50% y el 53%</b> de su salario anterior.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-white">Grupos del VII al XXV (Personal Técnico y Profesionales):</strong> Experimentan incrementos de entre el <b>45% y el 51%</b> según su rango de especialización.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-white">Grupos del XVII al XXII (Cuadros Directivos):</strong> El salario básico de dirección se eleva para responder al nivel de exigencia, compensando el ejercicio de dirección.
              </li>
            </ul>
          </div>
          
          <div className="space-y-3 leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              Adicionalmente, se protegen y actualizan de forma muy significativa las compensaciones asociadas al desempeño y la superación profesional:
            </p>
            <ul className="space-y-2.5 list-disc pl-4 text-xs">
              <li>
                <strong className="text-slate-800 dark:text-white">Compensación por Postgrado:</strong> Maestría o especialidad médica otorga <b>440 CUP</b> fijos, mientras que el grado científico de Doctor asciende a <b>825 CUP</b> mensuales.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-white">Pagos por Turno y Nocturnidad:</strong> Incrementan sustancialmente los pagos por horas de guardia nocturna (hasta <b>50 CUP por hora</b> para personal médico de guardia).
              </li>
              <li>
                <strong className="text-slate-800 dark:text-white">Zonas Rurales o Difícil Acceso:</strong> Se mantiene y refuerza el coeficiente preferencial para sectores como Caimanera y el Plan Turquino.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sectorial Shortcuts Grid */}
      <div className="space-y-4">
        <h3 className="text-md font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-xs">
          Explorar Resoluciones por Sectores Específicos
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button 
            onClick={() => onGoToResolution("R17")}
            className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white hover:bg-teal-500/5 dark:bg-slate-900/40 dark:hover:bg-teal-950/20 p-4 text-left transition-all hover:border-teal-500/40 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                <HeartPulse className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-white">Salud Pública</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">Médicos, enfermeras y antigüedad</p>
              </div>
            </div>
          </button>

          <button 
            onClick={() => onGoToResolution("R18")}
            className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white hover:bg-orange-500/5 dark:bg-slate-900/40 dark:hover:bg-orange-950/20 p-4 text-left transition-all hover:border-orange-500/40 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-white">Educación</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">Docentes, categorías y guardia</p>
              </div>
            </div>
          </button>

          <button 
            onClick={() => onGoToResolution("R12")}
            className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white hover:bg-amber-500/5 dark:bg-slate-900/40 dark:hover:bg-amber-950/20 p-4 text-left transition-all hover:border-amber-500/40 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                <Trophy className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-white">Deportes</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">Béisbol, medallas y estímulos</p>
              </div>
            </div>
          </button>

          <button 
            onClick={() => onGoToResolution("R20")}
            className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white hover:bg-purple-500/5 dark:bg-slate-900/40 dark:hover:bg-purple-950/20 p-4 text-left transition-all hover:border-purple-500/40 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Atom className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-white">Ciencia (CITMA)</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">Investigadores, tecnólogos</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Prominent Call to Action to Calculate Salary */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 pb-8">
        <button
          onClick={onGoToCalculator}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#002A8F] to-blue-600 dark:from-blue-600 dark:to-blue-500 text-white font-extrabold text-sm sm:text-base tracking-wide hover:shadow-lg hover:shadow-blue-500/10 active:scale-98 transition-all duration-200 cursor-pointer"
        >
          Calcular Mi Salario Nuevo
          <ArrowRight className="h-5 w-5 animate-pulse" />
        </button>
      </div>

    </div>
  );
}
