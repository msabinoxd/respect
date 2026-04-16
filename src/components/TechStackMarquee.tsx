import { motion } from 'motion/react';
import { Cloud, Code2, Database, Globe, Layers, ShieldCheck, Zap, Terminal } from 'lucide-react';

const STACK = [
  { name: 'AWS Cloud', icon: Cloud },
  { name: 'Google Cloud', icon: Cloud },
  { name: 'HubSpot CRM', icon: Database },
  { name: 'Stripe Payments', icon: CreditCard },
  { name: 'Meta Ads', icon: Zap },
  { name: 'Python Scripts', icon: Terminal },
  { name: 'React Architecture', icon: Code2 },
  { name: 'Vercel Edge', icon: Layers },
  { name: 'Stripe', icon: Zap },
  { name: 'PostgreSQL', icon: Database }
];

// Helper icon if CreditCard is missing (it's not but checking)
function CreditCard({ size }: { size: number }) {
  return <ShieldCheck size={size} />;
}

export function TechStackMarquee() {
  // Duplicate for seamless loop
  const totalItems = [...STACK, ...STACK, ...STACK];

  return (
    <div className="w-full bg-[var(--background)] py-20 overflow-hidden border-y border-[var(--color-glass-border-clean)] opacity-40 hover:opacity-100 transition-opacity duration-700">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 items-center px-8"
        >
          {totalItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--foreground)]/[0.03] flex items-center justify-center text-[var(--foreground)] group-hover:text-brand-blue group-hover:bg-brand-blue/5 transition-all duration-300">
                <item.icon size={20} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--foreground)]/40 group-hover:text-text-title group-hover:opacity-100 transition-all">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
