import React from "react";
import "./time.scss";
const Time = () => {
  const [time, setTime] = React.useState(null);

  setInterval(() => {
    (function () {
      setTime(new Date().toLocaleTimeString());
    })();
  }, 1000);

  return <div className="time">Time is {time}</div>;
};

export default Time;
