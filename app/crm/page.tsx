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
                { name: 'Budi Santoso', company: 'PT Teknologi Nusantara', status: 'active', email: 'budi@teknus.id', phone: '+62 812-3456-7890', avatar: 'B' },
                { name: 'Siti Aminah', company: 'Solusi Global', status: 'lead', email: 's.aminah@solusiglobal.co.id', phone: '+62 811-9876-5432', avatar: 'S' },
                { name: 'Andi Wijaya', company: 'Desain Kreasi', status: 'inactive', email: 'andi@kreasi.net', phone: '+62 813-7123-4567', avatar: 'A' },
                { name: 'David Gunawan', company: 'Bina Konstruksi', status: 'active', email: 'david@binakonstruksi.com', phone: '+62 852-4567-8901', avatar: 'D' },
                { name: 'Rina Kusuma', company: 'Keuangan Sentosa', status: 'lead', email: 'rina@sentosa.io', phone: '+62 818-2345-6789', avatar: 'R' },
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
