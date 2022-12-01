import React from "react";
import Counter from "./Counter";
import { CountProvider } from "container/store";


function App() {
  return (
  <CountProvider>
    <Counter />
  </CountProvider>)
}

export default App;
