import React, { useState } from "react";
import "./header.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <h1>Feasibility App Counter</h1>
      <span className="">{counter}</span>
      <div className="">
        <button className="" onClick={increase}>
          +
        </button>
        <button className="" onClick={decrease}>
          -
        </button>
        <button className="" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
