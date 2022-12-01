import React from "react";
import "./header.css";
import { useCount } from "container/store"

function Counter() {
  const [count, setCount] = useCount();

  return (
    <div className="counter">
      <h1>Feasibility App Counter</h1>
      <span className="">{count}</span>
      <div className="">
        <button className="" onClick={()=> {setCount(count + 1)}}>
          +
        </button>
        <button className="" onClick={()=> {setCount(count - 1)}}>
          -
        </button>
        <button className="" onClick={()=> {setCount(0)}}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
