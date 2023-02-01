import React from "react";

class Water extends React.Component {
  constructor() {
    super();
    this.state = {
      water: 15,
    };
  }
  render() {
    return (
      <div>
        <h1>Voda: {this.state.water}</h1>
        <button onClick={() => this.setState({ water: this.state.water + 1 })}>
          +
        </button>
        <button onClick={() => this.setState({ water: this.state.water + 10 })}>
          10+
        </button>
        <button onClick={() => this.setState({ water: this.state.water - 1 })}>
          -
        </button>
        <button onClick={() => this.setState({ water: this.state.water - 10 })}>
          10-
        </button>
      </div>
    );
  }
}

// const Water = () => {
//   const [water, setWater] = React.useState(15);
//   return (
//     <div>
//       <h1>Voda: {water}</h1>
//       <button onClick={() => setWater(water + 1)}>+</button>
//       <button onClick={() => setWater(water + 10)}>10+</button>
//       <button onClick={() => setWater(water - 1)}>-</button>
//       <button onClick={() => setWater(water - 10)}>10-</button>
//     </div>
//   );
// };

export default Water;
