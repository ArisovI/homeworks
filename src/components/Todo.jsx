import React, { useState, useReducer } from "react";
import reducer from "./reducer";
const Todo = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [todoTitle, setTodoTitle] = useState("");
  const addTodo = () => {
    if (todoTitle.trim() != "") {
      dispatch({
        type: "add",
        payload: todoTitle,
      });
      setTodoTitle("");
    }
  };

  return (
    <div className="todo">
      <div className="todo-top">
        <h1>New task</h1>
        <div className="todo-top__input">
          <input
            type="text"
            placeholder="Something neat"
            onChange={(event) => setTodoTitle(event.target.value)}
            value={todoTitle}
          />
          <button onClick={addTodo}>ADD</button>
        </div>
      </div>
      <div className="todo-bottom">
        <ul>
          {state.length ? (
            state.map(({ title }, index) => (
              <li key={index}>
                <span>{title}</span>
                <button
                  onClick={() => dispatch({ type: "remove", payload: title })}
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <li style={{ justifyContent: "center" }}>None</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
