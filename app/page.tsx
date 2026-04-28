import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Activity, Briefcase } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>Welcome back, Admin</h1>
          <p>Here's an overview of your business today.</p>
        </div>
        <button className={styles.primaryButton}>Generate Report</button>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statHeader}>
            <div className={`${styles.iconWrapper} ${styles.blue}`}>
              <DollarSign size={20} />
            </div>
            <span className={styles.positive}>
              <ArrowUpRight size={16} /> +12.5%
            </span>
          </div>
          <h3>Total Revenue</h3>
          <p className={styles.statValue}>$45,231.89</p>
        </div>

        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statHeader}>
            <div className={`${styles.iconWrapper} ${styles.green}`}>
              <Users size={20} />
            </div>
            <span className={styles.positive}>
              <ArrowUpRight size={16} /> +5.2%
            </span>
          </div>
          <h3>Active Clients</h3>
          <p className={styles.statValue}>1,245</p>
        </div>

        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statHeader}>
            <div className={`${styles.iconWrapper} ${styles.orange}`}>
              <Activity size={20} />
            </div>
            <span className={styles.negative}>
              <ArrowDownRight size={16} /> -2.4%
            </span>
          </div>
          <h3>System Activity</h3>
          <p className={styles.statValue}>89.4%</p>
        </div>

        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statHeader}>
            <div className={`${styles.iconWrapper} ${styles.purple}`}>
              <Briefcase size={20} />
            </div>
            <span className={styles.positive}>
              <ArrowUpRight size={16} /> +18.2%
            </span>
          </div>
          <h3>Open Projects</h3>
          <p className={styles.statValue}>42</p>
        </div>
      </div>

      <div className={styles.chartsGrid}>
        <div className={`${styles.chartCard} glass-panel`}>
          <h3>Revenue Overview</h3>
          <div className={styles.mockChart}>
            {/* CSS representation of a chart for visual purposes */}
            <div className={styles.bars}>
              <div className={styles.bar} style={{ height: '40%' }}></div>
              <div className={styles.bar} style={{ height: '60%' }}></div>
              <div className={styles.bar} style={{ height: '30%' }}></div>
              <div className={styles.bar} style={{ height: '80%' }}></div>
              <div className={styles.bar} style={{ height: '50%' }}></div>
              <div className={styles.bar} style={{ height: '90%' }}></div>
              <div className={styles.bar} style={{ height: '70%' }}></div>
            </div>
          </div>
        </div>

        <div className={`${styles.chartCard} glass-panel`}>
          <h3>Recent Activity</h3>
          <div className={styles.activityList}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={styles.activityItem}>
                <div className={styles.activityDot}></div>
                <div className={styles.activityContent}>
                  <p className={styles.activityTitle}>New user registered</p>
                  <p className={styles.activityTime}>2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
