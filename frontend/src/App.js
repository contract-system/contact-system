// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Header_pricing from './components/Header/Header_pricing';


import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// تأكد من عدم وجود استيراد فارغ هنا
// import './'; // مثال على استيراد فارغ قد يسبب الخطأ

const App = () => {
  return (
    <Router>
      <Header_pricing />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* أضف المزيد من المسارات حسب الحاجة */}
      </Routes>
      <About/>
      <Hero/>

      <Footer />
    </Router>
  );
};

export default App;
