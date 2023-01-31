import React from "react";

const ClickMe = () => {
  const [counter, setCounter] = React.useState(1);
  return (
    <div>
      Далеко-далеко за словесными горами в стране гласных и согласных живут
      рыбные тексты. Вершину лучше назад это диких текста его одна единственное,
      реторический живет возвращайся текстов имеет семь.
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
};

export default ClickMe;
