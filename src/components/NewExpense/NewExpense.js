import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    props.onAddExpense(expenseData);
  };

  const [addNewExpense, setAddNewExpense] = useState(false);

  const addNewExpenseButton = (
    <div className="new-expense">
      <button onClick={() => setAddNewExpense(true)}>Add New Expense</button>
    </div>
  );

  const addNewExpenseForm = (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {() => setAddNewExpense(false)}/>
    </div>
  );

  return (
    <div>
      {addNewExpense ? addNewExpenseForm : addNewExpenseButton}
    </div>
  );
};

export default NewExpense;
