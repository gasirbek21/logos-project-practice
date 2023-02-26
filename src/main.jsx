import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Context } from "./utils/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Context>
                <App />
            </Context>
        </BrowserRouter>
    </React.StrictMode>
);
