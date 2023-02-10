import React from "react";
import "./style.scss";
const Reset = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="click-container">
      <h1>{counter}</h1>
      <div className="did">
        <button className="plus" onClick={() => setCounter(counter + 1)}>
          +
        </button>
        <button
          className="minus"
          onClick={counter > 0 ? () => setCounter(counter - 1) : null}
        >
          -
        </button>
      </div>
      <button className="reset" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
