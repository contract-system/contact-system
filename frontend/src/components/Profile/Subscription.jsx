import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import HeaderPricing from "../Header/Header_pricing"; // Renamed for consistency
import "./Subscription.css"; // Import the external CSS file
import { color } from "framer-motion";

const Subscription = () => {
  const [contracts, setContracts] = useState([]); // State to hold contracts
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    const userId = 1; // localStorage.getItem("userId"); // Retrieve the user ID from local storage

    if (!userId) {
      console.error("User ID not found");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/getUserContract/${userId}`
      );

      // Check for the contracts array and set it to state
      if (
        response.data &&
        response.data.contracts &&
        response.data.contracts.length > 0
      ) {
        setContracts(response.data.contracts); // Set all contracts
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

  return (
    <>
      <HeaderPricing />
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
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : contracts.length > 0 ? (
              contracts.map((contract) => (
                <div
                  key={contract.id}
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                >
                  <div className="card">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Total Cost: ${contract.total_cost}</span>
                      </li>
                      <li className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Status: {contract.status}</span>
                      </li>
                      <li className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Subscription Status: {contract.subscription_status}
                        </span>
                      </li>
                      <li className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Signing Date:{" "}
                          {new Date(contract.signing_date).toLocaleDateString()}
                        </span>
                      </li>
                      <li className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Expiration Date:{" "}
                          {new Date(
                            contract.contract_expiration_date
                          ).toLocaleDateString()}
                        </span>
                      </li>
                      <li className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
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
                    <button type="" className="action">
                      View
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="container-fluid d-flex justify-content-center align-items-center full-screen">
                <div className="text-center">
                  <i className="fas fa-exclamation-circle fa-3x text-danger mb-3"></i>
                  <h3 className="text-danger fw-bold">
                    No contracts available.
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
