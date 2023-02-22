import React from "react";
import "./colors.scss";

const Colors = () => {
  const [color, setColor] = React.useState("blue");

  function change(e) {
    setColor(e.target.value);
  }

  return (
    <div className={color}>
      <select onChange={change} value={color}>
        <option value="nothing">Nothing</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>
      <h1>Your color is {color}</h1>
    </div>
  );
};

export default Colors;
