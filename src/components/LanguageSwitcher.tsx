import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const LANGS = [
  { code: 'pt', label: 'PT', full: 'Português' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'es', label: 'ES', full: 'Español' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = LANGS.find((l) => l.code === i18n.language?.slice(0, 2)) ?? LANGS[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const switchLang = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 h-9 rounded-lg text-xs font-black uppercase tracking-widest text-text-muted hover:text-brand-blue hover:bg-brand-blue/10 transition-all duration-200"
        aria-label={t('common.select_language_aria')}
      >
        <Globe size={14} />
        {currentLang.label}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 py-1 w-36 rounded-xl border border-[var(--color-glass-border-clean)] bg-[var(--color-bg-white)] shadow-[var(--sh-deep)] z-50">
          {LANGS.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLang(lang.code)}
              className={`w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                lang.code === currentLang.code
                  ? 'text-brand-blue bg-brand-blue/10'
                  : 'text-text-body hover:text-brand-blue hover:bg-brand-blue/5'
              }`}
            >
              {lang.label} — {lang.full}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
