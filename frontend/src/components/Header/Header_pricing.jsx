import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header_pricing = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user")); // Assuming user details are stored in session storage

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/"); // Redirect to home after logout
  };

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
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
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
                  <Link to="/" className="header-logo">
                    <img src="assets/img/logo/logo.svg" alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/contract">Contract</Link>
                        </li>
                        {/* Profile link appears only if the user is logged in */}
                        {token && (
                          <li>
                            <Link to="/profile">Profile</Link>
                          </li>
                        )}
                        {/* Add other navigation items here */}
        
                      </ul>
                    </nav>
                  </div>
                  <div className="mobile-menu"></div>
                </div>
                <div className="header-right-button d-none d-xl-block">
                  {token ? (
                    <button onClick={handleLogout} className="theme-btn theme-btn2">
                      Logout <i className="fas fa-arrow-right"></i>
                    </button>
                  ) : (
                    <Link to="/login" className="theme-btn theme-btn2">
                      Login <i className="fas fa-arrow-right"></i>
                    </Link>
                  )}
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