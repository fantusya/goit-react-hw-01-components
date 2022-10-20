import PropTypes from 'prop-types';
import TransactionRow from './TransactionRow';

export default function TransactionList({ transactions }) {
    return (
      <tbody>
        {transactions.map(transaction =>
          <tr key={transaction.id}>
            <TransactionRow
              transactionType={transaction.type}
              transactionAmount={transaction.amount}
              transactionCurrency={transaction.currency}
            />
          </tr>)
        }
      </tbody>
    )
};

TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}