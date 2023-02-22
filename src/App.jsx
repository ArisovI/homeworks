import React from "react";
import Buy from "./components/Buy";
import Checked from "./components/Checked";
import Connect from "./components/Connect";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

import "./style.scss";
const App = () => {
  return (
    <div>
      <Todo />
      <Checked />
      <Counter />
      <Connect />
      <Buy />
    </div>
  );
};

export default App;
