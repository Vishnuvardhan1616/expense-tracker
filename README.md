## Expense Tracker
A simple and responsive Expense Tracker application built using React and Context API. This project allows you to monitor your finances by adding transactions with details such as description, amount, and date. Track your income and expenses, view your current balance, and analyze your spending patterns on a daily basis.

## Features
✅ Add Transactions – Enter a transaction with a description, amount (negative for expense, positive for income), and date.  
✅ Group by Date – View transactions grouped by the date they occurred.  
✅ View Balance – Automatically calculated balance based on all transactions.  
✅ Income & Expense Summary – Separate breakdown of total income and expenses.  
✅ Manage Transactions – Easily delete transactions you no longer need.  
✅ Responsive Design – Optimized for both mobile and desktop viewing.

## Tech Stack
Frontend: React, Context API (for state management)  
Styling: CSS  
Tools: Create React App

## Installation
Clone the repository:
```sh
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
Install dependencies:

sh
Copy
Edit
npm install
Start the development server:

sh
Copy
Edit
npm start
Project Structure

## project structure
php
Copy
Edit
expense-tracker/
├── public/                  # Public assets (e.g., index.html)
├── src/
│   ├── components/          # Reusable React components
│   │   ├── AddTransaction.js  # Form to add new transactions (with date support)
│   │   ├── Balance.js         # Displays current balance
│   │   ├── Header.js          # Header component
│   │   ├── IncomeExpense.js   # Displays income and expense summary
│   │   └── TransactionList.js # Lists all transactions grouped by date
│   ├── context/             # Context API setup for global state
│   │   └── GlobalState.js     # Global state and reducer for managing transactions
│   ├── App.js               # Main application component tying everything together
│   └── styles.css           # Project styling
├── .gitignore
├── package.json
└── README.md                # This file
Contributing Contributions are welcome! Feel free to fork this repo and submit a pull request with your improvements.

License This project is open-source and available under the MIT License.
