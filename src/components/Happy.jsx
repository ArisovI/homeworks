import React from "react";

class Happy extends React.Component {
  constructor() {
    super();
    this.state = {
      happy: ["apple", "orange", "blue", "green"],
      number: 0,
    };

    this.random = this.random.bind(this);
  }

  random() {
    this.setState({
      number: (this.state.number = Math.floor(
        Math.random() * this.state.happy.length
      )),
    });
    console.log(this.state.number);
  }

  render() {
    return (
      <div className={this.state.happy[this.state.number]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          aliquid.
        </p>
        <button onClick={this.random}>next</button>
      </div>
    );
  }
}

// const Happy = () => {
//   const [happy, setHappy] = React.useState([
//     "apple",
//     "orange",
//     "blue",
//     "green",
//   ]);

//   const [num, setNumb] = React.useState(1);

//   function ra() {
//     setNumb(Math.floor(Math.random() * happy.length));
//   }

//   return (
//     <div className={happy[num]}>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
//         aliquid.
//       </p>
//       <button onClick={ra}>next</button>
//     </div>
//   );
// };

export default Happy;
