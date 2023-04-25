import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PlayersProvider } from "./contexts/PlayersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PlayersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PlayersProvider>
);
