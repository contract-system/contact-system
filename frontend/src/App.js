// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header_pricing from './components/Header/Header_pricing';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/contract/layout'; // If this is used somewhere

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contract" element={<Layout />} /> {/* Add this route */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
