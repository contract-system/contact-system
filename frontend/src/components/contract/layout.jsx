// src/components/contract/layout.js
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Header_pricing from "../Header/Header_pricing";
import Pricing from "./priceing";
import Packages from "./package";
import Feature from "./feature";
import Breadcrumb from "./breadcrumb";

const Layout = () => {
  return (
    <>
      {/* <Header_pricing /> */}
      <Breadcrumb />
      <Feature />
      <Pricing />
      <Packages />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
