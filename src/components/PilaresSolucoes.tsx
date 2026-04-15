import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Megaphone, Server, Handshake, ArrowRight, BarChart3, Globe, Bot, Code2, Shield, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA } from '../config';
import { Button, Card, Badge, Section, Container } from './base';

const PILARES_META = [
  {
    id: 'marketing',
    icon: Megaphone,
    features: [
      { icon: BarChart3, key: 'f1' },
      { icon: Globe, key: 'f2' },
      { icon: Bot, key: 'f3' },
    ],
  },
  {
    id: 'ti',
    icon: Server,
    features: [
      { icon: Code2, key: 'f1' },
      { icon: Shield, key: 'f2' },
      { icon: Server, key: 'f3' },
    ],
  },
  {
    id: 'vendas',
    icon: Handshake,
    features: [
      { icon: Bot, key: 'f1' },
      { icon: Users, key: 'f2' },
      { icon: Megaphone, key: 'f3' },
    ],
  },
];

export function PilaresSolucoes() {
  const { t } = useTranslation();

  return (
    <Section variant="navy" id="servicos" className="relative">

      {/* Detalhe de fundo */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[rgba(0,144,255,0.05)] to-transparent" />

      <Container size="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerSlow}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div variants={fadeUpPremium}>
            <Badge icon={Handshake} label={t('pilares.badge')} variant="light" className="mb-6" />
          </motion.div>

          <motion.h2
            variants={fadeUpPremium}
            className="text-[32px] sm:text-[48px] md:text-[64px] font-black mb-6 text-white tracking-tighter uppercase leading-tight"
          >
            {t('pilares.headline')} <br className="hidden md:block" />
            <span className="text-gradient-builderall">{t('pilares.headline_highlight')}</span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-xl text-text-light/80 w-full max-w-4xl leading-relaxed font-medium"
          >
            {t('pilares.subline')}{' '}
            <span className="text-white font-black">{t('pilares.subline_strong')}</span>
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerSlow}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {PILARES_META.map((pilar, i) => (
            <motion.div key={i} variants={fadeUpPremium} className="h-full">
              <Card interactive className="relative group text-left overflow-hidden border-none">

                {/* Linha azul superior */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-cyan" />

                <div className="mb-8 mt-2">
                  <span className="text-[11px] font-black uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-md">
                    {t(`pilares.${pilar.id}.badge`)}
                  </span>
                </div>

                <h3 className="text-[24px] font-black text-white mb-4 tracking-tighter uppercase leading-none">
                  {t(`pilares.${pilar.id}.title`)}
                </h3>

                <p className="text-[15px] text-text-light leading-relaxed mb-8 flex-1">
                  {t(`pilares.${pilar.id}.description`)}
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-10">
                  {pilar.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-text-light">
                      <div className="w-8 h-8 rounded-full bg-bg-light flex items-center justify-center flex-shrink-0">
                        <feat.icon size={16} className="text-brand-blue" />
                      </div>
                      {t(`pilares.${pilar.id}.${feat.key}`)}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 mt-auto">
                  <Button
                    variant="secondary"
                    size="md"
                    icon={ArrowRight}
                    onClick={() => trackAndOpenWA(t(`pilares_data.${pilar.id}.msg`), 'Service_Card_Click')}
                    className="w-full"
                  >
                    {t(`pilares.${pilar.id}.cta`)}
                  </Button>
                  <Link
                    to={`/${pilar.id}`}
                    className="text-center text-sm font-bold uppercase tracking-widest text-brand-blue hover:text-white transition-colors py-2"
                  >
                    {t('pilares.ver_detalhes')}
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
