import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  } 
  return <div style={{fontSize:"50rem", margin: "auto" ,}} onClick={increment}>{count}</div>;
} 
export default Counter;
