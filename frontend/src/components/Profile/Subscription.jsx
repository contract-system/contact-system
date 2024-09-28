import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "../Header/Header";
import Header_pricing from "../Header/Header_pricing";

const Subscription = () => {
  const [contract, setContract] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContract = async () => {
      const userId = 1; // Replace with localStorage.getItem("userId");

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
          response.status === 200 &&
          response.data &&
          response.data.contracts
        ) {
          setContract(response.data.contracts); // Set the array of contracts
        } else {
          console.error("Fetched data is not valid:", response.data);
          setContract([]); // Set to an empty array if no contracts are found
        }
      } catch (error) {
        console.error("Error fetching contract:", error);
        setContract([]);
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
      <Header_pricing />
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
            {contract.length > 0 ? ( // Check if the contract array has items
              contract.map(
                (
                  item,
                  index // Map over the contract items
                ) => (
                  <div
                    key={index}
                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                  >
                    <div className="pricing-card-items">
                      <div className="pricing-header">
                        <h6>Subscription Details</h6>
                        <ul>
                          {item.contract_name &&
                            item.contract_name.includes("TV") && (
                              <li>
                                <i className="flaticon-smart-tv"></i>
                              </li>
                            )}
                        </ul>
                      </div>
                      <ul className="price-list">
                        <li>
                          <i className="far fa-check"></i>
                          Total Cost: ${item.total_cost}
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          Status: {item.status}
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          Subscription Status: {item.subscription_status}
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          Signing Date:{" "}
                          {new Date(item.signing_date).toLocaleDateString()}
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          Expiration Date:{" "}
                          {new Date(
                            item.contract_expiration_date
                          ).toLocaleDateString()}
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          Subscription Expiration:{" "}
                          {new Date(
                            item.subscription_expiration_date
                          ).toLocaleDateString()}
                        </li>
                      </ul>
                      <div className="price">
                        ${item.total_cost} <span> | month </span>
                      </div>
                      <a href="pricing.html" className="theme-btn">
                        <span>Get started</span>
                      </a>
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="container-fluid d-flex justify-content-center align-items-center full-screen">
                <div className="text-center">
                  <i className="fas fa-exclamation-circle fa-3x text-danger mb-3"></i>
                  <h3 className="text-danger fw-bold">
                    No contract available.
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
