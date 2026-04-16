import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function SovereignPreloader() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  
  const techLogs = [
    t('preloader.log1'),
    t('preloader.log2'),
    t('preloader.log3'),
    t('preloader.log4'),
    t('preloader.log5')
  ];

  useEffect(() => {
    // Only show once per session
    const hasLoaded = sessionStorage.getItem('respect_preloader_seen');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Sequence logs
    techLogs.forEach((log, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
      }, i * 400);
    });

    // Finalize
    setTimeout(() => {
      sessionStorage.setItem('respect_preloader_seen', 'true');
      setLoading(false);
    }, techLogs.length * 400 + 1000);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center p-8 overflow-hidden"
        >
          {/* Main Logo Container */}
          <div className="relative flex flex-col items-center gap-12 max-w-sm w-full">
            
            {/* Logo Respect (SVG Drawing) */}
            <div className="relative w-full aspect-[4/1] flex items-center justify-center">
               <svg viewBox="0 0 200 40" className="w-full text-text-title font-black fill-current">
                  <motion.text 
                    x="50%" 
                    y="50%" 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    className="text-4xl tracking-[-0.05em] uppercase"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    RESPECT
                  </motion.text>
                  {/* Underline Progress */}
                  <motion.rect 
                    x="0" 
                    y="35" 
                    width="200" 
                    height="2" 
                    className="fill-brand-blue"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
               </svg>
            </div>

            {/* Technical Logs Console */}
            <div className="w-full space-y-2 font-mono h-32 overflow-hidden border-t border-black/5 pt-8">
               <AnimatePresence>
                 {logs.map((log, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="text-[10px] text-text-muted/60 uppercase tracking-widest flex items-center gap-3"
                   >
                     <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                     {log}
                   </motion.div>
                 ))}
               </AnimatePresence>
            </div>
          </div>

          {/* Abstract Grid Pattern Background */}
          <div className="absolute inset-0 -z-1 opacity-[0.03] pointer-events-none"
               style={{
                 backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                 backgroundSize: '100px 100px'
               }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
