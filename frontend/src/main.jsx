import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure to import these
import App from "./App.jsx"; // Ensure this path is correct
import "./index.css";
import Layout from "./components/layout.jsx"; // Ensure this path is correct

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
