import { DollarSign, TrendingUp, TrendingDown, CreditCard, ArrowRight } from 'lucide-react';
import styles from './finance.module.css';

export default function Finance() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>Finance Dashboard</h1>
          <p>Manage your revenue, expenses, and financial health.</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryButton}>Export CSV</button>
          <button className={styles.primaryButton}>New Transaction</button>
        </div>
      </div>

      <div className={styles.balanceGrid}>
        <div className={`${styles.balanceCard} glass-panel`}>
          <div className={styles.cardHeader}>
            <h3>Total Balance</h3>
            <DollarSign className={styles.iconBlue} size={24} />
          </div>
          <p className={styles.balanceAmount}>$128,450.00</p>
          <div className={styles.trend}>
            <TrendingUp size={16} className={styles.positive} />
            <span className={styles.positive}>+8.5%</span> from last month
          </div>
        </div>

        <div className={`${styles.balanceCard} glass-panel`}>
          <div className={styles.cardHeader}>
            <h3>Monthly Income</h3>
            <TrendingUp className={styles.iconGreen} size={24} />
          </div>
          <p className={styles.balanceAmount}>$45,231.89</p>
          <div className={styles.trend}>
            <TrendingUp size={16} className={styles.positive} />
            <span className={styles.positive}>+12.5%</span> from last month
          </div>
        </div>

        <div className={`${styles.balanceCard} glass-panel`}>
          <div className={styles.cardHeader}>
            <h3>Monthly Expenses</h3>
            <TrendingDown className={styles.iconRed} size={24} />
          </div>
          <p className={styles.balanceAmount}>$18,900.50</p>
          <div className={styles.trend}>
            <TrendingDown size={16} className={styles.negative} />
            <span className={styles.negative}>-2.4%</span> from last month
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={`${styles.transactionsCard} glass-panel`}>
          <div className={styles.cardHeader}>
            <h3>Recent Transactions</h3>
            <button className={styles.textButton}>View All <ArrowRight size={16}/></button>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { desc: 'Stripe Payout', date: 'Oct 24, 2023', cat: 'Income', amount: '+$4,500.00', status: 'Completed', type: 'income' },
                  { desc: 'AWS Hosting', date: 'Oct 23, 2023', cat: 'Infrastructure', amount: '-$850.00', status: 'Completed', type: 'expense' },
                  { desc: 'Upwork Freelancers', date: 'Oct 21, 2023', cat: 'Contractors', amount: '-$1,200.00', status: 'Pending', type: 'expense' },
                  { desc: 'Annual Subscription', date: 'Oct 19, 2023', cat: 'Software', amount: '-$299.00', status: 'Completed', type: 'expense' },
                  { desc: 'Client Invoice #1023', date: 'Oct 15, 2023', cat: 'Income', amount: '+$8,250.00', status: 'Completed', type: 'income' },
                ].map((tx, i) => (
                  <tr key={i}>
                    <td>{tx.desc}</td>
                    <td className={styles.dimText}>{tx.date}</td>
                    <td><span className={styles.badge}>{tx.cat}</span></td>
                    <td className={tx.type === 'income' ? styles.positiveText : styles.negativeText}>
                      {tx.amount}
                    </td>
                    <td>
                      <span className={`${styles.statusBadge} ${styles[tx.status.toLowerCase()]}`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${styles.cardsSection} glass-panel`}>
          <div className={styles.cardHeader}>
            <h3>My Cards</h3>
          </div>
          
          <div className={styles.creditCard}>
            <div className={styles.cardTop}>
              <CreditCard size={24} color="white" />
              <span className={styles.cardBrand}>VISA</span>
            </div>
            <div className={styles.cardNumber}>**** **** **** 4289</div>
            <div className={styles.cardBottom}>
              <div>
                <p className={styles.cardLabel}>Card Holder</p>
                <p className={styles.cardValue}>Admin User</p>
              </div>
              <div>
                <p className={styles.cardLabel}>Expires</p>
                <p className={styles.cardValue}>12/25</p>
              </div>
            </div>
          </div>

          <button className={styles.addCardBtn}>+ Add New Card</button>
        </div>
      </div>
    </div>
  );
}
