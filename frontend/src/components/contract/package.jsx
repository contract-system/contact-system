import { useEffect, useState } from "react";
import axios from "axios";

const Packages = () => {
  const [packages, setpackages] = useState([]);

  useEffect(() => {
    // get all packages
    axios.get("http://127.0.0.1:8000/api/getAllPackages").then((response) => {
      setpackages(response.data);
      const features = response.data.features; // Make sure this line is executed after the data is retrieved
      console.log(features);
    });
  }, []);
  return (
    <>
      <section class="pricing-section-2 fix section-padding">
        <div class="container">
          <div class="section-title text-center mb-0">
            <span>OUR PACKAGES PLAN</span>
            <h2>Our Packages Plan</h2>
          </div>
          <div class="row pt-5">
            {/* active to make it red */}
            {packages.map((subPackage) => (
              <div class="pricing-wrapper " key={subPackage.id}>
                <div class="row justify-content-between align-items-center">
                  <div class="col-xxl-6 col-xl-6 col-lg-12">
                    <div class="pricing-content-box d-flex align-items-center justify-content-between">
                      <div class="price-content">
                        <p>Installation Charge: 1,500 Tk</p>
                        <h3>{subPackage.name}</h3>
                        <span>
                          <em>5%</em> VAT Included
                        </span>
                      </div>
                      <div class="price-icon">
                        <div class="icon">
                          <i class="flaticon-satellite-tv"></i>
                        </div>
                        <div class="icon">
                          <i class="flaticon-satellite-tv"></i>
                        </div>
                        <div class="icon">
                          <i class="flaticon-smartphone"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-5 col-xl-6 col-lg-12">
                    <div class="pricing-list-items d-flex align-items-center">
                      <ul
                        class="price-list"
                        style={{
                          width: "250px",
                          listStyleType: "none",
                          padding: 0,
                        }}
                      >
                        {subPackage.features_count > 0 ? (
                          subPackage.features.map((feature) => (
                            <li key={feature.id}>
                              <i className="far fa-check-circle"></i>
                              {feature.feature_name}
                            </li>
                          ))
                        ) : (
                          <li>
                            <i className="far fa-times-circle"></i>{" "}
                            {/* Use a different icon for no features */}
                            No features available.
                          </li>
                        )}
                      </ul>
                      <div class="price-button">
                        <h3>
                          {parseInt(subPackage.price, 10)} <i>JOD</i>
                          <span>/mo</span>
                        </h3>
                        <a href="contact.html" class="theme-btn">
                          <span>Get Started</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Packages;
