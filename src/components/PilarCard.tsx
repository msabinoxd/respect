import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium } from '../shared/animations.premium';
import { trackAndOpenWA } from '../config';
import { Card, Button } from './base';
import type { Pilar } from '../data/pilares';

interface PilarCardProps {
  pilar: Pilar;
}

export function PilarCard({ pilar }: PilarCardProps) {
  const { t } = useTranslation();
  const topServices = pilar.services.slice(0, 3);

  return (
    <motion.div variants={fadeUpPremium} className="h-full">
      <Card interactive className="relative group overflow-hidden">
        {/* Pilar Image Cover */}
        <div className="relative h-48 -mx-8 -mt-10 mb-8 overflow-hidden">
          <img
            src={pilar.image}
            alt={pilar.id}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-bg-navy/80 to-transparent opacity-60`} />
          
          {/* Icon Overlay */}
          <div
            className={`absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-gradient-to-br ${pilar.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <pilar.icon size={24} className="text-white" />
          </div>
        </div>

        {/* Badge label */}
        <span className={`text-[10px] font-bold uppercase tracking-widest ${pilar.accentColor} mb-2 block`}>
          {t(`pilares_data.${pilar.id}.badge`)}
        </span>

        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
          {t(`pilares_data.${pilar.id}.title`)}
        </h3>

        <p className="text-text-body leading-relaxed mb-6 font-medium text-sm">
          {t(`pilares_data.${pilar.id}.tagline`)}
        </p>

        {/* Top 3 services */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {topServices.map((svc) => (
            <li key={svc.key} className="flex items-center gap-3 text-sm text-text-body">
              <svc.icon size={16} className="text-text-muted flex-shrink-0" />
              {t(`pilares_data.${pilar.id}.services.${svc.key}.title`)}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3">
          <Button
            variant="secondary"
            size="md"
            icon={ArrowRight}
            onClick={() => trackAndOpenWA(t(`pilares_data.${pilar.id}.msg`), `Pilar_${pilar.glowColor}_Click`)}
            className="w-full"
          >
            {t(`pilares_data.${pilar.id}.cta`)}
          </Button>
        </div>

        {/* Hover Glow */}
        <div
          className={`absolute -inset-[1px] bg-gradient-to-r ${pilar.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`}
        />
      </Card>
    </motion.div>
  );
}
