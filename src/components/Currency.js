import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency, setCurrency } = useContext(AppContext);

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
      <span style={{ marginRight: "auto" }}>Currency:</span>
      <select
        value={currency}
        onChange={handleCurrencyChange}
        style={{
          fontWeight: "bold",
          height: "30px",
          width: "100px",
        }}
      >
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="$">$ Dollar</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;
