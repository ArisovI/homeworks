import React from "react";
import "./scroll.scss";

const Scroll = () => {
  const [myScroll, setMyScroll] = React.useState(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setMyScroll(
        Math.floor((100 / document.body.scrollHeight) * window.pageYOffset)
      );

    });
  });

  return (
    <div className={myScroll == 100 ? "scroll" : "scrollE"}>{myScroll}</div>
  );
};

export default Scroll;
