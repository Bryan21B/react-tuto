import "./index.css";

import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { nanoid } from "nanoid";

const DATA = [
  { id: `todo-${nanoid(4)}`, name: "Eat", completed: true },
  { id: `todo-${nanoid(4)}`, name: "Sleep", completed: false },
  { id: `todo-${nanoid(4)}`, name: "Repeat", completed: false },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>,
);
