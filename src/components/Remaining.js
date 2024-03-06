import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import commonStyle from "../styles";

const Remaining = () => {
  const { budget, currency, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`} style={commonStyle}>
      <span style={{ marginRight: "auto" }}>Remaining:</span>
      <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
        {currency}
        {(budget - totalExpenses).toLocaleString()}
      </span>
    </div>
  );
};

export default Remaining;
