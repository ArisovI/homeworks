import React from "react";
import "../style.scss";

const DarkMode = () => {
  const [mode, setMode] = React.useState(false);
  return (
    <div className={mode ? "dark" : "white"}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui
        inventore consectetur iste distinctio incidunt voluptatem adipisci, rem
        quibusdam sint quae sunt neque impedit vel.
        <button onClick={() => setMode(!mode)}>Change mode</button>
      </p>
    </div>
  );
};

export default DarkMode;
