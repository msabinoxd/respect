import { HashRouter, Routes, Route } from 'react-router-dom';
import { useScroll, motion } from 'motion/react';
import { Header } from './components/Header';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { LGPDModal } from './components/LGPDModal';
import { SovereignPreloader } from './components/SovereignPreloader';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CONFIG } from './config';

function AppLayout() {
  const { scrollYProgress } = useScroll();
  const uiVersionClass = CONFIG.UI_VERSION === 'V2' ? 'v2-theme' : '';

  return (
    <div className={`min-h-screen bg-white text-text-body font-sans transition-colors duration-500 ${uiVersionClass}`}>
      {/* Progress Bar (Global) - Pure Brand Blue */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-blue z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <WhatsAppFloat />
      <LGPDModal />
      <SovereignPreloader />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}
