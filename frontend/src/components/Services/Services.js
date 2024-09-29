// src/components/About/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <>
      {/* Service Section Start */}
      <section className="service-section section-bg-4 fix section-padding">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title style-2">
              <span className="wow fadeInUp">Our Services Area</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Best Digital Broadband <br />
                Service For People
              </h2>
            </div>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Transmds is the world’s driving worldwide coordinations supplier
              <br />
              uphold industry and exchange the worldwide trade of merchandi <br />
              do eiusmod tempor incididunt ut labore et simply free text dolore
            </p>
          </div>
          <div className="service-wrapper-3">
            {[
              { icon: 'flaticon-wifi-router-2', title: 'Fiber Line & Broadband Line', delay: '.3s' },
              { icon: 'flaticon-connection', title: 'Family Internet Phone pack', delay: '.5s', active: true },
              { icon: 'flaticon-smart-tv-1', title: 'Business Smart Television', delay: '.7s' },
              { icon: 'flaticon-server', title: 'Internet & Cyber Security', delay: '.8s' },
              { icon: 'flaticon-computer-networks', title: 'Best Smart Broadband & Network', delay: '.9s' },
            ].map((service, index) => (
              <div
                key={index}
                className={`service-box-items style-2 ${service.active ? 'active' : ''} wow fadeInUp`}
                data-wow-delay={service.delay}
              >
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <div className="content">
                  <h6>
                    <a href="service-details.html">{service.title}</a>
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <div className="service-text-area text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
            <h5>
              Bring them together and you overcome the ordinary.
              <a href="service.html" className="link-btn link-btn-2">
                <span>View More Service</span>
                <i className="fal fa-plus"></i>
              </a>
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
