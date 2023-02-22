import React, { useReducer, useState } from "react";
import reducer from "./reducer";
const initialState = { count: 0 };
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [visible, setVisible] = useState(true);

  return (
    <div className="counter">
      <button onClick={() => setVisible(!visible)}>Toggle hidden</button>
      <div className={visible ? "counter-block" : "counter-none"}>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
