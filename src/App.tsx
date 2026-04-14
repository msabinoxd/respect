import { HashRouter, Routes, Route } from 'react-router-dom';
import { useScroll, motion } from 'motion/react';
import { Header } from './components/Header';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Home } from './pages/Home';
import { PilarDetalhe } from './pages/PilarDetalhe';

function AppLayout() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans">
      {/* Barra de progresso de scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 to-cyan-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketing" element={<PilarDetalhe id="marketing" />} />
          <Route path="/ti" element={<PilarDetalhe id="ti" />} />
          <Route path="/vendas" element={<PilarDetalhe id="vendas" />} />
        </Routes>
      </main>

      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
