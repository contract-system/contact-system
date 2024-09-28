// src/components/About/About.js
import React from 'react';

const About = () => {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div
                  className="about-image-1 bg-cover wow fadeInLeft"
                  data-wow-delay=".3s"
                  style={{ backgroundImage: "url('assets/img/about/about-5.jpg')" }}
                >
                  <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                    <img src="assets/img/about/about-6.jpg" alt="about-img" />
                  </div>
                </div>
                <div className="circle-shape">
                  <img src="assets/img/about/circle-2.png" alt="img" className="text-circle" />
                  <div className="about-title">
                    <h2><span className="count">13</span></h2>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="about-content">
                <div className="section-title style-2">
                  <span className="wow fadeInUp">BEST IT SOLUTIONS</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Best Internet <span>Agency</span> For People
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Transmds is the world’s driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of merchandi.
                </p>
                <div className="single-tab-items">
                  <ul className="nav mb-4" role="tablist">
                    <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                      <a
                        href="#integrity"
                        data-bs-toggle="tab"
                        className="nav-link active"
                        aria-selected="true"
                        role="tab"
                      >
                        Integrity
                      </a>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                      <a
                        href="#objectives"
                        data-bs-toggle="tab"
                        className="nav-link"
                        aria-selected="false"
                        role="tab"
                        tabIndex="-1"
                      >
                        Objectives
                      </a>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".7s" role="presentation">
                      <a
                        href="#excellence"
                        data-bs-toggle="tab"
                        className="nav-link"
                        aria-selected="false"
                        role="tab"
                        tabIndex="-1"
                      >
                        Excellence
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div id="integrity" className="tab-pane fade show active" role="tabpanel">
                    <div className="about-tabs-area">
                      <div className="about-list-items">
                        <div className="video-image wow fadeInUp" data-wow-delay=".3s">
                          <img src="assets/img/about/video.jpg" alt="img" />
                          <div className="video-box">
                            <a
                              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                              className="video-btn ripple video-popup"
                            >
                              <i className="fas fa-play"></i>
                            </a>
                          </div>
                        </div>
                        <ul className="wow fadeInUp" data-wow-delay=".4s">
                          <li>
                            <i className="far fa-check"></i>
                            Technology Growth
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Dedicated Team Member
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                        </ul>
                      </div>
                      <div className="about-author">
                        <div className="author-image wow fadeInUp" data-wow-delay=".3s">
                          <img src="assets/img/about/client-2.png" alt="author-img" />
                          <div className="content">
                            <h6>5m+ Customers</h6>
                          </div>
                        </div>
                        <div className="author-contact wow fadeInUp" data-wow-delay=".5s">
                          <div className="icon">
                            <img src="assets/img/contact.png" alt="img" />
                          </div>
                          <div className="content">
                            <p>Phone:</p>
                            <h6>
                              <a href="tel:++23645689622">+236 (456) 896 22</a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="objectives" className="tab-pane fade" role="tabpanel">
                    <div className="about-tabs-area">
                      <div className="about-list-items">
                        <div className="video-image">
                          <img src="assets/img/about/video.jpg" alt="img" />
                          <div className="video-box">
                            <a
                              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                              className="video-btn ripple video-popup"
                            >
                              <i className="fas fa-play"></i>
                            </a>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <i className="far fa-check"></i>
                            Technology Growth
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Dedicated Team Member
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                        </ul>
                      </div>
                      <div className="about-author">
                        <div className="author-image">
                          <img src="assets/img/about/client-2.png" alt="author-img" />
                          <div className="content">
                            <h6>5m+ Customers</h6>
                          </div>
                        </div>
                        <div className="author-contact">
                          <div className="icon">
                            <img src="assets/img/contact.png" alt="img" />
                          </div>
                          <div className="content">
                            <p>Phone:</p>
                            <h6>
                              <a href="tel:++23645689622">+236 (456) 896 22</a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="excellence" className="tab-pane fade" role="tabpanel">
                    <div className="about-tabs-area">
                      <div className="about-list-items">
                        <div className="video-image">
                          <img src="assets/img/about/video.jpg" alt="img" />
                          <div className="video-box">
                            <a
                              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                              className="video-btn ripple video-popup"
                            >
                              <i className="fas fa-play"></i>
                            </a>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <i className="far fa-check"></i>
                            Technology Growth
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Dedicated Team Member
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                        </ul>
                      </div>
                      <div className="about-author">
                        <div className="author-image">
                          <img src="assets/img/about/client-2.png" alt="author-img" />
                          <div className="content">
                            <h6>5m+ Customers</h6>
                          </div>
                        </div>
                        <div className="author-contact">
                          <div className="icon">
                            <img src="assets/img/contact.png" alt="img" />
                          </div>
                          <div className="content">
                            <p>Phone:</p>
                            <h6>
                              <a href="tel:++23645689622">+236 (456) 896 22</a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
