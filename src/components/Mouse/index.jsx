import React from "react";
import "./mouse.scss";
const Mouse = () => {
  const [click, setClick] = React.useState(1);
  const [xmouse, setXmouse] = React.useState(null);
  const [ymouse, setYmouse] = React.useState(null);

  function map(e) {
    setXmouse(e.clientX);
    setYmouse(e.clientY);
  }

  React.useEffect(() => {
    console.log("Move mouse");
  }, [xmouse, ymouse]);

  return (
    <div onMouseMove={map} className="mouse">
      You clicked {click} times
      <button onClick={() => setClick(click + 1)}>click me</button>
      <p>X position:{xmouse}</p>
      <p> Y position: {ymouse}</p>
    </div>
  );
};

export default Mouse;
