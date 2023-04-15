import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: 300.0,
    date: new Date(2020, 2, 18),
    key : Math.random().toString()
  },
  {
    title: "New Desk (Wooden)",
    amount: 450.0,
    date: new Date(2021, 5, 12),
    key : Math.random().toString()
  },
  {
    title: "New TV",
    amount: 700.0,
    date: new Date(2022, 2, 28),
    key : Math.random().toString()
  },
  {
    title: "Cybernetic Implants",
    amount: 850.0,
    date: new Date(2019, 5, 12),
    key : Math.random().toString()
  },
  {
    title: "New Cat",
    amount: 10.0,
    date: new Date(2022, 2, 22),
    key : Math.random().toString()
  },
  {
    title: "New Desk (Metal)",
    amount: 500.0,
    date: new Date(2021, 6, 13),
    key : Math.random().toString()
  },
  {
    title: "New Computer",
    amount: 900.0,
    date: new Date(2020, 5, 24),
    key : Math.random().toString()
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = (expenseKey) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.key !== expenseKey);
    });
  };

  return (
    <div>
      <header>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} onRemoveExpense={deleteExpenseHandler}/>
      </header>
    </div>
  );
};

export default App;
