import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export function InteractiveGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Interactive Glow / Spotlight */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), rgba(0, 144, 255, 0.08), transparent 80%)`,
          // We apply the coordinates via style variables
          // @ts-ignore
          '--x': smoothX ? `${smoothX}px` : '50%',
          // @ts-ignore
          '--y': smoothY ? `${smoothY}px` : '50%',
        } as any}
      />

      {/* Particles / Dots Grid (static but revealed by glow) */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
    </div>
  );
}
