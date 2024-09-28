// src/components/ChoosePackageSection.js
import React from 'react';

const ChoosePackageSection = () => {
  const packages = [
    {
      id: 'tab-1',
      speed: '10 Mbps',
      monthlyPrice: 25,
      installationFee: 35,
      features: ['Preaching Worship An Online Family', 'Preaching Worship An Online Family'],
    },
    {
      id: 'tab-2',
      speed: '20 Mbps',
      monthlyPrice: 45,
      installationFee: 65,
      features: ['Preaching Worship An Online Family', 'Preaching Worship An Online Family'],
    },
    {
      id: 'tab-3',
      speed: '30 Mbps',
      monthlyPrice: 85,
      installationFee: 99,
      features: ['Preaching Worship An Online Family', 'Preaching Worship An Online Family'],
    },
  ];

  return (
    <section
      className="choose-package-section bg-cover section-padding"
      style={{ backgroundImage: "url('assets/img/choose-bg.jpg')" }}
    >
      <div className="container">
        <div className="choose-package-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="choose-package-content">
                <div className="section-title">
                  <span className="wow fadeInUp">CHOOSE PACKAGE</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Choose Ultra-Fast Internet Package For Usage
                  </h2>
                </div>
                <ul className="nav" role="tablist">
                  {packages.map((pkg, index) => (
                    <li className="nav-item wow fadeInUp" data-wow-delay={`${(index + 3) * 0.2}s`} role="presentation" key={pkg.id}>
                      <a
                        href={`#${pkg.id}`}
                        data-bs-toggle="tab"
                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                        aria-selected={index === 0}
                        role="tab"
                      >
                        {pkg.speed}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="tab-content">
                  {packages.map((pkg, index) => (
                    <div id={pkg.id} className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} role="tabpanel" key={pkg.id}>
                      <div className="choose-tab-price-items">
                        <div className="choose-tab-price-area">
                          <div className="price-monthly wow fadeInUp" data-wow-delay=".3s">
                            <h5><sub>$</sub>{pkg.monthlyPrice}<span>/ 1 month</span></h5>
                          </div>
                          <div className="price-installation wow fadeInUp" data-wow-delay=".5s">
                            <h5><sub>$</sub>{pkg.installationFee}<span>/ Installation Fee</span></h5>
                          </div>
                        </div>
                        <ul className="list wow fadeInUp" data-wow-delay=".7s">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx}>
                              <i className="far fa-check"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePackageSection;
