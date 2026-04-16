import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function DashboardMockup() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full max-w-[600px] aspect-[4/3] saas-card-premium p-1 group">
      {/* Internal Grid Pattern */}
      <div className="absolute inset-0 bg-dots-premium opacity-[0.05]" />
      
      {/* Dashboard Chrome */}
      <div className="flex flex-col h-full bg-[var(--background)]/80 backdrop-blur-xl rounded-[22px] overflow-hidden border border-[var(--color-glass-border-clean)]">
        {/* Toolbar */}
        <div className="h-10 border-b border-[var(--color-glass-border-clean)] flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2 hs-2 rounded-full bg-red-500/20" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
            <div className="w-2 h-2 rounded-full bg-green-500/20" />
          </div>
          <div className="mx-auto text-[8px] font-black tracking-widest text-text-muted opacity-40 uppercase">
            RESPECT STRATEGIC ENGINE v4.0
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 grid grid-cols-12 gap-4">
          {/* Main Visual - Wave Chart */}
          <div className="col-span-8 bg-brand-blue/5 rounded-xl border border-brand-blue/10 relative p-4 overflow-hidden">
             <div className="flex justify-between items-start mb-6">
                <div>
                   <div className="text-[8px] font-black text-brand-blue uppercase tracking-widest">{t('metrics.efficiency')}</div>
                   <div className="text-xl font-black text-text-title">+30%</div>
                </div>
                <div className="flex gap-1">
                   {[1,2,3,4].map(i => <div key={i} className="w-1 h-3 bg-brand-blue/20 rounded-full" />)}
                </div>
             </div>
             {/* Simple SVG Wave */}
             <svg viewBox="0 0 100 40" className="w-full h-24 text-brand-blue overflow-visible">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M0 35 Q 25 5, 50 25 T 100 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  d="M0 35 Q 25 5, 50 25 T 100 15 V 40 H 0 Z"
                  fill="currentColor"
                />
             </svg>
          </div>

          {/* Side Info */}
          <div className="col-span-4 flex flex-col gap-4">
             <div className="flex-1 bg-[var(--foreground)]/[0.02] rounded-xl border border-[var(--color-glass-border-clean)] p-4 flex flex-col justify-center">
                <div className="text-[7px] font-black text-text-muted uppercase tracking-widest mb-1">{t('metrics.cac')}</div>
                <div className="text-sm font-black text-text-title">-25%</div>
             </div>
             <div className="flex-1 bg-brand-blue rounded-xl p-4 flex flex-col justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                <div className="text-[7px] font-black text-white/60 uppercase tracking-widest mb-1">REVENUE FLOW</div>
                <div className="text-sm font-black text-white">ACTIVE</div>
             </div>
          </div>

          {/* Bottom Row */}
          <div className="col-span-12 h-16 bg-[var(--foreground)]/[0.02] rounded-xl border border-[var(--color-glass-border-clean)] p-4 flex items-center justify-between">
             <div className="flex gap-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex flex-col gap-1">
                     <div className="w-12 h-1 bg-[var(--foreground)]/5 rounded-full" />
                     <div className="w-8 h-1 bg-brand-blue/30 rounded-full" />
                  </div>
                ))}
             </div>
             <div className="w-10 h-10 rounded-lg bg-white dark:bg-white/10 flex items-center justify-center border border-[var(--color-glass-border-clean)]">
                <div className="w-4 h-4 rounded-full border-2 border-brand-blue border-t-white animate-spin" />
             </div>
          </div>
        </div>
      </div>

      {/* Floating Elements (Decorative) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 top-20 p-4 saas-card-premium bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-2xl border border-white/20 hidden md:block"
      >
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <div className="text-[9px] font-black tracking-widest uppercase text-text-title">SYNCING DATA</div>
         </div>
      </motion.div>
    </div>
  );
}
