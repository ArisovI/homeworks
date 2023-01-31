import React from "react";
import "../style.scss";

const FirstTodo = () => {
  const [value, setValue] = React.useState("");
  const [todo, setTodo] = React.useState([
    { id: 1, task: "asasdsadd", done: true },
    { id: 2, task: "asa123321sdsadd", done: false },
  ]);

  function add() {
    const project = {
      id: todo.length + 1,
      task: value,
    };
    value.trim() ? setTodo([...todo, project]) : alert("add task please");
    setValue("");
  }

  function del(id) {
    const black = todo.filter((item) => item.id !== id);
    console.log(black);
    setTodo(black);
  }

  function done(id) {
    setTodo([
      ...todo.map((item) =>
        item.id == id ? { ...item, done: !item.done } : { ...item }
      ),
    ]);
    console.log(todo);
  }
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={add}>{todo.length}</button>
      <div className="blog">
        {todo.map((item) => (
          <div
            className={item.done ? "done" : "notdone"}
            onDoubleClick={() => done(item.id)}
            key={item.id}
          >
            {item.task}
            <button onClick={() => del(item.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstTodo;
