import React from "react";
import "./index.css";

function Counter(props) {

  return (
    <div className="counter">
      <h1>Feasibility App Counter</h1>
      <span className="">{props.count}</span>
      <div className="">
        <button className="btn-secondary" onClick={props.increment}>
          +
        </button>
        <button className="btn-secondary" onClick={props.decrement}>
          -
        </button>
        <button className="btn-secondary" onClick={props.clear}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
