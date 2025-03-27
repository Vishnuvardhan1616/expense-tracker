import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  // Group transactions by date (formatted as a local date string)
  const groupedTransactions = transactions.reduce((groups, transaction) => {
    // If the transaction has a date, convert it; otherwise, use "No Date"
    const dateKey = transaction.date
      ? new Date(transaction.date).toLocaleDateString()
      : "No Date";

    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(transaction);
    return groups;
  }, {});

  // Get a sorted list of dates (newest first)
  const sortedDates = Object.keys(groupedTransactions).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <div>
      <h3>History</h3>
      {sortedDates.map((dateKey) => (
        <div key={dateKey}>
          <h4>{dateKey}</h4>
          <ul className="list">
            {groupedTransactions[dateKey].map((transaction) => (
              <li
                key={transaction.id}
                className={transaction.amount < 0 ? "minus" : "plus"}
              >
                {transaction.text} <span>{transaction.amount}</span>
                <button onClick={() => deleteTransaction(transaction.id)}>
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
