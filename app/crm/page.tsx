'use client';

import { Users, UserPlus, PhoneCall, Mail, MoreHorizontal, Search } from 'lucide-react';
import styles from './crm.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CRM() {
  const { t } = useLanguage();

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>{t.crm.title}</h1>
          <p>{t.crm.subtitle}</p>
        </div>
        <button className={styles.primaryButton}>
          <UserPlus size={16} /> {t.crm.addContact}
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} surface-panel`}>
          <div className={styles.statIcon} style={{ background: 'var(--accent-blue-bg)', color: 'var(--accent-blue)' }}>
            <Users size={20} />
          </div>
          <div className={styles.statInfo}>
            <h3>{t.crm.totalContacts}</h3>
            <p className={styles.statValue}>2,481</p>
          </div>
        </div>

        <div className={`${styles.statCard} surface-panel`}>
          <div className={styles.statIcon} style={{ background: 'var(--accent-secondary-bg)', color: 'var(--accent-secondary)' }}>
            <UserPlus size={20} />
          </div>
          <div className={styles.statInfo}>
            <h3>{t.crm.newLeads}</h3>
            <p className={styles.statValue}>142</p>
          </div>
        </div>

        <div className={`${styles.statCard} surface-panel`}>
          <div className={styles.statIcon} style={{ background: 'var(--accent-warning-bg)', color: 'var(--accent-warning)' }}>
            <PhoneCall size={20} />
          </div>
          <div className={styles.statInfo}>
            <h3>{t.crm.callsToday}</h3>
            <p className={styles.statValue}>38</p>
          </div>
        </div>
      </div>

      <div className={`${styles.mainContent} surface-panel`}>
        <div className={styles.contentHeader}>
          <h3>{t.crm.directory}</h3>
          <div className={styles.searchBar}>
            <Search size={16} className={styles.searchIcon} />
            <input type="text" placeholder={t.crm.searchContacts} className={styles.searchInput} />
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{t.crm.table.name}</th>
                <th>{t.crm.table.company}</th>
                <th>{t.crm.table.status}</th>
                <th>{t.crm.table.email}</th>
                <th>{t.crm.table.phone}</th>
                <th>{t.crm.table.actions}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Sarah Jenkins', company: 'TechNova', status: 'active', email: 'sarah@technova.io', phone: '+1 (555) 123-4567', avatar: 'S' },
                { name: 'Michael Chen', company: 'Global Solutions', status: 'lead', email: 'm.chen@globalsol.com', phone: '+1 (555) 987-6543', avatar: 'M' },
                { name: 'Emma Watson', company: 'Design Co.', status: 'inactive', email: 'emma@designco.net', phone: '+44 20 7123 4567', avatar: 'E' },
                { name: 'David Miller', company: 'BuildRight', status: 'active', email: 'david@buildright.com', phone: '+1 (555) 456-7890', avatar: 'D' },
                { name: 'Olivia Davis', company: 'FinanceHub', status: 'lead', email: 'olivia@financehub.io', phone: '+1 (555) 234-5678', avatar: 'O' },
              ].map((contact, i) => (
                <tr key={i}>
                  <td>
                    <div className={styles.contactNameCell}>
                      <div className={styles.avatar}>{contact.avatar}</div>
                      <span className={styles.contactName}>{contact.name}</span>
                    </div>
                  </td>
                  <td className={styles.dimText}>{contact.company}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[contact.status]}`}>
                      {t.status[contact.status as keyof typeof t.status]}
                    </span>
                  </td>
                  <td>
                    <div className={styles.contactMethod}>
                      <Mail size={14} className={styles.iconDim} /> {contact.email}
                    </div>
                  </td>
                  <td>
                    <div className={styles.contactMethod}>
                      <PhoneCall size={14} className={styles.iconDim} /> {contact.phone}
                    </div>
                  </td>
                  <td>
                    <button className={styles.actionButton}>
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
