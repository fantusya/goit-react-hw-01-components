import { TransactionContainer, TransactionTable, TransactionTableHead } from "./TransactionTable.styled"

export default function TransactionHistory({ children }) {
  return (
      <TransactionContainer>
        <TransactionTable>
          <TransactionTableHead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </TransactionTableHead>
          {children}
        </TransactionTable>
      </TransactionContainer>
    )
};