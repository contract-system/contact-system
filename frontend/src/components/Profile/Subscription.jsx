import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "../Header/Header";
import Header_pricing from "../Header/Header_pricing";

const Subscription = () => {
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContract = async () => {
      const userId = 1; //localStorage.getItem("userId"); // Retrieve the user ID from local storage

      if (!userId) {
        console.error("User ID not found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getOneContracts/${userId}`
        );

        if (response.data && response.data.contract) {
          setContract(response.data.contract);
        } else {
          console.error("Fetched data is not a valid contract:", response.data);
          setContract(null);
        }
      } catch (error) {
        console.error("Error fetching contract:", error);
        setContract(null);
      } finally {
        setLoading(false);
      }
    };

    fetchContract();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEditProfile = () => {
    console.log("Edit Profile clicked");
  };

  const handleViewSubscription = () => {
    console.log("View Subscription clicked");
  };

  return (
    <>
      {/* <Header_pricing /> */}
      <div className="subscription-container">
        <Sidebar
          onEditProfile={handleEditProfile}
          onViewSubscription={handleViewSubscription}
        />

        <div
          style={{
            position: "relative",
            marginLeft: "18%",
          }}
          className="container custom-container-2"
        >
          <div className="row">
            {contract ? (
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                <div className="pricing-card-items">
                  <div className="pricing-header">
                    {/* If the h6 is not needed, you can remove it, or add content */}
                    <h6>Subscription Details</h6>
                    <ul>
                      {contract.contract_name &&
                        contract.contract_name.includes("TV") && (
                          <li>
                            <i className="flaticon-smart-tv"></i>
                          </li>
                        )}
                    </ul>
                  </div>
                  <ul className="price-list">
                    <li>
                      <i className="far fa-check"></i>
                      Total Cost: ${contract.total_cost}
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      Status: {contract.status}
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      Subscription Status: {contract.subscription_status}
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      Signing Date:{" "}
                      {new Date(contract.signing_date).toLocaleDateString()}
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      Expiration Date:{" "}
                      {new Date(
                        contract.contract_expiration_date
                      ).toLocaleDateString()}
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      Subscription Expiration:{" "}
                      {new Date(
                        contract.subscription_expiration_date
                      ).toLocaleDateString()}
                    </li>
                  </ul>
                  <div className="price">
                    ${contract.total_cost} <span> | month </span>
                  </div>
                  <a href="pricing.html" className="theme-btn">
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>No contract available.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
