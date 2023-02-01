import React from "react";
import "../style.scss";

class DarkMode extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: false,
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.setState({
      mode: !this.state.mode,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className={this.state.mode ? "dark" : "white"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui
          inventore consectetur iste distinctio incidunt voluptatem adipisci,
          rem quibusdam sint quae sunt neque impedit vel.
          <button onClick={this.changeMode}>Change mode</button>
        </p>
      </div>
    );
  }
}

// const DarkMode = () => {
//   const [mode, setMode] = React.useState(false);
//   return (
//     <div className={mode ? "dark" : "white"}>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui
//         inventore consectetur iste distinctio incidunt voluptatem adipisci, rem
//         quibusdam sint quae sunt neque impedit vel.
//         <button onClick={() => setMode(!mode)}>Change mode</button>
//       </p>
//     </div>
//   );
// };

export default DarkMode;
