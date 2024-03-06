import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import commonStyle from "../styles";

const Budget = () => {
  const { budget, currency, dispatch, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const value = event.target.value;

    const totalExpenses = expenses.reduce(
      (total, item) => total + item.cost,
      0
    );

    if (value >= 0) {
      if (value < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending.");
        return;
      }
      setNewBudget(value);
      dispatch({ type: "SET_BUDGET", payload: parseInt(value) });
    }
  };

  return (
    <div className="alert alert-secondary" style={commonStyle}>
      <span style={{ marginRight: "auto" }}>Budget:</span>
      <span style={{ fontWeight: "bold" }}>{currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        style={{
          fontWeight: "bold",
          height: "30px",
          width: "100px",
        }}
      />
    </div>
  );
};

export default Budget;
