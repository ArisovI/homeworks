import React from "react";
import "./click.scss";
const Click = () => {
  const [number, setNumber] = React.useState(1);
  const [text, setText] = React.useState("Guy");
  const [one, setOne] = React.useState(1);
  function random() {
    let ra = Math.floor(Math.random() * 100);
    setNumber(ra);
  }

  function plus() {
    setText(text + "y");
    setOne(one + 1);
  }



  React.useEffect(() => {
    console.log("Change your name");
  }, [text]);

  return (
    <div className="click">
      <p>Welcome Cool {text}!</p>
      <p>Your lucky number is {number}</p>
      <p>Name has changed {one} times</p>
      <button onClick={ plus}>Change Name</button>
      <button onClick={random}>Get New Lucky Number</button>
    </div>
  );
};

export default Click;
