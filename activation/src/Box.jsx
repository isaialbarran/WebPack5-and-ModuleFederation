import React from 'react'
import "./index.css"

function Box(props) {

  return (
    <div className="counter1">
    <h1>Activation App Counter</h1>
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
  )
}

export default Box