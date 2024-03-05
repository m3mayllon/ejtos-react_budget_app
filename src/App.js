import React from "react";
import { AppProvider } from "./context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";

import AllocationForm from "./components/Allocation";
import Budget from "./components/Budget";
import Currency from "./components/Currency";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import RemainingBudget from "./components/Remaining";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Currency />
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Allocation</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Change allocation</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
