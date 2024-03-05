import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
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
          paddingLeft: "25px",
          fontWeight: "bold",
          height: "30px",
          width: "100px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default Budget;
