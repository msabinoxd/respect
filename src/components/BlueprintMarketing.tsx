import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function BlueprintMarketing() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <svg viewBox="0 0 200 160" className="w-full h-full text-brand-blue opacity-80">
        {/* Connection Lines */}
        <motion.path
          d="M40 80 L100 40 L160 80 L100 120 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="opacity-20"
        />
        <motion.path
          d="M40 80 L160 80 M100 40 L100 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-10"
        />

        {/* Nodes */}
        {[
          { x: 40, y: 80 },
          { x: 100, y: 40 },
          { x: 160, y: 80 },
          { x: 100, y: 120 },
          { x: 100, y: 80 }
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: i * 0.2, duration: 1 }}
          />
        ))}

        {/* Flowing Dots */}
        {[1, 2, 3].map((i) => (
          <motion.circle
            key={`flow-${i}`}
            r="1.5"
            fill="currentColor"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: [0, 1, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 1,
              ease: "linear" 
            }}
            style={{ 
              offsetPath: "path('M40 80 L100 40 L160 80 L100 120 Z')",
              offsetRotate: "auto"
            }}
          />
        ))}
        
        {/* Technical Labels */}
        <text x="10" y="20" className="text-[6px] font-black fill-current opacity-40 uppercase tracking-widest">
          {t('blueprints.marketing.flow')}
        </text>
        <text x="160" y="140" className="text-[6px] font-black fill-current opacity-40 uppercase tracking-widest text-right" textAnchor="end">
          {t('blueprints.marketing.sync')}
        </text>
      </svg>
    </div>
  );
}
