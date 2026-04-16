import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from './base';

export function LGPDModal() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('respect_lgpd_consent');
    if (!consent) {
      // Delay slightly for dramatic effect
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('respect_lgpd_consent', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/40 backdrop-blur-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-xl saas-card-premium bg-white dark:bg-black p-8 md:p-12 relative overflow-hidden shadow-[0_0_100px_rgba(0,144,255,0.15)]"
          >
            {/* Technical Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -z-1" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
               <div className="w-20 h-20 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-10 border border-brand-blue/10 animate-pulse">
                  <ShieldCheck size={40} />
               </div>

               <h2 className="text-xl md:text-2xl font-black text-text-title tracking-widest uppercase mb-6 font-display">
                  {t('lgpd.modal_title')}
               </h2>
               
               <p className="text-text-body text-base md:text-lg font-medium opacity-60 leading-relaxed mb-10">
                  {t('lgpd.modal_text')}
               </p>

               <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full shadow-premium"
                    onClick={handleAccept}
                    icon={ArrowRight}
                  >
                    {t('lgpd.accept')}
                  </Button>
               </div>

               <div className="mt-8 pt-8 border-t border-[var(--color-glass-border-clean)] w-full flex justify-center items-center gap-6">
                  <Link 
                    to="/privacy" 
                    onClick={() => setIsOpen(false)}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue hover:opacity-70 transition-opacity flex items-center gap-2"
                  >
                     <Lock size={12} />
                     {t('lgpd.privacy_link')}
                  </Link>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
