// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header_pricing";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Layout from "./components/contract/layout"; // If this is used somewhere
import Profile from "./components/Profile/Profile";
import Subscription from "./components/Profile/Subscription";

const App = () => {
  return (
    <>
      <Header />
      {/* Uncomment this if you want to show the Hero section */}
      {/* <Hero /> */}
      {/* Uncomment this if you want to show the Services section */}
      {/* <Services /> */}
      {/* Uncomment this if you want to show the About section */}
      {/* <About /> */}
      {/* Uncomment this if you want to show the Contact section */}
      {/* <Contact /> */}
      <Subscription />
      <Footer />
    </>
  );
};

export default App;
