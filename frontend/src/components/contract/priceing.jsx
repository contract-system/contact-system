// src/components/About/About.js
import axios from "axios";
import React, { useEffect, useState } from "react";

const Pricing = () => {
  const [subs, setSubs] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getAllSubs")
      .then((response) => setSubs(response.data));
  }, []);
  return (
    <>
      <section class="pricing-section fix section-padding">
        <div class="container custom-container-2">
          <div class="section-title text-center">
            <span class="wow fadeInUp">Tariffs</span>
            <h2 class="text-white wow fadeInUp" data-wow-delay=".3s">
              Choose your plan
            </h2>
          </div>
          <div class="row">
            {subs.map((sub) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp"
                data-wow-delay=".8s"
                key={sub.id}
              >
                <div class="pricing-card-items">
                  <div class="pricing-header">
                    <h6>
                      {sub.internet ? <span>internet</span> : ""}
                      {sub.TV ? <span> + TV</span> : ""}
                      {sub.phone ? <span> + Phone</span> : ""}
                    </h6>
                    <h3>Premium Plan</h3>
                  </div>
                  <ul class="icon-items p-0">
                    {sub.internet ? (
                      <li>
                        <i class="flaticon-connection"></i>
                      </li>
                    ) : (
                      ""
                    )}
                    {sub.TV ? (
                      <li>
                        <i class="flaticon-smart-tv"></i>
                      </li>
                    ) : (
                      ""
                    )}
                    {sub.phone ? (
                      <li>
                        <i class="flaticon-smart-tv-3"></i>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                  <ul class="price-list">
                    {sub.features_count > 0 ? (
                      sub.features.map((feature) => (
                        <li key={feature.id}>
                          <i className="far fa-check-circle"></i>
                          {feature.feature_name}
                        </li>
                      ))
                    ) : (
                      <li>
                        <i className="far fa-times-circle"></i>
                        No features available.
                      </li>
                    )}
                  </ul>
                  <div class="price">
                    {sub.price} JOD<span> | month </span>
                  </div>
                  <a href="pricing.html" class="theme-btn">
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
