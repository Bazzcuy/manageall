import { Search, Bell } from 'lucide-react';
import styles from './Topbar.module.css';

export default function Topbar() {
  return (
    <header className={`${styles.topbar} glass-panel`}>
      <div className={styles.searchContainer}>
        <Search className={styles.searchIcon} size={20} />
        <input 
          type="text" 
          placeholder="Search across all modules..." 
          className={styles.searchInput}
        />
      </div>

      <div className={styles.actions}>
        <button className={styles.iconButton}>
          <Bell size={20} />
          <span className={styles.badge}></span>
        </button>
      </div>
    </header>
  );
}
