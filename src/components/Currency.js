import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import commonStyle from "../styles";

const Currency = () => {
  const { currency, setCurrency } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="alert alert-secondary" style={commonStyle}>
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
