'use client';

import { useState } from 'react';
import styles from './settings.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Settings() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>{t.settings?.title || 'Pengaturan'}</h1>
          <p>{t.settings?.subtitle || 'Kelola preferensi dan akun sistem Anda.'}</p>
        </div>
        <button className={styles.primaryButton}>
          {t.settings?.saveChanges || 'Simpan Perubahan'}
        </button>
      </div>

      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'profile' ? styles.active : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            {t.settings?.profile || 'Profil'}
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'company' ? styles.active : ''}`}
            onClick={() => setActiveTab('company')}
          >
            {t.settings?.company || 'Perusahaan'}
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'notifications' ? styles.active : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            {t.settings?.notifications || 'Notifikasi'}
          </button>
        </div>

        <div className={`${styles.content} surface-panel`}>
          {activeTab === 'profile' && (
            <div>
              <h2>{t.settings?.profile || 'Profil'}</h2>
              <div className={styles.formGroup}>
                <label>{t.settings?.labels?.fullName || 'Nama Lengkap'}</label>
                <input type="text" defaultValue="Admin User" />
              </div>
              <div className={styles.formGroup}>
                <label>{t.settings?.labels?.email || 'Alamat Email'}</label>
                <input type="email" defaultValue="admin@manageall.io" />
              </div>
            </div>
          )}

          {activeTab === 'company' && (
            <div>
              <h2>{t.settings?.company || 'Perusahaan'}</h2>
              <div className={styles.formGroup}>
                <label>{t.settings?.labels?.companyName || 'Nama Perusahaan'}</label>
                <input type="text" defaultValue="PT Teknologi Nusantara" />
              </div>
              <div className={styles.formGroup}>
                <label>{t.settings?.labels?.address || 'Alamat'}</label>
                <input type="text" defaultValue="Jl. Jend. Sudirman Kav. 21, Jakarta" />
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2>{t.settings?.notifications || 'Notifikasi'}</h2>
              <div className={styles.toggleGroup}>
                <div className={styles.toggleInfo}>
                  <h4>{t.settings?.labels?.emailNotif || 'Notifikasi Email'}</h4>
                  <p>{t.settings?.labels?.emailNotifDesc || 'Terima email ringkasan harian'}</p>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
