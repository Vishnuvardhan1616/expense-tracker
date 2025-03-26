import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.text} <span>{transaction.amount}</span>
            <button onClick={() => deleteTransaction(transaction.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
