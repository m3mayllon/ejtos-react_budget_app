import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, setCurrency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
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
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        style={{
          paddingLeft: "25px",
          fontWeight: "bold",
          width: "100px",
          boxSizing: "border-box",
        }}
      />
      <span style={{ marginRight: "auto" }}>Currency:</span>
      <select
        value={currency}
        onChange={handleCurrencyChange}
        style={{ fontWeight: "bold" }}
      >
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="$">$ Dollar</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default Budget;
