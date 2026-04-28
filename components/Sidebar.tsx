import Link from 'next/link';
import { Home, PieChart, Users, Settings, Briefcase } from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={`${styles.sidebar} glass-panel`}>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}></div>
        <h2 className="text-gradient">ManageAll</h2>
      </div>
      
      <nav className={styles.nav}>
        <p className={styles.navLabel}>MAIN</p>
        <Link href="/" className={styles.navItem}>
          <Home size={20} />
          <span>Dashboard</span>
        </Link>
        
        <p className={styles.navLabel}>MODULES</p>
        <Link href="/finance" className={styles.navItem}>
          <PieChart size={20} />
          <span>Finance</span>
        </Link>
        <Link href="/crm" className={styles.navItem}>
          <Users size={20} />
          <span>CRM</span>
        </Link>
        <Link href="/hr" className={styles.navItem}>
          <Briefcase size={20} />
          <span>HR & Payroll</span>
        </Link>
        
        <p className={styles.navLabel}>SYSTEM</p>
        <Link href="/settings" className={styles.navItem}>
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>

      <div className={styles.userCard}>
        <div className={styles.avatar}>A</div>
        <div className={styles.userInfo}>
          <p className={styles.userName}>Admin User</p>
          <p className={styles.userRole}>Superadmin</p>
        </div>
      </div>
    </aside>
  );
}
