import React from "react";
import "./toggle.scss";
const Toggle = () => {
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    console.log(`Your block is ${toggle}`);
  });
  return (
    <>
      <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
        Toggle Button
      </button>
      {toggle ? (
        <div className="toggle">
          <div className="toggle-block">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            tenetur reprehenderit sed reiciendis tempora natus?
          </div>
        </div>
      ) : (
        "  "
      )}
    </>
  );
};

export default Toggle;
