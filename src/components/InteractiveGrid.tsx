import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export function InteractiveGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Grid - Premium Minimal */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Interactive Spotlight Glow */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(800px circle at var(--x) var(--y), rgba(0, 144, 255, 0.06), transparent 80%)`,
          // @ts-ignore
          '--x': smoothX ? `${smoothX}px` : '50%',
          // @ts-ignore
          '--y': smoothY ? `${smoothY}px` : '50%',
        } as any}
      />

      {/* Technical Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Floating Particles (Simulated Data) */}
      <DataParticles mouseX={smoothX} mouseY={smoothY} />
    </div>
  );
}

function DataParticles({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  // We create a simple grid of particles that react slightly to the mouse
  const particles = Array.from({ length: 6 });

  return (
    <>
      {particles.map((_, i) => (
        <Particle key={i} index={i} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </>
  );
}

function Particle({ index, mouseX, mouseY }: { index: number; mouseX: any; mouseY: any }) {
  const initialX = (index * 200 + 100) % 1200;
  const initialY = (index * 150 + 200) % 600;

  const x = useTransform(mouseX, (v: number) => initialX + (v - 500) * 0.05 * (index + 1) * 0.5);
  const y = useTransform(mouseY, (v: number) => initialY + (v - 300) * 0.05 * (index + 1) * 0.5);

  return (
    <motion.div
      style={{ x, y }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1]
      }}
      transition={{ 
        duration: 3 + index, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute w-1 h-1 bg-brand-blue rounded-full"
    />
  );
}
