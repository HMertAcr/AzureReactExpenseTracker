import React, { useState, useEffect } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  let years = [
    ...props.items.map((expense) => expense.date.getFullYear().toString()),
  ]
    .filter((year, index, array) => array.indexOf(year) === index)
    .sort()
    .reverse();

  const [filteredYear, setFiltered] = useState("");
  const [yearsDisplayed, setYearsDisplayed] = useState(false);

  //this feels like a hack, but it works
  useEffect(() => {
    if (years.length > 0 && !yearsDisplayed) {
      setFiltered(years[0]);
      setYearsDisplayed(true);
    }
  }, [years, yearsDisplayed]);

  const filterChangeHandler = (selectedYear) => {
    setFiltered(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          years={years}
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          filter={filteredExpenses}
          onDelete={props.onRemoveExpense}
        />
      </Card>
    </div>
  );
};

export default Expenses;
