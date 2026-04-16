import { motion } from 'motion/react';

export function KineticNexus() {

  const nodes = [
    { label: 'MARKETING_ACQUISITION', color: '#0090FF', delay: 0 },
    { label: 'IT_INFRASTRUCTURE', color: '#0A192F', delay: 0.2 },
    { label: 'SALES_ARCHITECTURE', color: '#00D1FF', delay: 0.4 }
  ];

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Background System Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-grid-premium pointer-events-none" />
      
      {/* Central Core - The Profit Module */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-20 w-32 h-32 rounded-3xl bg-white shadow-premium-deep border border-brand-blue/10 flex items-center justify-center overflow-hidden group"
      >
        <div className="absolute inset-0 bg-brand-blue/5 animate-pulse" />
        <div className="relative z-10 text-center">
          <div className="text-[10px] font-black tracking-[0.3em] text-brand-blue uppercase mb-1">PROFIT_CORE</div>
          <div className="h-[1px] w-8 bg-brand-blue/20 mx-auto" />
        </div>
        
        {/* Decorative Internal Lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/10" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-blue/10" />
      </motion.div>

      {/* Orbiting Nodes (The Pillars) */}
      {nodes.map((node, i) => {
        const angle = (i * 120 - 90) * (Math.PI / 180);
        const radius = 160;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div key={i} className="absolute inset-0 flex items-center justify-center">
            {/* Connecting Pulse Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.line
                x1="250"
                y1="250"
                x2={250 + x}
                y2={250 + y}
                stroke={node.color}
                strokeWidth="1"
                className="opacity-10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: node.delay + 0.5 }}
              />
              {/* Data Particle */}
              <motion.circle
                r="3"
                fill={node.color}
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 3, repeat: Infinity, delay: node.delay, ease: "linear" }}
                style={{ offsetPath: `path('M 250 250 L ${250 + x} ${250 + y}')` }}
                className="opacity-40"
              />
            </svg>

            {/* The Node itself */}
            <motion.div
              initial={{ scale: 0, opacity: 0, x, y }}
              animate={{ scale: 1, opacity: 1, x, y }}
              transition={{ duration: 0.8, delay: node.delay }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="absolute w-40 p-4 rounded-2xl bg-white border border-black/[0.03] shadow-premium backdrop-blur-sm group cursor-pointer"
            >
              {/* Technical Indicator */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }} />
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">ACTIVE_NODE_{i + 1}</div>
              </div>
              
              <div className="text-[11px] font-black text-text-title uppercase tracking-tighter mb-1 truncate">
                {node.label.split('_')[0]}
              </div>
              <div className="h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: node.delay + 1 }}
                  className="h-full"
                  style={{ backgroundColor: node.color }}
                />
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Outer Glow Effects */}
      <div className="absolute inset-0 -z-1 bg-radial-glow opacity-30" />
      
      {/* Technical Labels */}
      <div className="absolute bottom-4 right-4 text-[8px] font-mono font-bold text-slate-300 uppercase tracking-[0.5em] hidden md:block">
        RESPECT_v2.4_CORE_SYSTEM_INTEGRATION
      </div>
    </div>
  );
}
