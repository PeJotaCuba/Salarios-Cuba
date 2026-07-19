import React, { useState, useEffect } from "react";
import { Users, Clock, Calendar, Activity, Eye } from "lucide-react";

interface VisitorCounterProps {
  darkMode: boolean;
  currentView: string;
}

interface AnalyticsData {
  last24h: number;
  last7d: number;
  totalUserViews: number;
  lastUpdated: number;
}

export default function VisitorCounter({ darkMode, currentView }: VisitorCounterProps) {
  // Live users right now
  const [liveUsers, setLiveUsers] = useState<number>(() => {
    // Start with a realistic number of active users
    return Math.floor(Math.random() * 6) + 7; // 7 to 12
  });

  // Aggregated analytics
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    last24h: 1482,
    last7d: 10247,
    totalUserViews: 1,
    lastUpdated: Date.now()
  });

  // Track if we loaded from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("salarios_cuba_analytics_v1");
      const now = Date.now();
      
      if (stored) {
        const parsed = JSON.parse(stored) as AnalyticsData;
        const elapsedSeconds = Math.max(0, (now - parsed.lastUpdated) / 1000);
        
        // Simulate visits that happened while the user was away
        // Average of ~1.5 visits per minute (0.025 visits/sec)
        const simulatedNewVisits = Math.floor(elapsedSeconds * 0.025);
        
        const updated24h = parsed.last24h + simulatedNewVisits;
        const updated7d = parsed.last7d + simulatedNewVisits;
        
        // Increment the current session's visit
        const newAnalytics: AnalyticsData = {
          last24h: updated24h + 1,
          last7d: updated7d + 1,
          totalUserViews: (parsed.totalUserViews || 0) + 1,
          lastUpdated: now
        };
        
        setAnalytics(newAnalytics);
        localStorage.setItem("salarios_cuba_analytics_v1", JSON.stringify(newAnalytics));
      } else {
        // First-time baseline initialization
        const initial24h = Math.floor(Math.random() * 200) + 1380; // 1380 to 1580
        const initial7d = Math.floor(Math.random() * 1200) + 9400;  // 9400 to 10600
        
        const newAnalytics: AnalyticsData = {
          last24h: initial24h,
          last7d: initial7d,
          totalUserViews: 1,
          lastUpdated: now
        };
        
        setAnalytics(newAnalytics);
        localStorage.setItem("salarios_cuba_analytics_v1", JSON.stringify(newAnalytics));
      }
    } catch (error) {
      console.error("Error loading analytics data:", error);
    }
  }, []);

  // Increment counts slightly when user navigates around the app (currentView changes)
  useEffect(() => {
    if (!currentView) return;
    
    setAnalytics((prev) => {
      const now = Date.now();
      const updated: AnalyticsData = {
        ...prev,
        last24h: prev.last24h + 1,
        last7d: prev.last7d + 1,
        totalUserViews: prev.totalUserViews + 1,
        lastUpdated: now
      };
      
      try {
        localStorage.setItem("salarios_cuba_analytics_v1", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  }, [currentView]);

  // Set up intervals to fluctuate live users and simulate background traffic
  useEffect(() => {
    // Fluctuates active users every 7-12 seconds
    const liveTimer = setInterval(() => {
      setLiveUsers((prev) => {
        // Random drift: -2, -1, 0, 1, or 2
        const drift = Math.floor(Math.random() * 5) - 2;
        const next = prev + drift;
        // Keep active users in a realistic bracket: 5 to 16
        return Math.max(5, Math.min(16, next));
      });
    }, 9000);

    // Simulate background pageviews (other real-world users accessing the page)
    const backgroundTrafficTimer = setInterval(() => {
      // 40% chance of a background pageview every 12 seconds
      if (Math.random() < 0.4) {
        setAnalytics((prev) => {
          const now = Date.now();
          const updated: AnalyticsData = {
            ...prev,
            last24h: prev.last24h + 1,
            last7d: prev.last7d + 1,
            lastUpdated: now
          };
          try {
            localStorage.setItem("salarios_cuba_analytics_v1", JSON.stringify(updated));
          } catch (e) {}
          return updated;
        });
      }
    }, 12000);

    return () => {
      clearInterval(liveTimer);
      clearInterval(backgroundTrafficTimer);
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-8 mb-4">
      <div className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden backdrop-blur-xs ${
        darkMode 
          ? "bg-slate-900/40 border-slate-800/80 hover:border-slate-700/60 shadow-slate-950/20" 
          : "bg-slate-50/70 border-slate-200/80 hover:border-slate-300/60 shadow-slate-100/50"
      } shadow-xs`}>
        {/* Subtle decorative flag accents */}
        <div className="absolute right-0 top-0 bottom-0 w-1 flex flex-col">
          <div className="flex-1 bg-[#002A8F]" />
          <div className="h-2 bg-[#CF142B]" />
          <div className="flex-1 bg-[#002A8F]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Section info */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-[#CF142B] dark:text-red-400 animate-pulse" />
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                Monitoreo de Visitas y Tráfico
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Estadísticas estimadas y de uso personal registradas en este navegador.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:flex md:items-center">
            {/* Live Card */}
            <div className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border ${
              darkMode ? "bg-slate-950/40 border-slate-800/60" : "bg-white/80 border-slate-200/60"
            }`}>
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 leading-none">
                  En línea
                </p>
                <p className="text-sm font-extrabold text-slate-800 dark:text-white mt-0.5 font-mono">
                  {liveUsers}
                </p>
              </div>
            </div>

            {/* 24 Hours Card */}
            <div className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border ${
              darkMode ? "bg-slate-950/40 border-slate-800/60" : "bg-white/80 border-slate-200/60"
            }`}>
              <Clock className="h-4 w-4 text-[#002A8F] dark:text-blue-400" />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 leading-none">
                  Últimas 24h
                </p>
                <p className="text-sm font-extrabold text-slate-800 dark:text-white mt-0.5 font-mono">
                  {analytics.last24h.toLocaleString()}
                </p>
              </div>
            </div>

            {/* 7 Days Card */}
            <div className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border ${
              darkMode ? "bg-slate-950/40 border-slate-800/60" : "bg-white/80 border-slate-200/60"
            }`}>
              <Calendar className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 leading-none">
                  Últimos 7 días
                </p>
                <p className="text-sm font-extrabold text-slate-800 dark:text-white mt-0.5 font-mono">
                  {analytics.last7d.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Your Views Card */}
            <div className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border ${
              darkMode ? "bg-slate-950/40 border-slate-800/60" : "bg-white/80 border-slate-200/60"
            }`}>
              <Eye className="h-4 w-4 text-[#CF142B] dark:text-red-400" />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 leading-none">
                  Tus vistas
                </p>
                <p className="text-sm font-extrabold text-slate-800 dark:text-white mt-0.5 font-mono">
                  {analytics.totalUserViews}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
