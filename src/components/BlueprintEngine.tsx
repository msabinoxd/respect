import { motion } from 'motion/react';

export function BlueprintEngine() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 max-w-2xl mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full text-brand-blue">
        {/* Connection Orbits */}
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-10"
        />

        {/* Central Core: PROFIT/MARGIN */}
        <g>
          <motion.circle
            cx="200"
            cy="200"
            r="40"
            className="fill-brand-blue opacity-5"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <circle cx="200" cy="200" r="10" className="fill-brand-blue" />
          <text 
             x="200" 
             y="260" 
             className="text-[12px] font-black fill-current opacity-80 uppercase tracking-widest"
             textAnchor="middle"
          >
            MARGEM_LÍQUIDA
          </text>
        </g>

        {/* Satellites: Marketing, CRM, TI */}
        {[
          { angle: -90, label: 'MARKETING', icon: 'MKT' },
          { angle: 30, label: 'CRM / COMERCIAL', icon: 'CRM' },
          { angle: 150, label: 'TECNOLOGIA / TI', icon: 'TI' }
        ].map((sat, i) => {
          const x = 200 + 120 * Math.cos((sat.angle * Math.PI) / 180);
          const y = 200 + 120 * Math.sin((sat.angle * Math.PI) / 180);
          
          return (
            <g key={i}>
              {/* Radial Connection */}
              <motion.line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeWidth="0.5"
                className="opacity-20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: i * 0.5, duration: 1 }}
              />
              
              {/* Satellite Node */}
              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.5 + 0.5 }}
              >
                <rect 
                  x={x - 30} 
                  y={y - 15} 
                  width="60" 
                  height="30" 
                  rx="6" 
                  className="fill-white dark:fill-black stroke-brand-blue/30 stroke-[0.5]" 
                />
                <text 
                  x={x} 
                  y={y + 5} 
                  className="text-[8px] font-black fill-current opacity-60 text-center"
                  textAnchor="middle"
                >
                  {sat.label}
                </text>
              </motion.g>

              {/* Data Flow Particles */}
              <motion.circle
                r="2"
                className="fill-brand-blue"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                style={{ 
                   offsetPath: `path('M 200 200 L ${x} ${y}')`,
                }}
              />
            </g>
          );
        })}

        <text x="10" y="20" className="text-[7px] font-black fill-current opacity-30 uppercase tracking-[0.4em]">RESPECT_CONSOLIDATED_ENGINE_V5.1</text>
      </svg>
    </div>
  );
}
