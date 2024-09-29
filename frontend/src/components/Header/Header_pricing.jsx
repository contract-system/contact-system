import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

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
   <style>{`
  .navbar-collapse {
    display: none !important; /* إخفاء القائمة في الشاشات الصغيرة */
  }

  .navbar-collapse.show {
    display: block !important; /* إظهار القائمة عند الفتح */
  }

  /* جعل القائمة أفقية في الشاشات الكبيرة */
  @media (min-width: 992px) {
    .navbar-collapse {
      display: flex !important; /* تأكد من استخدام flexbox لعرض العناصر أفقياً */
      justify-content: space-between;
      align-items: center;
    }

    .main-menu {
      display: flex; /* تأكد من أن القائمة أفقية */
    }

    .main-menu .nav-link {
      padding: 0 15px;
      text-align: center;
    }
  }

  /* في الشاشات الصغيرة، تكون القائمة عمودية */
  @media (max-width: 991px) {
    .main-menu {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`}</style>


      <div className="header-tops-section fix">
        <div className="container-fluid">
          <div className="header-tops-wrapper">
            <ul className="contact-list">
              <li>
                <i className="far fa-envelope"></i>
                <a href="mailto:info@example.com" className="link">info@example.com</a>
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
          <Navbar collapseOnSelect expand="lg" className="mega-menu-wrapper">
            <Navbar.Brand as={Link} to="/" className="logo">
              <img src="assets/img/logo/logo.svg" alt="logo-img" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger-menu" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="main-menu" id="mobile-menu">
                <Nav.Link as={Link} to="/" className="has-dropdown">Home</Nav.Link>
                <Nav.Link as={Link} to="/contract" className="has-dropdown">Contract</Nav.Link>
                <Nav.Link href="news.html" className="has-dropdown">Services</Nav.Link>
                <Nav.Link href="news.html" className="has-dropdown">Pages</Nav.Link>
                <Nav.Link href="shop-details.html" className="has-dropdown">Shop</Nav.Link>
                <Nav.Link href="news.html" className="has-dropdown">Blog</Nav.Link>
                <Nav.Link href="contact.html">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="header-right-button d-none d-xl-block">
              <a href="contact.html" className="theme-btn theme-btn2">
                Get Started <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header_pricing;
