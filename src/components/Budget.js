import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const value = event.target.value;
    if (value >= 0) {
      setNewBudget(value);
      dispatch({ type: "SET_BUDGET", payload: parseInt(value) });
    }
  };

  return (
    <div
      className="alert alert-secondary"
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "10px",
        height: "60px",
      }}
    >
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
