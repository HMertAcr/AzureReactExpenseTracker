import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button
            className="expense-item__delete-button"
            onClick={() => props.onDelete(props.expenseKey)}
          >
            <svg
              width={12}
              height={12}
              viewport="0 0 12 12"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="12"
                x2="12"
                y2="0"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="0"
                y1="0"
                x2="12"
                y2="12"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
