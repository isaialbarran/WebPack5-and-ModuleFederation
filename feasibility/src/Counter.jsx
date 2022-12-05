import React from "react";
import "./index.css";
import useStore from "container/store";

function Counter() {
  const { count, increment, decrement, clear } = useStore();

  return (
    <div className="counter">
      <h1>Feasibility App Counter</h1>
      <span className="">{count}</span>
      <div className="">
        <button className="btn-secondary" onClick={increment}>
          +
        </button>
        <button className="btn-secondary" onClick={decrement}>
          -
        </button>
        <button className="btn-secondary" onClick={clear}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
