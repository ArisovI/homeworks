import React from "react";
import "./style.scss";

const Add = () => {
  const [numb, setNumb] = React.useState([1, 2, 3]);

  function asd() {
    setNumb([...numb, numb.length + 1]);
  }

  return (
    <div className="add">
      <ul className="add-ul">
        {numb.map((num, index) => (
          <li key={index} className="add-li">item {num}</li>
        ))}
      </ul>
      <button className="add-btn" onClick={asd}>Add</button>
    </div>
  );
};

export default Add;
