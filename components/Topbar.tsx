'use client';

import { Search, Bell, Moon, Sun, Globe } from 'lucide-react';
import styles from './Topbar.module.css';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className={styles.topbar}>
      <div className={styles.searchContainer}>
        <Search className={styles.searchIcon} size={18} />
        <input 
          type="text" 
          placeholder={t.search} 
          className={styles.searchInput}
        />
        <div className={styles.searchShortcut}>⌘K</div>
      </div>

      <div className={styles.actions}>
        <button 
          className={styles.iconButton} 
          onClick={toggleLanguage}
          title={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
        >
          <Globe size={18} />
          <span className={styles.langText}>{language.toUpperCase()}</span>
        </button>

        <button 
          className={styles.iconButton} 
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <button className={styles.iconButton}>
          <Bell size={18} />
          <span className={styles.badge}></span>
        </button>
      </div>
    </header>
  );
}
