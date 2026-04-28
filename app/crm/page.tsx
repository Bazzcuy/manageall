import { Users, UserPlus, PhoneCall, Mail, MoreHorizontal, Search } from 'lucide-react';
import styles from './crm.module.css';

export default function CRM() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>CRM Dashboard</h1>
          <p>Manage your customers, leads, and communications.</p>
        </div>
        <button className={styles.primaryButton}>
          <UserPlus size={18} /> Add Contact
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statIcon} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
            <Users size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3>Total Contacts</h3>
            <p className={styles.statValue}>2,481</p>
          </div>
        </div>

        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
            <UserPlus size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3>New Leads</h3>
            <p className={styles.statValue}>142</p>
          </div>
        </div>

        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statIcon} style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
            <PhoneCall size={24} />
          </div>
          <div className={styles.statInfo}>
            <h3>Calls Today</h3>
            <p className={styles.statValue}>38</p>
          </div>
        </div>
      </div>

      <div className={`${styles.mainContent} glass-panel`}>
        <div className={styles.contentHeader}>
          <h3>Contact Directory</h3>
          <div className={styles.searchBar}>
            <Search size={18} className={styles.searchIcon} />
            <input type="text" placeholder="Search contacts..." className={styles.searchInput} />
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Status</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Sarah Jenkins', company: 'TechNova', status: 'Active', email: 'sarah@technova.io', phone: '+1 (555) 123-4567', avatar: 'S' },
                { name: 'Michael Chen', company: 'Global Solutions', status: 'Lead', email: 'm.chen@globalsol.com', phone: '+1 (555) 987-6543', avatar: 'M' },
                { name: 'Emma Watson', company: 'Design Co.', status: 'Inactive', email: 'emma@designco.net', phone: '+44 20 7123 4567', avatar: 'E' },
                { name: 'David Miller', company: 'BuildRight', status: 'Active', email: 'david@buildright.com', phone: '+1 (555) 456-7890', avatar: 'D' },
                { name: 'Olivia Davis', company: 'FinanceHub', status: 'Lead', email: 'olivia@financehub.io', phone: '+1 (555) 234-5678', avatar: 'O' },
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
                    <span className={`${styles.statusBadge} ${styles[contact.status.toLowerCase()]}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles.contactMethod}>
                      <Mail size={14} /> {contact.email}
                    </div>
                  </td>
                  <td>
                    <div className={styles.contactMethod}>
                      <PhoneCall size={14} /> {contact.phone}
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
