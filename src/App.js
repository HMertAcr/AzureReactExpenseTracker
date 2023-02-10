import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: 300.0,
    date: new Date(2020, 2, 18),
    key : crypto.randomUUID()
  },
  {
    title: "New Desk (Wooden)",
    amount: 450.0,
    date: new Date(2021, 5, 12),
    key : crypto.randomUUID()
  },
  {
    title: "New TV",
    amount: 700.0,
    date: new Date(2022, 2, 28),
    key : crypto.randomUUID()
  },
  {
    title: "Cybernetic Implants",
    amount: 850.0,
    date: new Date(2019, 5, 12),
    key : crypto.randomUUID()
  },
  {
    title: "New Cat",
    amount: 10.0,
    date: new Date(2022, 2, 22),
    key : crypto.randomUUID()
  },
  {
    title: "New Desk (Metal)",
    amount: 500.0,
    date: new Date(2021, 6, 13),
    key : crypto.randomUUID()
  },
  {
    title: "New Computer",
    amount: 900.0,
    date: new Date(2020, 5, 24),
    key : crypto.randomUUID()
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <header>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
};

export default App;
