import { motion } from 'motion/react';
import { ArrowRight, Code2, Target, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Badge, Container, Section } from './base';

// Lottie Animation URLs
const LOTTIE_MARKETING = "https://lottie.host/8553641b-ca88-466d-a162-811c75124294/Z0i2Xw836J.json";
const LOTTIE_TI = "https://lottie.host/7e923145-c335-430b-936d-e448b301769d/bNInO6Z1Y1.json";
const LOTTIE_SALES = "https://lottie.host/79185a97-9092-49d6-953b-e0f49f48ac62/uW6W8z7X0J.json";

function RemoteLottie({ url, className }: { url: string; className?: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Lottie Load Error:", err));
  }, [url]);

  if (!data) return <div className={className} />;

  return <Lottie animationData={data} loop={true} className={className} />;
}

export function PilaresSolucoes() {
  const { t } = useTranslation();

  return (
    <Section variant="white" id="solucoes" className="relative">
      <Container size="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerSlow}
          className="mb-24 text-center lg:text-left"
        >
          <motion.div variants={fadeUpPremium}>
            <Badge label={t('pilares.badge')} variant="blue" className="mb-6" />
          </motion.div>
          <motion.h2
            variants={fadeUpPremium}
            className="text-4xl md:text-7xl font-black text-text-title tracking-tighter mb-6 uppercase font-display"
          >
            {t('pilares.title_line1')}
            <br />
            <span className="text-brand-blue">{t('pilares.title_line2')}</span>
          </motion.h2>
          <motion.p
            variants={fadeUpPremium}
            className="text-text-body max-w-2xl font-medium text-xl lg:ml-0 mx-auto opacity-70"
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
            className="col-span-12 lg:col-span-8 group relative"
          >
            <div id="marketing" className="absolute -top-32" />
            <div className="saas-card saas-card-hover h-full p-12 flex flex-col md:flex-row gap-12 overflow-hidden relative border-[var(--color-glass-border-clean)]">
              <div className="flex-1 z-10 flex flex-col justify-between">
                 <div>
                   <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-10">
                     <TrendingUp size={32} />
                   </div>
                   <h3 className="text-3xl md:text-4xl font-black text-text-title mb-6 uppercase tracking-tighter">
                     {t('pilares.marketing.title')}
                   </h3>
                   <p className="text-text-body font-medium mb-10 max-w-sm opacity-70">
                     {t('pilares.marketing.desc')}
                   </p>
                 </div>
                 <div className="flex items-center gap-3 text-brand-blue font-black text-xs uppercase tracking-[0.2em] group-hover:gap-5 transition-all cursor-pointer" onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}>
                   {t('pilares.cta')} <ArrowRight size={16} />
                 </div>
              </div>
              
              <div className="flex-1 relative hidden md:flex items-center justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-brand-blue/5 rounded-full blur-[100px] -z-1" />
                <RemoteLottie url={LOTTIE_MARKETING} className="w-full max-w-[320px] relative z-10 group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
          </motion.div>

          {/* TI & DEVOPS - Side Block (4 cols) */}
          <motion.div 
            variants={fadeUpPremium}
            className="col-span-12 lg:col-span-4 relative"
          >
            <div id="ti" className="absolute -top-32" />
            <div className="saas-card saas-card-hover h-full p-12 flex flex-col justify-between group border-[var(--color-glass-border-clean)]">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-[var(--foreground)]/[0.02] flex items-center justify-center text-text-title mb-10">
                  <Code2 size={32} />
                </div>
                <h3 className="text-3xl font-black text-text-title mb-6 uppercase tracking-tighter">
                  {t('pilares.ti.title')}
                </h3>
                <p className="text-text-body font-medium text-sm leading-relaxed opacity-60">
                  {t('pilares.ti.desc')}
                </p>
                
                <div className="mt-12 flex justify-center min-h-[150px]">
                  <RemoteLottie url={LOTTIE_TI} className="w-full max-w-[200px] opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
              <div className="mt-12 flex items-center gap-3 text-text-title font-black text-xs uppercase tracking-[0.2em] group-hover:text-brand-blue transition-colors cursor-pointer" onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('pilares.cta')} <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>

          {/* COMERCIAL - Bottom Full (12 cols) */}
          <motion.div 
            variants={fadeUpPremium}
            className="col-span-12 relative"
          >
            <div id="vendas" className="absolute -top-32" />
            <div className="saas-card saas-card-hover p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 group overflow-hidden relative border-[var(--color-glass-border-clean)] bg-[var(--background)]">
              <div className="absolute inset-0 bg-brand-blue/[0.02] -z-1" />
              <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-blue/[0.03] rounded-full blur-[100px] -z-1" />
              
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10 text-center lg:text-left">
                <div className="w-20 h-20 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue">
                  <Target size={36} />
                </div>
                <div className="max-w-xl">
                  <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-text-title">
                    {t('pilares.comercial.title')}
                  </h3>
                  <p className="text-text-body font-medium text-lg opacity-70">
                    {t('pilares.comercial.desc')}
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 lg:w-[350px] flex flex-col items-center gap-8">
                <RemoteLottie url={LOTTIE_SALES} className="w-full max-w-[280px] group-hover:scale-105 transition-transform duration-1000" />
                <div 
                  onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="px-12 py-5 bg-[var(--background)] border border-[var(--color-glass-border-clean)] text-[var(--foreground)] font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-brand-blue hover:text-white transition-all transform hover:translate-y-[-2px] cursor-pointer"
                >
                  {t('pilares.cta')}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
