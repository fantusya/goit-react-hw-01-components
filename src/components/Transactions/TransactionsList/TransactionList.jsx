import PropTypes from 'prop-types';
import TransactionRow from '../TransactionRow/TransactionRow';
import { TransactionTableBody } from './TransactionList.styled';

export default function TransactionList({ transactions }) {
    return (
      <TransactionTableBody>
        {transactions.map(transaction =>
          <tr key={transaction.id}>
            <TransactionRow
              transactionType={transaction.type}
              transactionAmount={transaction.amount}
              transactionCurrency={transaction.currency}
            />
          </tr>)
        }
      </TransactionTableBody>
    )
};

TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}