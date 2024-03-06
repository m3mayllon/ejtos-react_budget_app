import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import commonStyle from "../styles";

const ExpenseTotal = () => {
  const { currency, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary" style={commonStyle}>
      <span style={{ marginRight: "auto" }}>Spent so far:</span>
      <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
        {currency}
        {totalExpenses.toLocaleString()}
      </span>
    </div>
  );
};

export default ExpenseTotal;
