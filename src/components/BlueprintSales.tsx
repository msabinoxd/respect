import { motion } from 'motion/react';

export function BlueprintSales() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <svg viewBox="0 0 200 160" className="w-full h-full text-brand-blue opacity-80">
        {/* Funnel Outline */}
        <motion.path
          d="M40 20 L160 20 L120 100 L120 140 L80 140 L80 100 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          className="opacity-20"
        />

        {/* Funnel Sections */}
        <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="0.5" className="opacity-10" />
        <line x1="80" y1="100" x2="120" y2="100" stroke="currentColor" strokeWidth="0.5" className="opacity-10" />

        {/* Falling Leads (Dots) */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={i}
            r="2"
            fill="currentColor"
            initial={{ cx: 60 + i * 20, cy: -20, opacity: 0 }}
            animate={{ 
              cx: [60 + i * 20, 100, 100],
              cy: [-20, 60, 150],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.6,
              ease: "easeIn" 
            }}
          />
        ))}

        {/* Conversion Spark */}
        <motion.circle
          cx="100"
          cy="140"
          r="4"
          className="fill-brand-blue opacity-20"
          animate={{ scale: [1, 2, 1], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        <text x="40" y="15" className="text-[6px] font-black fill-current opacity-40 uppercase tracking-widest">TRAFFIC_IN</text>
        <text x="110" y="150" className="text-[6px] font-black fill-current opacity-40 uppercase tracking-widest">CONVERSION_OUT</text>
      </svg>
    </div>
  );
}
