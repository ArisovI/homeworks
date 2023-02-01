import React from "react";
import "../style.scss";

class FirstTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, task: "first task", done: true },
        { id: 2, task: "sec task", done: true },
        { id: 3, task: "third task", done: true },
      ],
      input: "",
      todo: "123",
    };

    this.change = this.change.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
  }

  change(e) {
    this.setState({
      input: e.target.value,
    });
  }

  add() {
    const project = {
      id: this.state.todos.length + 1,
      task: this.state.input,
      done: true,
    };

    this.setState({
      todos: [...this.state.todos, project],
    });
  }

  checked(id) {
    this.setState({
      todos: [
        ...this.state.todos.map((item) =>
          item.id === id ? { ...item, done: !item.done } : { ...item }
        ),
      ],
    });
  }

  delete(id) {
    console.log(id);
    let del = this.state.todos.filter((e) => e.id !== id);
    this.setState({
      todos: del,
    });
  }
  render() {
    return (
      <div>
        <input onChange={this.change} type="text" />
        <button onClick={this.add}>add</button>
        <br />
        <div className="tasks">
          {this.state.todos.map((e) => (
            <p
              className={e.done ? "done" : "notdone"}
              onDoubleClick={() => this.checked(e.id)}
              key={e.id}
            >
              {e.task} <button onClick={() => this.delete(e.id)}>del</button>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

// const FirstTodo = () => {
//   const [value, setValue] = React.useState("");
//   const [todo, setTodo] = React.useState([
//     { id: 1, task: "asasdsadd", done: true },
//     { id: 2, task: "asa123321sdsadd", done: false },
//   ]);

//   function add() {
//     const project = {
//       id: todo.length + 1,
//       task: value,
//     };
//     value.trim() ? setTodo([...todo, project]) : alert("add task please");
//     setValue("");
//   }

//   function del(id) {
//     const black = todo.filter((item) => item.id !== id);
//     console.log(black);
//     setTodo(black);
//   }

//   function done(id) {
//     setTodo([
//       ...todo.map((item) =>
//         item.id == id ? { ...item, done: !item.done } : { ...item }
//       ),
//     ]);
//     console.log(todo);
//   }
//   return (
//     <div>
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         type="text"
//       />
//       <button onClick={add}>{todo.length}</button>
//       <div className="blog">
//         {todo.map((item) => (
//           <div
//             className={item.done ? "done" : "notdone"}
//             onDoubleClick={() => done(item.id)}
//             key={item.id}
//           >
//             {item.task}
//             <button onClick={() => del(item.id)}>delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
// );
// };

export default FirstTodo;
