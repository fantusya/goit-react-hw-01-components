import PropTypes from 'prop-types';

export default function TransactionRow({ transactionType, transactionAmount, transactionCurrency }) {
    return (
      <>
        <td>{transactionType}</td>
        <td>{transactionAmount}</td>
        <td>{transactionCurrency}</td>
      </>
    )
}

TransactionRow.propTypes = {
    transactionType: PropTypes.string.isRequired,
    transactionAmount: PropTypes.string.isRequired,
    transactionCurrency: PropTypes.string.isRequired,
}