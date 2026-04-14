import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggle}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-brand-blue hover:bg-brand-blue/10 transition-all duration-200"
      aria-label={theme === 'dark' ? t('theme.toggle_light') : t('theme.toggle_dark')}
      title={theme === 'dark' ? t('theme.toggle_light') : t('theme.toggle_dark')}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
