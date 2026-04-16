export const CONFIG = {
  wa: {
    phone: "5511947648312",
    msgHero: "Olá! Vi o site da Respect e quero agendar um diagnóstico gratuito pro meu negócio.",
    msgFloat: "Olá! Tenho interesse nos serviços da Respect.",
    msgDemo: "Olá! Quero entender como a Respect pode ajudar meu negócio.",
    msgFinal: "Olá! Quero agendar um diagnóstico gratuito. Podemos conversar?",
    ctaHero: "AGENDAR DIAGNÓSTICO GRATUITO →",
    ctaFloat: "Falar com a Respect",
    ctaFinal: "AGENDAR DIAGNÓSTICO →",
  },
  brand: {
    name: "Respect",
    tagline: "Marketing · TI · Comercial",
    concept: "Respeito",
  },
  UI_VERSION: 'V1' as 'V1' | 'V2',
} as const;

export const waURL = (msg: string = CONFIG.wa.msgHero) =>
  `https://wa.me/${CONFIG.wa.phone}?text=${encodeURIComponent(msg)}`;

/**
 * Função central de Tracking e Redirecionamento
 * Dispara evento customizado no Meta Pixel (quando configurado) e abre o WhatsApp.
 */
export const trackAndOpenWA = (msg: string, eventName = 'WhatsApp_Lead') => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, {
      content_name: 'WhatsApp Click',
      content_category: 'Lead Generation',
    });
  }
  console.log(`[PIXEL_TRACKING] Evento disparado: ${eventName}`);
  setTimeout(() => {
    window.open(waURL(msg), '_blank', 'noopener,noreferrer');
  }, 100);
};
