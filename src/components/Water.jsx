import React from "react";

const Water = () => {
  const [water, setWater] = React.useState(15);
  return (
    <div>
      <h1>Voda: {water}</h1>
      <button onClick={() => setWater(water + 1)}>+</button>
      <button onClick={() => setWater(water + 10)}>10+</button>
      <button onClick={() => setWater(water - 1)}>-</button>
      <button onClick={() => setWater(water - 10)}>10-</button>
    </div>
  );
};

export default Water;
