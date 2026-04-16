import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';
import { trackAndOpenWA, CONFIG } from '../config';

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => trackAndOpenWA(CONFIG.wa.msgFloat, 'Float_WA_Click')}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer animate-[waPulse_2s_ease-in-out_infinite]"
          aria-label={t('common.speak_whatsapp_aria')}
        >
          <MessageCircle size={26} fill="white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
