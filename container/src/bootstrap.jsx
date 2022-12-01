import App from "./App";
import React from "react";

import { createRoot } from "react-dom/client";
import { CountProvider } from "container/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <CountProvider>
    <App />
  </CountProvider>
);
