'use client';

import { Users, UserPlus, CalendarOff, DollarSign, MoreHorizontal } from 'lucide-react';
import styles from './hr.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HR() {
  const { t } = useLanguage();

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>{t.hr?.title || 'HR & Penggajian'}</h1>
          <p>{t.hr?.subtitle || 'Kelola absensi dan gaji tim Anda.'}</p>
        </div>
        <button className={styles.primaryButton}>
          <UserPlus size={16} /> {t.hr?.addEmployee || 'Tambah Karyawan'}
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} surface-panel`}>
          <div className={styles.statIcon} style={{ background: 'var(--accent-blue-bg)', color: 'var(--accent-blue)' }}>
            <Users size={20} />
          </div>
          <div className={styles.statInfo}>
            <h3>{t.hr?.totalEmployees || 'Total Karyawan'}</h3>
            <p className={styles.statValue}>124</p>
          </div>
        </div>

        <div className={`${styles.statCard} surface-panel`}>
          <div className={styles.statIcon} style={{ background: 'var(--accent-warning-bg)', color: 'var(--accent-warning)' }}>
            <CalendarOff size={20} />
          </div>
          <div className={styles.statInfo}>
            <h3>{t.hr?.onLeave || 'Sedang Cuti'}</h3>
            <p className={styles.statValue}>3</p>
          </div>
        </div>

        <div className={`${styles.statCard} surface-panel`}>
          <div className={styles.statIcon} style={{ background: 'var(--accent-secondary-bg)', color: 'var(--accent-secondary)' }}>
            <DollarSign size={20} />
          </div>
          <div className={styles.statInfo}>
            <h3>{t.hr?.estPayroll || 'Estimasi Gaji'}</h3>
            <p className={styles.statValue}>Rp 854.500.000</p>
          </div>
        </div>
      </div>

      <div className={`${styles.mainContent} surface-panel`}>
        <div className={styles.contentHeader}>
          <h3>{t.hr?.directory || 'Direktori Karyawan'}</h3>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{t.hr?.table?.name || 'Nama'}</th>
                <th>{t.hr?.table?.role || 'Peran'}</th>
                <th>{t.hr?.table?.department || 'Departemen'}</th>
                <th>{t.hr?.table?.status || 'Status'}</th>
                <th>{t.hr?.table?.salary || 'Gaji (Bulanan)'}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Andi Wijaya', role: 'Head of Engineering', dept: 'Engineering', status: 'active', salary: 'Rp 35.000.000', avatar: 'A' },
                { name: 'Rina Kusuma', role: 'UI/UX Designer', dept: 'Design', status: 'active', salary: 'Rp 18.000.000', avatar: 'R' },
                { name: 'Budi Santoso', role: 'Marketing Manager', dept: 'Marketing', status: 'onLeave', salary: 'Rp 22.000.000', avatar: 'B' },
                { name: 'Siti Aminah', role: 'HR Specialist', dept: 'Human Resources', status: 'active', salary: 'Rp 15.000.000', avatar: 'S' },
                { name: 'David Gunawan', role: 'Senior Developer', dept: 'Engineering', status: 'active', salary: 'Rp 25.000.000', avatar: 'D' },
              ].map((emp, i) => (
                <tr key={i}>
                  <td>
                    <div className={styles.employeeNameCell}>
                      <div className={styles.avatar}>{emp.avatar}</div>
                      <span className={styles.employeeName}>{emp.name}</span>
                    </div>
                  </td>
                  <td className={styles.dimText}>{emp.role}</td>
                  <td className={styles.dimText}>{emp.dept}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[emp.status]}`}>
                      {emp.status === 'active' ? (t.status?.active || 'Aktif') : (t.hr?.onLeave || 'Cuti')}
                    </span>
                  </td>
                  <td className={styles.dimText}>{emp.salary}</td>
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
