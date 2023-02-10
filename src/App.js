import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: 300.0,
    date: new Date(2020, 2, 18),
    key : this.title + this.amount.tostring() + Math.random().tostring()
  },
  {
    title: "New Desk (Wooden)",
    amount: 450.0,
    date: new Date(2021, 5, 12),
    key : this.title + this.amount.tostring() + Math.random().tostring()
  },
  {
    title: "New TV",
    amount: 700.0,
    date: new Date(2022, 2, 28),
    key : this.title + this.amount.tostring() + Math.random().tostring()
  },
  {
    title: "Cybernetic Implants",
    amount: 850.0,
    date: new Date(2019, 5, 12),
    key : this.title + this.amount.tostring() + Math.random().tostring()
  },
  {
    title: "New Cat",
    amount: 10.0,
    date: new Date(2022, 2, 22),
    key : this.title + this.amount.tostring() + Math.random().tostring()
  },
  {
    title: "New Desk (Metal)",
    amount: 500.0,
    date: new Date(2021, 6, 13),
    key : this.title + this.amount.tostring() + Math.random().tostring()
  },
  {
    title: "New Computer",
    amount: 900.0,
    date: new Date(2020, 5, 24),
    key : this.title + this.amount.tostring() + Math.random().tostring()
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
