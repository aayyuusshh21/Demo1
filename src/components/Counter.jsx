import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>count:- {count}</h1>
      <button onClick={add}></button>
    </div>
  );
};
