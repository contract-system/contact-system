import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup"; // تأكد من تحديث المسار وفقًا لمكان حفظ الملف

const Pricing = () => {
  const [subs, setSubs] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getAllSubs")
      .then((response) => setSubs(response.data));
  }, []);
  
  // Function to open the popup
  const openPopup = (sub) => {
    setSelectedSub(sub);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedSub(null);
  };

  return (
    <>
      <section className="pricing-section fix section-padding">
        <div className="container custom-container-2">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Tariffs</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Choose your plan
            </h2>
          </div>
          <div className="row">
            {subs.map((sub) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp"
                data-wow-delay=".8s"
                key={sub.id}
              >
                <div className="pricing-card-items">
                  <div className="pricing-header">
                    <h6>
                      {sub.internet ? <span>Internet</span> : ""}
                      {sub.TV ? <span> + TV</span> : ""}
                      {sub.phone ? <span> + Phone</span> : ""}
                    </h6>
                    <h3>Premium Plan</h3>
                  </div>
                  <ul className="icon-items p-0">
                    {sub.internet && (
                      <li>
                        <i className="flaticon-connection"></i>
                      </li>
                    )}
                    {sub.TV && (
                      <li>
                        <i className="flaticon-smart-tv"></i>
                      </li>
                    )}
                    {sub.phone && (
                      <li>
                        <i className="flaticon-smart-tv-3"></i>
                      </li>
                    )}
                  </ul>
                  <ul className="price-list">
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
                  <div className="price">
                    {sub.price} JOD<span> | month </span>
                  </div>
                  <button
                    className="theme-btn"
                    onClick={() => openPopup(sub)}
                  >
                    <span>Get started</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* استخدام مكون Popup */}
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        selectedSub={selectedSub}
      />
    </>
  );
};

export default Pricing;
