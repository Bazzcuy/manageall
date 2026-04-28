'use client';

import { Plus, MoreHorizontal, Calendar, FolderKanban } from 'lucide-react';
import styles from './projects.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const boardData = {
    todo: [
      { id: 1, title: 'Implementasi Modul HR', client: 'Internal', date: '25 Nov', users: [{ init: 'A', class: '' }, { init: 'B', class: 'bg2' }] },
      { id: 2, title: 'Redesign UI Landing Page', client: 'PT Karya Makmur', date: '02 Des', users: [{ init: 'S', class: 'bg3' }] },
    ],
    inProgress: [
      { id: 3, title: 'Migrasi Database ke AWS', client: 'PT Teknologi Nusantara', date: '15 Nov', users: [{ init: 'D', class: 'bg4' }, { init: 'R', class: 'bg2' }] },
      { id: 4, title: 'Integrasi Payment Gateway', client: 'E-Commerce Lokal', date: '20 Nov', users: [{ init: 'B', class: '' }] },
    ],
    done: [
      { id: 5, title: 'Setup Server Staging', client: 'Internal', date: '01 Nov', users: [{ init: 'A', class: '' }] },
    ]
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>{t.projects?.title || 'Manajemen Proyek'}</h1>
          <p>{t.projects?.subtitle || 'Pantau progress proyek tim Anda.'}</p>
        </div>
        <button className={styles.primaryButton}>
          <Plus size={16} /> {t.projects?.newProject || 'Proyek Baru'}
        </button>
      </div>

      <div className={styles.board}>
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <h3>To Do <span className={styles.count}>{boardData.todo.length}</span></h3>
            <button className="textButton"><MoreHorizontal size={18} /></button>
          </div>
          {boardData.todo.map(task => (
            <div key={task.id} className={styles.card}>
              <div className={styles.cardTitle}>{task.title}</div>
              <div className={styles.cardClient}><FolderKanban size={12} style={{display:'inline', marginRight: 4}}/> {task.client}</div>
              <div className={styles.cardFooter}>
                <div className={styles.date}><Calendar size={12} /> {task.date}</div>
                <div className={styles.avatars}>
                  {task.users.map((u, i) => (
                    <div key={i} className={`${styles.avatar} ${styles[u.class]}`}>{u.init}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <h3>In Progress <span className={styles.count}>{boardData.inProgress.length}</span></h3>
            <button className="textButton"><MoreHorizontal size={18} /></button>
          </div>
          {boardData.inProgress.map(task => (
            <div key={task.id} className={styles.card}>
              <div className={styles.cardTitle}>{task.title}</div>
              <div className={styles.cardClient}><FolderKanban size={12} style={{display:'inline', marginRight: 4}}/> {task.client}</div>
              <div className={styles.cardFooter}>
                <div className={styles.date}><Calendar size={12} /> {task.date}</div>
                <div className={styles.avatars}>
                  {task.users.map((u, i) => (
                    <div key={i} className={`${styles.avatar} ${styles[u.class]}`}>{u.init}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <h3>Done <span className={styles.count}>{boardData.done.length}</span></h3>
            <button className="textButton"><MoreHorizontal size={18} /></button>
          </div>
          {boardData.done.map(task => (
            <div key={task.id} className={styles.card}>
              <div className={styles.cardTitle}>{task.title}</div>
              <div className={styles.cardClient}><FolderKanban size={12} style={{display:'inline', marginRight: 4}}/> {task.client}</div>
              <div className={styles.cardFooter}>
                <div className={styles.date}><Calendar size={12} /> {task.date}</div>
                <div className={styles.avatars}>
                  {task.users.map((u, i) => (
                    <div key={i} className={`${styles.avatar} ${styles[u.class]}`}>{u.init}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
