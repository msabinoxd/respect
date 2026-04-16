import { motion } from 'motion/react';
import { ArrowRight, Code2, Target, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Badge, Container, Section } from './base';
import { BlueprintMarketing } from './BlueprintMarketing';
import { BlueprintTI } from './BlueprintTI';
import { BlueprintSales } from './BlueprintSales';

export function PilaresSolucoes() {
  const { t } = useTranslation();

  return (
    <Section variant="white" id="solucoes" className="relative pt-32 pb-32">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full bg-dots-premium opacity-[0.03] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerSlow}
          className="mb-20"
        >
          <motion.div variants={fadeUpPremium}>
            <Badge label={t('pilares.badge')} variant="blue" className="mb-6 px-5 py-2" />
          </motion.div>
          <motion.h2
            variants={fadeUpPremium}
            className="text-4xl md:text-[80px] font-black text-text-title tracking-[-0.04em] mb-8 uppercase font-display leading-[0.9]"
          >
            {t('pilares.title_line1')}
            <br />
            <span className="text-brand-blue">{t('pilares.title_line2')}</span>
          </motion.h2>
          <motion.p
            variants={fadeUpPremium}
            className="text-text-body max-w-2xl font-medium text-xl opacity-70 border-l-4 border-brand-blue/10 pl-8"
          >
            {t('pilares.subtitle')}
          </motion.p>
        </motion.div>

        {/* RESTRUCTURED BENTO GRID V4.0 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* MARKETING - Strategic Lead (7 cols) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpPremium}
            className="col-span-12 md:col-span-7 group"
          >
            <div id="marketing" className="absolute -top-32" />
            <div className="saas-card-premium saas-card-premium-hover h-full p-10 flex flex-col md:flex-row gap-8 overflow-hidden">
              <div className="flex-1 z-10 flex flex-col justify-between">
                 <div>
                   <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-8 border border-brand-blue/10">
                     <TrendingUp size={28} />
                   </div>
                   <h3 className="text-3xl font-black text-text-title mb-5 uppercase tracking-tighter">
                     {t('pilares.marketing.title')}
                   </h3>
                   <p className="text-text-body font-bold text-base mb-8 opacity-80 leading-relaxed">
                     {t('pilares.marketing.desc')}
                   </p>
                 </div>
                 <div 
                    onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-3 text-brand-blue font-black text-xs uppercase tracking-[0.2em] group-hover:gap-5 transition-all cursor-pointer"
                 >
                   {t('pilares.cta')} <ArrowRight size={16} />
                 </div>
              </div>
              
              <div className="flex-1 relative min-h-[240px] flex items-center justify-center bg-[var(--foreground)]/[0.01] rounded-[20px]">
                 <BlueprintMarketing />
              </div>
            </div>
          </motion.div>

          {/* TI & DEVOPS - Architecture (5 cols) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpPremium}
            className="col-span-12 md:col-span-5 relative group"
          >
            <div id="ti" className="absolute -top-32" />
            <div className="saas-card-premium saas-card-premium-hover h-full p-10 flex flex-col justify-between">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[var(--foreground)]/[0.02] flex items-center justify-center text-text-title mb-8 border border-[var(--color-glass-border-clean)]">
                  <Code2 size={28} />
                </div>
                <h3 className="text-2xl font-black text-text-title mb-5 uppercase tracking-tighter">
                  {t('pilares.ti.title')}
                </h3>
                <p className="text-text-body font-bold text-[15px] leading-relaxed opacity-80">
                  {t('pilares.ti.desc')}
                </p>
                
                <div className="mt-8 relative h-40 bg-[var(--foreground)]/[0.01] rounded-[20px] flex items-center justify-center overflow-hidden">
                   <BlueprintTI />
                </div>
              </div>
              <div 
                onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 flex items-center gap-3 text-text-title font-black text-xs uppercase tracking-[0.2em] group-hover:text-brand-blue transition-colors cursor-pointer"
              >
                {t('pilares.cta')} <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>

          {/* COMERCIAL - Growth Expansion (12 cols) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpPremium}
            className="col-span-12 relative group"
          >
            <div id="vendas" className="absolute -top-32" />
            <div className="saas-card-premium saas-card-premium-hover p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden bg-[var(--background)]">
              {/* Internal Accent */}
              <div className="absolute inset-0 bg-brand-blue/[0.015] pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 text-center lg:text-left flex-1">
                <div className="w-20 h-20 rounded-[24px] bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
                  <Target size={36} />
                </div>
                <div className="max-w-xl">
                  <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-[-0.03em] text-text-title">
                    {t('pilares.comercial.title')}
                  </h3>
                  <p className="text-text-body font-bold text-lg opacity-80 leading-relaxed">
                    {t('pilares.comercial.desc')}
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 w-full lg:w-[400px] h-[280px] bg-[var(--foreground)]/[0.02] rounded-[30px] flex items-center justify-center">
                 <BlueprintSales />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
