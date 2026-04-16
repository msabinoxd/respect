import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function BlueprintMethodology() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
      <svg viewBox="0 0 400 300" className="w-full h-full text-brand-blue opacity-80">
        {/* Connection Path */}
        <motion.path
          d="M60 150 C 100 150, 100 60, 200 60 C 300 60, 300 240, 200 240 C 100 240, 100 150, 340 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="opacity-20"
        />

        {/* Nodes */}
        {[
          { x: 60, y: 150, label: '01' },
          { x: 200, y: 60, label: '02' },
          { x: 200, y: 240, label: '03' },
          { x: 340, y: 150, label: '04' }
        ].map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="20"
              className="fill-brand-blue opacity-5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.5 }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              className="fill-brand-blue"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.5 + 0.2 }}
            />
            <text 
              x={node.x} 
              y={node.y - 30} 
              className="text-[10px] font-black fill-current opacity-40 uppercase tracking-widest text-center"
              textAnchor="middle"
            >
              STEP_{node.label}
            </text>
          </g>
        ))}

        {/* Flowing Data Element */}
        <motion.circle
          r="3"
          className="fill-brand-blue shadow-[0_0_10px_rgba(0,144,255,0.8)]"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ 
            offsetPath: "path('M60 150 C 100 150, 100 60, 200 60 C 300 60, 300 240, 200 240 C 100 240, 100 150, 340 150')",
            offsetRotate: "auto"
          }}
        />

        <text x="10" y="20" className="text-[6px] font-black fill-current opacity-30 uppercase tracking-[0.4em]">
          {t('blueprints.methodology.map')}
        </text>
      </svg>
    </div>
  );
}
