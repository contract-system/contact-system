import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Popup = ({ isOpen, onClose, selectedSub }) => {
  const today = new Date().toISOString().split("T")[0];

  const [contractName, setContractName] = useState("");
  const [signingDate, setSigningDate] = useState("");
  const [contractExpirationDate, setContractExpirationDate] = useState("");
  const [months, setMonths] = useState(1); // عدد الأشهر
  const [price, setPrice] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [userId, setUserId] = useState(
    JSON.parse(sessionStorage.getItem("user")).id
  );
  const [subscriptionsId, setSubscriptionsId] = useState(selectedSub?.id || 1);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = window.sessionStorage.getItem("user");

    if (storedUserData) {
      // Parse the stored data as JSON
      setUserData(JSON.parse(storedUserData));
    } else {
      setErrors("No user data found in session storage");
    }

    setIsLoading(false);
    if (selectedSub) {
      setSubscriptionsId(selectedSub.id);
      setPrice(selectedSub.price); // استخدم السعر من selectedSub
    }
    const currentDate = new Date();

    // Format the date as a string (e.g., "YYYY-MM-DD")
    const formattedDate = currentDate.toISOString().split("T")[0];

    // Set the formatted date in state
    setSigningDate(formattedDate);
  }, [selectedSub]);

  const calculateTotalCost = () => {
    if (signingDate && contractExpirationDate && price) {
      const startDate = new Date(signingDate);
      const endDate = new Date(contractExpirationDate);
      const cost = months * price; // حساب التكلفة الإجمالية
      setTotalCost(cost);
    }
  };

  useEffect(() => {
    calculateTotalCost();
  }, [signingDate, contractExpirationDate, months, price]);

  const handleSigningDateChange = (date) => {
    setSigningDate(date);
    if (date) {
      const signingDateObj = new Date(date);
      const expirationDateObj = new Date(
        signingDateObj.getFullYear(),
        signingDateObj.getMonth() + months,
        signingDateObj.getDate()
      );
      setContractExpirationDate(expirationDateObj.toISOString().split("T")[0]);
    } else {
      setContractExpirationDate("");
    }
  };

  const handleMonthsChange = (e) => {
    const newMonths = parseInt(e.target.value);
    setMonths(newMonths);
    if (signingDate) {
      const signingDateObj = new Date(signingDate);
      const expirationDateObj = new Date(
        signingDateObj.getFullYear(),
        signingDateObj.getMonth() + newMonths,
        signingDateObj.getDate()
      );
      setContractExpirationDate(expirationDateObj.toISOString().split("T")[0]);
    }
  };

  const validateForm = () => {
    let formErrors = {};
    // if (!contractName) formErrors.contractName = "Contract name is required";
    if (!signingDate) formErrors.signingDate = "Signing date is required";
    if (!contractExpirationDate)
      formErrors.contractExpirationDate =
        "Contract expiration date is required";
    if (!userId) formErrors.userId = "User ID is required";
    if (!subscriptionsId)
      formErrors.subscriptionsId = "Subscriptions ID is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const contractData = {
      contract_name: selectedSub.name,
      signing_date: signingDate,
      expiration_date: contractExpirationDate,
      // price: price,
      total_cost: totalCost,
      user_id: userId,
      subscriptions_id: subscriptionsId,
    };
    console.log(contractData);
    try {
      await axios.post("http://127.0.0.1:8000/api/storeContract", contractData);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "The contract has been submitted successfully!",
        confirmButtonText: "OK",
      });

      onClose();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error,
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Contract Information for {selectedSub?.name}</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {/* Contract Name */}
            <div>
              <label>Contract Name</label>
              <input
                type="text"
                placeholder="Enter contract name"
                disabled
                value={selectedSub.name}
                style={{ color: "black" }}
              />
              {errors.contractName && (
                <p className="error">{errors.contractName}</p>
              )}
            </div>

            {/* Signing Date */}
            <div>
              <input
                type="date"
                required
                min={today}
                value={signingDate}
                onChange={(e) => handleSigningDateChange(e.target.value)}
                style={{ color: "black", display: "hidden" }}
              />

              {errors.signingDate && (
                <p className="error">{errors.signingDate}</p>
              )}
            </div>

            {/* Number of Months */}
            <div>
              <label>Number of Months</label>
              <input
                type="number"
                value={months}
                min="1"
                onChange={handleMonthsChange}
                style={{ color: "black" }}
              />
            </div>

            {/* Contract Expiration Date */}
            <div>
              <label>Contract Expiration Date</label>
              <input
                type="date"
                required
                value={contractExpirationDate}
                readOnly
                style={{ color: "black" }}
              />
              {errors.contractExpirationDate && (
                <p className="error">{errors.contractExpirationDate}</p>
              )}
            </div>

            {/* Subscription Price */}
            <div>
              <label>Subscription Price</label>
              <input
                type="number"
                value={price}
                readOnly
                style={{ color: "black" }}
              />
            </div>

            {/* Total Cost */}
            <div>
              <label>Total Cost</label>
              <input
                type="number"
                value={totalCost}
                readOnly
                style={{ color: "black" }}
              />
            </div>

            {/* User ID */}
            <div>
              {/* <label>User ID</label> */}
              <input
                type="hidden"
                placeholder="Enter user ID"
                required
                value={userData.id}
                onChange={(e) => setUserId(e.target.value)}
                style={{ color: "black" }}
              />
              {errors.userId && <p className="error">{errors.userId}</p>}
            </div>

            {/* Action Buttons */}
            <div className="popup-buttons">
              <button type="submit" className="theme-btn" disabled={isLoading}>
                <span>{isLoading ? "Loading..." : "Submit"}</span>
              </button>
              <button
                type="button"
                className="theme-btn bg-white"
                onClick={onClose}
              >
                <span>Close</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CSS for Popup */}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          width: 700px;
          max-width: 100%;
          z-index: 1001;
        }
        .form-container {
          max-height: 500px;
          overflow-y: auto;
          padding-right: 10px;
        }
        .popup-content form div {
          margin-bottom: 15px;
        }
        .popup-content form label {
          display: block;
          margin-bottom: 5px;
        }
        .popup-content form input {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
        }
        .popup-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .theme-btn {
          background-color: var(--theme);
          font-weight: 700;
          color: var(--white);
          transition: all 0.4s ease-in-out;
          text-transform: capitalize;
          position: relative;
          overflow: hidden;
          font-size: 16px;
          padding: 21px 42px;
          border-radius: 7px;
          z-index: 9;
          display: inline-block;
          line-height: 1;
          border:2px solid var(--theme)
        }
        .theme-btn:hover {
          color: var(--white);
        }
        .theme-btn.bg-white {
          background-color: #fff;
          color: var(--header);
        }
        .theme-btn.bg-white:hover {
          color: var(--white);
        }
        .theme-btn span {
          position: relative;
          z-index: 2;
        }
        .error {
          color: red;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default Popup;
