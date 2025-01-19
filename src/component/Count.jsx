import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount((c) => {
      return c + 1;
    });
    setCount((c) => {
      return c + 1;
    });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handelClick}>+</button>
    </div>
  );
};

export default Count;
