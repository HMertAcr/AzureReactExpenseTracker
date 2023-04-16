import React, { useState, useEffect } from "react";

import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const MainPage = (props) => {
  const [expenses, setExpenses] = useState([]);

  const createUser = async (username) => {
    const response = await fetch("http://localhost:3001/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    });
    if (response.ok) {
      console.log("User created");
      return true;
    } else {
      console.error(`Error creating user: ${response.statusText}`);
      return false;
    }
  };

  const readData = async (username) => {
    const response = await fetch(`http://localhost:3001/readData/${username}`);
    const rawData = await response.json();
    if (response.ok) {
      const data = rawData.map((item) => ({
        ...item,
        date: new Date(item.date),
      }));
      setExpenses(data);
      console.log(data);
    }
  };

  useEffect(() => {
    const fetchExpenses = async () => {
      const userCreated = await createUser(props.user);
      if (userCreated) {
        await readData(props.user);
      }
    };
    if (props.user !== "") {
      fetchExpenses();
    }
  }, [props.user]);

  const addExpenseHandler = async (expense) => {
    const dateStr = expense.date.toISOString().split('T')[0]; // Convert the date to a MySQL-compatible date string
    const response = await fetch("http://localhost:3001/insertData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...expense, date: dateStr, username: props.user }),
    });

    // if (response.ok) {
    //   setExpenses((prevExpenses) => {
    //     return [expense, ...prevExpenses];
    //   });
    // }
    if (response.ok) {
      console.log("Data inserted");
      await readData(props.user);
    }
  };

  const deleteExpenseHandler = async (expenseKey) => {
    const response = await fetch("http://localhost:3001/deleteData", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: props.user, id: expenseKey }),
    });

    // if (response.ok) {
    //   setExpenses((prevExpenses) => {
    //     return prevExpenses.filter((expense) => expense.key !== expenseKey);
    //   });
    // }
    if (response.ok) {
      console.log("Data deleted");
      await readData(props.user);
    }
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
