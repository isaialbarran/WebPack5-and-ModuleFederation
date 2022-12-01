import React from "react";
import "./header.css";
import useStore from "container/store";

function Counter() {
  const { count, increment, decrement, clear } = useStore();

  return (
    <div className="counter">
      <h1>Feasibility App Counter</h1>
      <span className="">{count}</span>
      <div className="">
        <button className="" onClick={increment}>
          +
        </button>
        <button className="" onClick={decrement}>
          -
        </button>
        <button className="" onClick={clear}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
