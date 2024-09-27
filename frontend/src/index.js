// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/contract/layout'; // Import your Layout component
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from "./components/Profile/Profile";
import Subscription from "./components/Profile/Subscription";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/main.css"; // Your custom styles
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="mouse-cursor cursor-outer"></div>
    <div className="mouse-cursor cursor-inner"></div>
    <BrowserRouter>
      {/* Wrap everything in BrowserRouter */}
      <Routes>
        <Route path="/" element={<App />} /> {/* Main App route */}
        <Route path="/contract" element={<Layout />} /> {/* New route for Layout */}
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Register" element={<Register />} /> 
        <Route path="/contract" element={<Layout />} />{" "}
        {/* New route for Layout */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
