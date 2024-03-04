import React, { useContext } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td style={{ textAlign: "center" }}>£{props.cost.toLocaleString()}</td>
      <td style={{ textAlign: "center" }}>
        <FaPlusCircle
          size="1.5em"
          style={{ color: "green" }}
          onClick={(event) => increaseAllocation(props.name)}
        >
          +
        </FaPlusCircle>
      </td>
      <td style={{ textAlign: "center" }}>
        <FaMinusCircle
          size="1.5em"
          style={{ color: "darkred" }}
          onClick={(event) => decreaseAllocation(props.name)}
        >
          -
        </FaMinusCircle>
      </td>
      <td style={{ textAlign: "center" }}>
        <FaCircleXmark size="1.5em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
