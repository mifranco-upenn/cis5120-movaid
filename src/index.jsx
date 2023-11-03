import React from "react";
import ReactDOMClient from "react-dom/client";
import { PrototypeMain } from "./screens/PrototypeMain";
import { PrototypeTodo } from "./screens/PrototypeTodo";
import { PrototypePurchase } from "./screens/PrototypePurchase"
import { PrototypeGetting } from "./screens/PrototypeGetting"
import { PrototypeMoveIn } from "./screens/PrototypeMoveIn"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrototypeMain />} />
                <Route path="/list" element={<PrototypePurchase />} />
                <Route path="/todo" element={<PrototypeTodo />} />
                <Route path="/plan" element={<PrototypeMoveIn />} />
                <Route path="/city" element={<PrototypeGetting />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOMClient.createRoot(app);
root.render(<App />);
