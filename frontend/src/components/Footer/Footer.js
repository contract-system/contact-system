// src/components/Footer/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// إزالة السطر التالي
// import footerLogo from '/assets/img/logo/footer-logo-2.svg';

const Footer = () => {
  return (
    <footer className="footer-section section-bg-3">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <a href="index.html">
              <img src="assets/img/logo/footer-logo-2.svg" alt="logo" />
            </a>
          </div>
          <ul>
            <li><i className="fab fa-facebook-f"></i><a href="#">Facebook</a></li>
            <li><i className="fab fa-twitter"></i><a href="#">Twitter</a></li>
            <li><i className="fab fa-linkedin-in"></i><a href="#">LinkedIn</a></li>
            <li><i className="fab fa-instagram"></i><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div className="col-xl-6 col-sm-12 col-md-8 col-lg-6">
              <div className="single-footer-widget me-4">
                <div className="widget-head">
                  <h3>Subscribe Newsletter</h3>
                </div>
                <div className="footer-content">
                  <p>
                    We understand that every challenge is an opportunity we are here seize 
                    a team of dedicated professionals and a culture
                  </p>
                  <div className="newsletter-items">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="email"
                        id="email2"
                        placeholder="Email Address"
                      />
                    </div>
                    <button className="theme-btn hover-white" type="submit">
                      <span>Sign Up <i className="fas fa-chevron-right"></i></span>
                    </button>
                  </div>
                  <h6 className="label-text">
                    By subscribing, you’re accept <a href="#">Privacy Policy</a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-3">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Services</h5>
                </div>
                <ul className="list-items">
                  <li><a href="service-details.html"> Web (UX/UI) Design </a></li>
                  <li><a href="service-details.html"> Machine Learning & AI </a></li>
                  <li><a href="service-details.html"> Web Development </a></li>
                  <li><a href="service-details.html"> IT Cyber Security </a></li>
                  <li><a href="service-details.html"> Cloud Computing </a></li>
                  <li><a href="service-details.html"> Analytic & Engineering </a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-3">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Locations:</h5>
                </div>
                <div className="footer-address-text">
                  <p>55 Main Street, 2nd block Malborne, Australia</p>
                  <h5>Contact</h5>
                  <a href="mailto:info@example.com" className="link-mail">info@example.com</a>
                  <h5 className="pt-3">
                    <a href="tel:+88012345688">+880 (123) 456 88</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="color-2">
              Copyright © 2024 <a href="index.html">Modinatheme</a>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
