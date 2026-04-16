import { motion } from 'motion/react';

export function BlueprintSuccess() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 max-w-xl mx-auto">
      <svg viewBox="0 0 300 200" className="w-full h-full text-brand-blue">
        {/* Horizontal & Vertical Axis */}
        <line x1="20" y1="180" x2="280" y2="180" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
        <line x1="20" y1="20" x2="20" y2="180" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />

        {/* Growth Curve */}
        <motion.path
          d="M20 160 Q 80 150, 140 100 T 280 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="drop-shadow-[0_0_10px_rgba(0,144,255,0.4)]"
        />

        {/* Success Data Nodes */}
        {[
          { x: 140, y: 100, label: '+15%' },
          { x: 280, y: 40, label: '+30%' }
        ].map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              className="fill-brand-blue"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.5 }}
            />
            <motion.text
              x={node.x + 10}
              y={node.y - 10}
              className="text-[10px] font-black fill-current opacity-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + i * 0.5 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}

        {/* Technical Data Tags */}
        <text x="30" y="30" className="text-[6px] font-black fill-current opacity-30 uppercase tracking-[0.3em]">SCALE_UP_PROTOCOL</text>
        <text x="220" y="195" className="text-[6px] font-black fill-current opacity-30 uppercase tracking-[0.3em]">TIME_TO_RESULT</text>

        {/* Scanning Line Effect */}
        <motion.rect
          x="20" y="20" width="1" height="160"
          className="fill-brand-blue opacity-10"
          animate={{ x: [20, 280, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
