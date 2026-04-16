import { motion } from 'motion/react';

export function BlueprintTI() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <svg viewBox="0 0 200 160" className="w-full h-full text-[var(--foreground)] opacity-60">
        {/* Architecture Blocks */}
        {[
          { x: 30, y: 60, w: 40, h: 40 },
          { x: 130, y: 60, w: 40, h: 40 },
          { x: 80, y: 20, w: 40, h: 30 },
          { x: 80, y: 110, w: 40, h: 30 }
        ].map((block, i) => (
          <motion.rect
            key={i}
            x={block.x}
            y={block.y}
            width={block.w}
            height={block.h}
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.3 }}
            className="opacity-20"
          />
        ))}

        {/* Connecting Lines */}
        <motion.path
          d="M70 80 H 130 M100 50 V 110"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing Core */}
        <motion.circle
          cx="100"
          cy="80"
          r="8"
          className="fill-brand-blue opacity-10"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="100" cy="80" r="2" className="fill-brand-blue" />

        {/* Small Tech Details */}
        <motion.path
          d="M40 70 H 60 M40 80 H 55 M40 90 H 60"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-40"
        />
        
        <text x="30" y="55" className="text-[5px] font-black fill-current opacity-30 uppercase tracking-widest">INFRA_V4</text>
        <text x="130" y="55" className="text-[5px] font-black fill-current opacity-30 uppercase tracking-widest">NODE_ACTIVE</text>
      </svg>
    </div>
  );
}
