import React from "react";

const Happy = () => {
  const [happy, setHappy] = React.useState([
    "apple",
    "orange",
    "blue",
    "green",
  ]);

  const [num, setNumb] = React.useState(1);

  function ra() {
    setNumb(Math.floor(Math.random() * happy.length));
  }

  return (
    <div className={happy[num]}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        aliquid.
      </p>
      <button onClick={ra}>next</button>
    </div>
  );
};

export default Happy;
