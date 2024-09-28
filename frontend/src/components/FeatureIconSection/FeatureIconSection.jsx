// src/components/FeatureIconSection.js
import React from 'react';

const FeatureIconSection = () => {
  const features = [
    { icon: 'flaticon-speedometer', title: 'Ultra-speed Connection', delay: '0.2s' },
    { icon: 'flaticon-television', title: '250+ World Channels', delay: '0.4s' },
    { icon: 'flaticon-wifi-router-1', title: 'Free Installation', delay: '0.6s' },
    { icon: 'flaticon-smart-tv-4', title: '4K UHD Quality', delay: '0.7s' },
    { icon: 'flaticon-money-banking', title: 'Flexible Tariff Plans', delay: '0.8s' },
    { icon: 'flaticon-customer-support', title: 'Fast Support 24/7', delay: '0.9s' },
  ];

  return (
    <section className="feature-icon-area section-padding pt-0">
      <div className="container custom-container-2">
        <div className="feature-icon-wrapper">
          {features.map((feature, index) => (
            <div className={`icon-items wow fadeInUp`} data-wow-delay={feature.delay} key={index}>
              <div className="icon">
                <i className={feature.icon}></i>
              </div>
              <h4>{feature.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureIconSection;
