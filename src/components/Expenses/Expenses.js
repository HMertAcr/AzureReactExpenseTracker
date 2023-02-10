import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  let years = ["2015", "2016", "2017", "2018", "2019"];

  years = [
    ...years,
    ...props.items.map((expense) => expense.date.getFullYear().toString()),
  ]
    .filter((year, index, array) => array.indexOf(year) === index)
    .sort()
    .reverse();

  const [filteredYear, setFiltered] = useState(years[0]);

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
        <ExpensesList filter={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
