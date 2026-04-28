'use client';

import { DollarSign, TrendingUp, TrendingDown, CreditCard, ArrowRight } from 'lucide-react';
import styles from './finance.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Finance() {
  const { t } = useLanguage();

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>{t.finance.title}</h1>
          <p>{t.finance.subtitle}</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryButton}>{t.finance.exportCsv}</button>
          <button className={styles.primaryButton}>{t.finance.newTransaction}</button>
        </div>
      </div>

      <div className={styles.balanceGrid}>
        <div className={`${styles.balanceCard} surface-panel`}>
          <div className={styles.cardHeader}>
            <h3>{t.finance.totalBalance}</h3>
            <DollarSign className={styles.iconBlue} size={20} />
          </div>
          <p className={styles.balanceAmount}>$128,450.00</p>
          <div className={styles.trend}>
            <TrendingUp size={16} className={styles.positive} />
            <span className={styles.positive}>+8.5%</span> {t.finance.fromLastMonth}
          </div>
        </div>

        <div className={`${styles.balanceCard} surface-panel`}>
          <div className={styles.cardHeader}>
            <h3>{t.finance.monthlyIncome}</h3>
            <TrendingUp className={styles.iconGreen} size={20} />
          </div>
          <p className={styles.balanceAmount}>$45,231.89</p>
          <div className={styles.trend}>
            <TrendingUp size={16} className={styles.positive} />
            <span className={styles.positive}>+12.5%</span> {t.finance.fromLastMonth}
          </div>
        </div>

        <div className={`${styles.balanceCard} surface-panel`}>
          <div className={styles.cardHeader}>
            <h3>{t.finance.monthlyExpenses}</h3>
            <TrendingDown className={styles.iconRed} size={20} />
          </div>
          <p className={styles.balanceAmount}>$18,900.50</p>
          <div className={styles.trend}>
            <TrendingDown size={16} className={styles.negative} />
            <span className={styles.negative}>-2.4%</span> {t.finance.fromLastMonth}
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={`${styles.transactionsCard} surface-panel`}>
          <div className={styles.cardHeader}>
            <h3>{t.finance.recentTransactions}</h3>
            <button className={styles.textButton}>{t.viewAll} <ArrowRight size={16}/></button>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{t.finance.table.desc}</th>
                  <th>{t.finance.table.date}</th>
                  <th>{t.finance.table.category}</th>
                  <th>{t.finance.table.amount}</th>
                  <th>{t.finance.table.status}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { desc: 'Stripe Payout', date: 'Oct 24, 2023', cat: 'Income', amount: '+$4,500.00', status: 'completed', type: 'income' },
                  { desc: 'AWS Hosting', date: 'Oct 23, 2023', cat: 'Infrastructure', amount: '-$850.00', status: 'completed', type: 'expense' },
                  { desc: 'Upwork Freelancers', date: 'Oct 21, 2023', cat: 'Contractors', amount: '-$1,200.00', status: 'pending', type: 'expense' },
                  { desc: 'Annual Subscription', date: 'Oct 19, 2023', cat: 'Software', amount: '-$299.00', status: 'completed', type: 'expense' },
                  { desc: 'Client Invoice #1023', date: 'Oct 15, 2023', cat: 'Income', amount: '+$8,250.00', status: 'completed', type: 'income' },
                ].map((tx, i) => (
                  <tr key={i}>
                    <td className={styles.txDesc}>{tx.desc}</td>
                    <td className={styles.dimText}>{tx.date}</td>
                    <td><span className={styles.badge}>{tx.cat}</span></td>
                    <td className={tx.type === 'income' ? styles.positiveText : styles.negativeText}>
                      {tx.amount}
                    </td>
                    <td>
                      <span className={`${styles.statusBadge} ${styles[tx.status]}`}>
                        {t.status[tx.status as keyof typeof t.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${styles.cardsSection} surface-panel`}>
          <div className={styles.cardHeader}>
            <h3>{t.finance.myCards}</h3>
          </div>
          
          <div className={styles.creditCard}>
            <div className={styles.cardTop}>
              <CreditCard size={24} color="white" />
              <span className={styles.cardBrand}>VISA</span>
            </div>
            <div className={styles.cardNumber}>**** **** **** 4289</div>
            <div className={styles.cardBottom}>
              <div>
                <p className={styles.cardLabel}>{t.finance.cardHolder}</p>
                <p className={styles.cardValue}>Admin User</p>
              </div>
              <div>
                <p className={styles.cardLabel}>{t.finance.expires}</p>
                <p className={styles.cardValue}>12/25</p>
              </div>
            </div>
          </div>

          <button className={styles.addCardBtn}>{t.finance.addCard}</button>
        </div>
      </div>
    </div>
  );
}
