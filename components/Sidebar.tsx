'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, PieChart, Users, Settings, Briefcase } from 'lucide-react';
import styles from './Sidebar.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          <div className={styles.logoDot}></div>
        </div>
        <h2 className={styles.logoText}>ManageAll</h2>
      </div>
      
      <nav className={styles.nav}>
        <p className={styles.navLabel}>{t.nav.main}</p>
        <Link href="/" className={`${styles.navItem} ${isActive('/') ? styles.active : ''}`}>
          <Home size={18} />
          <span>{t.nav.dashboard}</span>
        </Link>
        
        <p className={styles.navLabel}>{t.nav.modules}</p>
        <Link href="/finance" className={`${styles.navItem} ${isActive('/finance') ? styles.active : ''}`}>
          <PieChart size={18} />
          <span>{t.nav.finance}</span>
        </Link>
        <Link href="/crm" className={`${styles.navItem} ${isActive('/crm') ? styles.active : ''}`}>
          <Users size={18} />
          <span>{t.nav.crm}</span>
        </Link>
        <Link href="/hr" className={`${styles.navItem} ${isActive('/hr') ? styles.active : ''}`}>
          <Briefcase size={18} />
          <span>{t.nav.hr}</span>
        </Link>
        
        <p className={styles.navLabel}>{t.nav.system}</p>
        <Link href="/settings" className={`${styles.navItem} ${isActive('/settings') ? styles.active : ''}`}>
          <Settings size={18} />
          <span>{t.nav.settings}</span>
        </Link>
      </nav>

      <div className={styles.userCard}>
        <div className={styles.avatar}>A</div>
        <div className={styles.userInfo}>
          <p className={styles.userName}>Admin User</p>
          <p className={styles.userRole}>admin@manageall.io</p>
        </div>
      </div>
    </aside>
  );
}
