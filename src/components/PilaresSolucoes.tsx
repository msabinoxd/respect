import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Target, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Badge, Container, Section } from './base';

export function PilaresSolucoes() {
  const { t } = useTranslation();

  return (
    <Section variant="light" id="solucoes" className="relative">
      <Container size="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerSlow}
          className="mb-20 text-center lg:text-left"
        >
          <motion.div variants={fadeUpPremium}>
            <Badge label={t('pilares.badge')} variant="blue" className="mb-6" />
          </motion.div>
          <motion.h2
            variants={fadeUpPremium}
            className="text-4xl md:text-6xl font-black text-text-title tracking-tighter mb-6 uppercase font-display"
          >
            {t('pilares.title_line1')}
            <br />
            <span className="text-brand-blue">{t('pilares.title_line2')}</span>
          </motion.h2>
          <motion.p
            variants={fadeUpPremium}
            className="text-text-body max-w-2xl font-medium text-lg lg:ml-0 mx-auto"
          >
            {t('pilares.subtitle')}
          </motion.p>
        </motion.div>

        {/* Bento Grid Implementation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerSlow}
          className="bento-grid"
        >
          {/* MARKETING - The Large Anchor (8 cols) */}
          <motion.div 
            variants={fadeUpPremium}
            className="col-span-12 lg:col-span-8 group"
          >
            <Link to="/marketing" className="block h-full">
              <div className="saas-card saas-card-hover h-full p-10 flex flex-col md:flex-row gap-10 overflow-hidden relative">
                <div className="flex-1 z-10">
                   <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform duration-500">
                     <TrendingUp size={28} />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-black text-text-title mb-4 uppercase tracking-tighter">
                     {t('pilares.marketing.title')}
                   </h3>
                   <p className="text-text-body font-medium mb-8 max-w-md">
                     {t('pilares.marketing.desc')}
                   </p>
                   <div className="flex flex-wrap gap-3 mb-10">
                     {['Performance', 'SEO Rank', 'Growth'].map(tag => (
                       <span key={tag} className="px-3 py-1 bg-brand-blue/5 text-brand-blue text-[10px] font-black uppercase tracking-widest rounded-md border border-brand-blue/10">
                         {tag}
                       </span>
                     ))}
                   </div>
                   <div className="flex items-center gap-2 text-brand-blue font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                     {t('pilares.cta')} <ArrowRight size={18} />
                   </div>
                </div>
                
                {/* Abstract Visual for Bento */}
                <div className="flex-1 relative hidden md:block">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
                  <img 
                    src="images/branding/respect_marketing_detail_3d_1776307382681.png" 
                    className="w-full h-auto object-contain relative z-10 group-hover:rotate-3 transition-transform duration-700" 
                    alt="Marketing"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* TI & DEVOPS - Side Block (4 cols) */}
          <motion.div 
            variants={fadeUpPremium}
            className="col-span-12 lg:col-span-4"
          >
            <Link to="/ti" className="block h-full">
              <div className="saas-card saas-card-hover h-full p-10 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-8">
                    <Code2 size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-text-title mb-4 uppercase tracking-tighter">
                    {t('pilares.ti.title')}
                  </h3>
                  <p className="text-text-body font-medium text-sm leading-relaxed">
                    {t('pilares.ti.desc')}
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-2 text-brand-cyan font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                  {t('pilares.cta')} <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* COMERCIAL - Bottom Full (12 cols) */}
          <motion.div 
            variants={fadeUpPremium}
            className="col-span-12"
          >
            <Link to="/vendas" className="block">
              <div className="saas-card saas-card-hover p-10 flex flex-col lg:flex-row items-center justify-between gap-10 group bg-brand-navy text-white overflow-hidden relative">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] -z-1" />
                
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10 text-center lg:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                    <Target size={32} />
                  </div>
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter">
                      {t('pilares.comercial.title')}
                    </h3>
                    <p className="text-white/70 font-medium">
                      {t('pilares.comercial.desc')}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="px-10 py-4 bg-white text-brand-navy-dark font-black uppercase tracking-widest rounded-xl hover:bg-brand-blue hover:text-white transition-colors">
                    {t('pilares.cta')}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
