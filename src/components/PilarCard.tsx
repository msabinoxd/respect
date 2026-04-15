import { Link } from 'react-router-dom';
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
      <Card interactive className="relative group">
        {/* Icon + Badge */}
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pilar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <pilar.icon size={28} className="text-white" />
        </div>

        {/* Badge label */}
        <span className={`text-[10px] font-bold uppercase tracking-widest ${pilar.accentColor} mb-2 block`}>
          {t(`pilares_data.${pilar.id}.badge`)}
        </span>

        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
          {t(`pilares_data.${pilar.id}.title`)}
        </h3>

        <p className="text-text-muted leading-relaxed mb-6 font-medium text-sm">
          {t(`pilares_data.${pilar.id}.tagline`)}
        </p>

        {/* Top 3 services */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {topServices.map((svc) => (
            <li key={svc.key} className="flex items-center gap-3 text-sm text-text-light/80">
              <svc.icon size={16} className="text-text-muted flex-shrink-0" />
              {t(`pilares_data.${pilar.id}.services.${svc.key}.title`)}
            </li>
          ))}
        </ul>

        {/* Actions */}
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

          <Link
            to={`/${pilar.id}`}
            className="text-center text-xs font-bold uppercase tracking-wider text-text-muted hover:text-text-light/80 transition-colors py-1"
          >
            {t('pilares.ver_detalhes')}
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
