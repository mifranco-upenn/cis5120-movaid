import React from "react";
import ReactDOMClient from "react-dom/client";
import { PrototypeMain } from "./screens/PrototypeMain";
import { PrototypeTodo } from "./screens/PrototypeTodo";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PrototypeTodo />);
