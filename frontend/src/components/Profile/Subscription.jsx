import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import HeaderPricing from "../Header/Header_pricing"; // Renamed for consistency
import "./Subscription.css"; // Import the external CSS file
import { color } from "framer-motion";

const Subscription = () => {
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContract = async () => {
      const userId = 1; // Retrieve the user ID from local storage or hardcoded

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
      <HeaderPricing />
      <div className="subscription-container">
        <Sidebar
          onEditProfile={handleEditProfile}
          onViewSubscription={handleViewSubscription}
        />

        <div className="container custom-container">
          <div className="row" style={{ margin: "26px 34px 29px 175px" }}>
            {contract ? (
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
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
