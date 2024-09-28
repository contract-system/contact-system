import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import HeaderPricing from "../Header/Header_pricing";
import "./Subscription.css";

const Subscription = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    const userId = 1; // Change as needed

    if (!userId) {
      console.error("User ID not found");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/getUserContract/${userId}`
      );

      if (
        response.data &&
        response.data.contracts &&
        response.data.contracts.length > 0
      ) {
        setContracts(response.data.contracts);
      } else {
        console.error("No contracts found:", response.data);
        setContracts([]);
      }
    } catch (error) {
      console.error("Error fetching contracts:", error);
      setContracts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProfile = () => {
    // Logic for editing profile
  };

  const handleViewSubscription = () => {
    // Logic for viewing subscription
  };

  const getCardClass = (contract) => {
    const today = new Date();
    // console.log(today);
    const expirationDate = new Date(contract.contract_expiration_date);
    // console.log(expirationDate);
    const timeDiff = expirationDate - today;
    // console.log(timeDiff);
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    // console.log(daysLeft);

    if (daysLeft <= 3) {
      return "card red";
    } else if (daysLeft <= 10) {
      return "card yellow";
    }
    return "card";
  };

  return (
    <>
      <HeaderPricing />
      <div className="subscription-container">
        <Sidebar
          onEditProfile={handleEditProfile}
          onViewSubscription={handleViewSubscription}
        />

        <div
          style={{ position: "relative", marginLeft: "18%" }}
          className="container custom-container-2"
        >
          <div className="row mt-5">
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : contracts.length > 0 ? (
              contracts.map((contract) => (
                <div
                  key={contract.id}
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                >
                  <div className={getCardClass(contract)}>
                    <div className="header">
                      <span style={{ color: "#000" }} className="title">
                        {contract.contract_name}
                      </span>
                      <span style={{ color: "#000" }} className="price">
                        ${contract.total_cost}
                      </span>
                    </div>
                    <p className="desc">
                      Etiam ac convallis enim, eget euismod dolor.
                    </p>
                    <ul className="lists">
                      <li className="list">
                        {/* SVG and content */}
                        <span>Total Cost: ${contract.total_cost}</span>
                      </li>
                      <li className="list">
                        <span>Status: {contract.status}</span>
                      </li>
                      <li className="list">
                        <span>
                          Subscription Status: {contract.subscription_status}
                        </span>
                      </li>
                      <li className="list">
                        <span>
                          Signing Date:{" "}
                          {new Date(contract.signing_date).toLocaleDateString()}
                        </span>
                      </li>
                      <li className="list">
                        <span>
                          Expiration Date:{" "}
                          {new Date(
                            contract.contract_expiration_date
                          ).toLocaleDateString()}
                        </span>
                      </li>
                      <li className="list">
                        <span style={{ color: "red" }}>
                          Subscription Expiration:{" "}
                          {new Date(
                            contract.subscription_expiration_date
                          ).toLocaleDateString()}
                        </span>
                      </li>
                    </ul>
                    <button type="button" className="action">
                      Get Started
                    </button>
                    <br />
                    <button type="button" className="action">
                      View
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">No Contracts Found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
