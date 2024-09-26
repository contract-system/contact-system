// src/components/Header/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header_pricing = () => {
  return (
    <header>
      <div className="header-tops-section fix">
        <div className="container-fluid">
          <div className="header-tops-wrapper">
            <ul className="contact-list">
              <li>
                <i className="far fa-envelope"></i>
                <a href="mailto:info@example.com" className="link">
                  info@example.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:2086660112">+208-666-0112</a>
              </li>
            </ul>
            <div className="top-right">
              <div className="social-icon d-flex align-items-center">
                <span>Follow Us:</span>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="header-sticky" className="header-2">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main style-2">
              <div className="header-left">
                <div className="logo">
                  <a href="index.html" className="header-logo">
                    <img src="assets/img/logo/logo.svg" alt="logo-img" />
                  </a>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <a href="index.html">
                            Home
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu has-homemenu">
                            <li className="border-none">
                              <div className="row g-4">
                                <div className="col-lg-3 homemenu">
                                  <div className="homemenu-thumb">
                                    <img
                                      src="assets/img/header/home-1.jpg"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a href="index.html" className="theme-btn">
                                        <span>Multi Page</span>
                                      </a>
                                      <a
                                        href="index-one-page.html"
                                        className="theme-btn"
                                      >
                                        <span>One Page</span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Home 01</h4>
                                  </div>
                                </div>
                                <div className="col-lg-3 homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img
                                      src="assets/img/header/home-2.jpg"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a href="index-2.html" className="theme-btn">
                                        <span>Multi Page</span>
                                      </a>
                                      <a
                                        href="index-two-page.html"
                                        className="theme-btn"
                                      >
                                        <span>One Page</span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Home 02</h4>
                                  </div>
                                </div>
                                <div className="col-lg-3 homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img
                                      src="assets/img/header/home-3.jpg"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a href="index-3.html" className="theme-btn">
                                        <span>Multi Page</span>
                                      </a>
                                      <a
                                        href="index-three-page.html"
                                        className="theme-btn"
                                      >
                                        <span>One Page</span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Home 03</h4>
                                  </div>
                                </div>
                                <div className="col-lg-3 homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img
                                      src="assets/img/header/home-4.jpg"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a href="index-4.html" className="theme-btn">
                                        <span>Multi Page</span>
                                      </a>
                                      <a
                                        href="index-four-page.html"
                                        className="theme-btn"
                                      >
                                        <span>One Page</span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Home 04</h4>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown active d-xl-none">
                          <a href="team.html" className="border-none">
                            Home
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><a href="index.html">Home 01</a></li>
                            <li><a href="index-2.html">Home 02</a></li>
                            <li><a href="index-3.html">Home 03</a></li>
                            <li><a href="index-4.html">Home 04</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="news.html">
                            Services
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><a href="service.html">Services</a></li>
                            <li>
                              <a href="service-details.html">Service Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="news.html">
                            Pages
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li className="has-dropdown">
                              <a href="shows-details.html">
                                Shows
                                <i className="fas fa-angle-down"></i>
                              </a>
                              <ul className="submenu">
                                <li><a href="shows.html">Shows</a></li>
                                <li>
                                  <a href="shows-details.html">Shows Details</a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <a href="team.html">
                                Team
                                <i className="fas fa-angle-down"></i>
                              </a>
                              <ul className="submenu">
                                <li><a href="team.html">Team</a></li>
                                <li>
                                  <a href="team-details.html">Team Details</a>
                                </li>
                              </ul>
                            </li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="faq.html">Faq's</a></li>
                            <li><a href="404.html">404 Page</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-details.html">
                            Shop
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><a href="shop.html">Shop Page</a></li>
                            <li><a href="shop-cart.html">Shop Cart</a></li>
                            <li>
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                            <li><a href="checkout.html">Checkout</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="news.html">
                            Blog
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><a href="news.html">Blog</a></li>
                            <li>
                              <a href="news-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="mobile-menu"></div>
                </div>
                <div className="header-right-button d-none d-xl-block">
                  <a href="contact.html" className="theme-btn theme-btn2">
                    Get Started <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
                <div className="hamburger-menu d-xl-none">
                  <a href="javascript:void(0);" className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header_pricing;