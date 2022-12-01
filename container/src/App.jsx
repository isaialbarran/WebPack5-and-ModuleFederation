import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";

import useStore from "container/store";

import "./index.css";

const Feasibility = React.lazy(() => import("feasibility/Counter"));
const Activation = React.lazy(() => import("activation/Box"));

const App = () => {
  const { count, increment } = useStore();
  return (
    <BrowserRouter>
      <div>Count: {count}</div>
      <button onClick={increment}>Add</button>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div className="my-10">
          <div className="list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feasibility">Feasibility</Link>
              </li>
              <li>
                <Link to="/activation">Activation</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/feasibility"
              element={
                <Suspense fallback={"loading..."}>
                  <Feasibility />
                </Suspense>
              }
            />
            <Route
              path="/activation"
              element={
                <Suspense fallback={"loading..."}>
                  <Activation />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
