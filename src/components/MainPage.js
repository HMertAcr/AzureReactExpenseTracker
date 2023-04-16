import React, { useState, useEffect } from "react";
// import mysql from "mysql";
// import fs from "fs";

import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

// const config = {
//   host: "expense-tracker-demo.mysql.database.azure.com",
//   user: "expense_admin",
//   password: "Berkay147258369",
//   database: "quickstartdb",
//   port: 3306,
//   ssl: { ca: fs.readFileSync("public\BaltimoreCyberTrustRoot.crt.pem") },
// };

const DUMMY_EXPENSES = {
  admin: [
    {
      title: "Toilet Paper",
      amount: 94,
      date: new Date(2023, 7, 14),
      key: Math.random().toString(),
    },
    {
      title: "Car Insurance",
      amount: 300,
      date: new Date(2020, 2, 18),
      key: Math.random().toString(),
    },
    {
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      key: Math.random().toString(),
    },
    {
      title: "New TV",
      amount: 700,
      date: new Date(2022, 2, 28),
      key: Math.random().toString(),
    },
    {
      title: "Cybernetic Implants",
      amount: 850,
      date: new Date(2019, 5, 12),
      key: Math.random().toString(),
    },
    {
      title: "New Cat",
      amount: 10,
      date: new Date(2022, 2, 22),
      key: Math.random().toString(),
    },
    {
      title: "New Desk (Metal)",
      amount: 500,
      date: new Date(2021, 6, 13),
      key: Math.random().toString(),
    },
    {
      title: "New Computer",
      amount: 900,
      date: new Date(2020, 5, 24),
      key: Math.random().toString(),
    },
  ],
  user: [
    {
      title: "user expense",
      amount: 300,
      date: new Date(2015, 2, 18),
      key: Math.random().toString(),
    },
    {
      title: "user expense",
      amount: 300,
      date: new Date(2016, 2, 18),
      key: Math.random().toString(),
    },
    {
      title: "user expense",
      amount: 300,
      date: new Date(2017, 2, 18),
      key: Math.random().toString(),
    },
    {
      title: "user expense",
      amount: 300,
      date: new Date(2018, 2, 18),
      key: Math.random().toString(),
    },
    {
      title: "user expense",
      amount: 300,
      date: new Date(2019, 2, 18),
      key: Math.random().toString(),
    },
    {
      title: "user expense",
      amount: 300,
      date: new Date(2020, 2, 18),
      key: Math.random().toString(),
    },
  ],
};

const MainPage = (props) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (props.user in DUMMY_EXPENSES) {
      setExpenses(DUMMY_EXPENSES[props.user]);
    } else {
      DUMMY_EXPENSES[props.user] = [];
      setExpenses(DUMMY_EXPENSES[props.user]);
    }
  }, [props.user]);

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
        <Expenses items={expenses} onRemoveExpense={deleteExpenseHandler} />
      </header>
    </div>
  );
};

export default MainPage;
