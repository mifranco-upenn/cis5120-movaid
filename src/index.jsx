import React from "react";
import ReactDOMClient from "react-dom/client";
import { PrototypeMain } from "./screens/PrototypeMain";
import { PrototypeTodo } from "./screens/PrototypeTodo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrototypeMain />} />
                <Route path="/todo" element={<PrototypeTodo />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOMClient.createRoot(app);
root.render(<App />);
