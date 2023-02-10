import React from "react";
import Add from "./components/Add";
import Click from "./components/Click";
import Colors from "./components/Colors";
import Mouse from "./components/Mouse";
import Photos from "./components/Photos";
import Reset from "./components/Reset";
import Scroll from "./components/Scroll";
import Time from "./components/Time";
import Toggle from "./components/Toggle";
import "./style.scss";
const App = () => {
  return (
    <div>
      <Reset />
      <Add />
      <Colors />
      <Click />
      <Mouse />
      <Time />
      <Scroll />
      <Toggle />
      <Photos />
    </div>
  );
};

export default App;
