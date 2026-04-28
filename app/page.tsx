'use client';

import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Activity, Briefcase } from 'lucide-react';
import styles from './page.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>{t.dashboard.welcome}, Admin</h1>
          <p>{t.dashboard.subtitle}</p>
        </div>
        <button className={styles.primaryButton}>{t.generateReport}</button>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} surface-panel`}>
          <div className={styles.statHeader}>
            <div className={`${styles.iconWrapper} ${styles.blue}`}>
              <DollarSign size={20} />
            </div>
            <span className={styles.positive}>
              <ArrowUpRight size={16} /> +12.5%
            </span>
          </div>
          <h3>{t.dashboard.totalRevenue}</h3>
          <p className={styles.statValue}>$45,231.89</p>
        </div>

        <div className={`${styles.statCard} surface-panel`}>
          <div className={styles.statHeader}>
            <div className={`${styles.iconWrapper} ${styles.green}`}>
              <Users size={20} />
            </div>
            <span className={styles.positive}>
              <ArrowUpRight size={16} /> +5.2%
            </span>
          </div>
          <h3>{t.dashboard.activeClients}</h3>
          <p className={styles.statValue}>1,245</p>
        </div>

        <div className={`${styles.statCard} surface-panel`}>
          <div className={styles.statHeader}>
            <div className={`${styles.iconWrapper} ${styles.orange}`}>
              <Activity size={20} />
            </div>
            <span className={styles.negative}>
              <ArrowDownRight size={16} /> -2.4%
            </span>
          </div>
          <h3>{t.dashboard.systemActivity}</h3>
          <p className={styles.statValue}>89.4%</p>
        </div>

        <div className={`${styles.statCard} surface-panel`}>
          <div className={styles.statHeader}>
            <div className={`${styles.iconWrapper} ${styles.purple}`}>
              <Briefcase size={20} />
            </div>
            <span className={styles.positive}>
              <ArrowUpRight size={16} /> +18.2%
            </span>
          </div>
          <h3>{t.dashboard.openProjects}</h3>
          <p className={styles.statValue}>42</p>
        </div>
      </div>

      <div className={styles.chartsGrid}>
        <div className={`${styles.chartCard} surface-panel`}>
          <div className={styles.cardHeader}>
            <h3>{t.dashboard.revenueOverview}</h3>
          </div>
          <div className={styles.mockChart}>
            <div className={styles.bars}>
              <div className={styles.barContainer}><div className={styles.bar} style={{ height: '40%' }}></div><span className={styles.barLabel}>Mon</span></div>
              <div className={styles.barContainer}><div className={styles.bar} style={{ height: '60%' }}></div><span className={styles.barLabel}>Tue</span></div>
              <div className={styles.barContainer}><div className={styles.bar} style={{ height: '30%' }}></div><span className={styles.barLabel}>Wed</span></div>
              <div className={styles.barContainer}><div className={styles.bar} style={{ height: '80%' }}></div><span className={styles.barLabel}>Thu</span></div>
              <div className={styles.barContainer}><div className={styles.bar} style={{ height: '50%' }}></div><span className={styles.barLabel}>Fri</span></div>
              <div className={styles.barContainer}><div className={styles.bar} style={{ height: '90%' }}></div><span className={styles.barLabel}>Sat</span></div>
              <div className={styles.barContainer}><div className={styles.bar} style={{ height: '70%' }}></div><span className={styles.barLabel}>Sun</span></div>
            </div>
          </div>
        </div>

        <div className={`${styles.chartCard} surface-panel`}>
          <div className={styles.cardHeader}>
            <h3>{t.dashboard.recentActivity}</h3>
            <button className={styles.textButton}>{t.viewAll}</button>
          </div>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityDot}></div>
              <div className={styles.activityContent}>
                <p className={styles.activityTitle}>{t.dashboard.activities.userReg}</p>
                <p className={styles.activityTime}>{t.dashboard.timeAgo.h2}</p>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDot}></div>
              <div className={styles.activityContent}>
                <p className={styles.activityTitle}>{t.dashboard.activities.invoicePaid}</p>
                <p className={styles.activityTime}>{t.dashboard.timeAgo.h5}</p>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDot}></div>
              <div className={styles.activityContent}>
                <p className={styles.activityTitle}>{t.dashboard.activities.serverUpdate}</p>
                <p className={styles.activityTime}>{t.dashboard.timeAgo.d1}</p>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDot}></div>
              <div className={styles.activityContent}>
                <p className={styles.activityTitle}>{t.dashboard.activities.newLead}</p>
                <p className={styles.activityTime}>{t.dashboard.timeAgo.d2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
