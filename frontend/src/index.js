// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css'; // Your custom styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/contract/layout'; // Import your Layout component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="mouse-cursor cursor-outer"></div>
    <div class="mouse-cursor cursor-inner"></div>
    <BrowserRouter> {/* Wrap everything in BrowserRouter */}
      <Routes>
        <Route path="/" element={<App />} /> {/* Main App route */}
        <Route path="/contract" element={<Layout />} /> {/* New route for Layout */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
