import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import HeaderPricing from "../Header/Header_pricing";
import "./Subscription.css";
import PopupCompany from "./PopupCompany";
import PopupContract from "./PopupContract";

const Subscription = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPopupCompanyOpen, setIsPopupCompanyOpen] = useState(false);
  const [isPopupContractOpen, setIsPopupContractOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState(null);

  // Function to open the Company popup
  const openCompanyPopup = (sub) => {
    setSelectedSub(sub);
    setIsPopupCompanyOpen(true);
  };

  // Function to open the Contract popup
  const openContractPopup = (sub) => {
    setSelectedSub(sub);
    setIsPopupContractOpen(true);
  };

  // Function to close both popups
  const closePopups = () => {
    setIsPopupCompanyOpen(false);
    setIsPopupContractOpen(false);
    setSelectedSub(null);
  };

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

  const getCardClass = (contract) => {
    const today = new Date();
    const expirationDate = new Date(contract.contract_expiration_date);
    const timeDiff = expirationDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysLeft <= 3) {
      return "card red";
    } else if (daysLeft <= 10) {
      return "card yellow";
    }
    return "card";
  };

  return (
    <>
      <div className="subscription-container">
        <div
          style={{ position: "relative", marginLeft: "18%" }}
          className="container custom-container-2"
        >
          <div className="row mt-5 ml-5">
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
                   
                    <ul className="lists">
                      <li className="list">
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
                    <button
                      type="button"
                      onClick={() => openContractPopup(contract)}
                      className="action "
                    >
                      Contract Details
                    </button>
                    <br />
                    <button
                      type="button"
                      onClick={() => openCompanyPopup(contract.subscriptions)}
                      className="action"
                    >
                      View Company Info
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">No Contracts Found</div>
            )}
          </div>
        </div>

        {/* Popup for Contract Details */}
        <PopupContract
          isOpen={isPopupContractOpen}
          onClose={closePopups}
          selectedSub={selectedSub}
        />

        {/* Popup for Company Details */}
        <PopupCompany
          isOpen={isPopupCompanyOpen}
          onClose={closePopups}
          selectedSub={selectedSub}
        />
      </div>
    </>
  );
};

export default Subscription;
