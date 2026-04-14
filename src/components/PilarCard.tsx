import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { fadeUpPremium } from '../shared/animations.premium';
import { trackAndOpenWA } from '../config';
import { Card, Button } from './base';
import type { Pilar } from '../data/pilares';

interface PilarCardProps {
  pilar: Pilar;
}

export function PilarCard({ pilar }: PilarCardProps) {
  const topServices = pilar.services.slice(0, 3);

  return (
    <motion.div variants={fadeUpPremium} className="h-full">
      <Card interactive className="relative group">
        {/* Icon + Badge */}
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pilar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <pilar.icon size={28} className="text-white" />
        </div>

        {/* Badge label */}
        <span className={`text-[10px] font-bold uppercase tracking-widest ${pilar.accentColor} mb-2 block`}>
          {pilar.badge}
        </span>

        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
          {pilar.title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-6 font-medium text-sm">
          {pilar.tagline}
        </p>

        {/* Top 3 services */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {topServices.map((svc) => (
            <li key={svc.title} className="flex items-center gap-3 text-sm text-slate-300">
              <svc.icon size={16} className="text-slate-500 flex-shrink-0" />
              {svc.title}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button
            variant="secondary"
            size="md"
            icon={ArrowRight}
            onClick={() => trackAndOpenWA(pilar.msg, `Pilar_${pilar.glowColor}_Click`)}
            className="w-full"
          >
            {pilar.cta}
          </Button>

          <Link
            to={`/${pilar.id}`}
            className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-300 transition-colors py-1"
          >
            Ver todos os serviços →
          </Link>
        </div>

        {/* Hover Glow */}
        <div
          className={`absolute -inset-[1px] bg-gradient-to-r ${pilar.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`}
        />
      </Card>
    </motion.div>
  );
}
