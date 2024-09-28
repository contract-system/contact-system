import React, { useState } from "react";

const PopupCompany = ({ isOpen, onClose, selectedSub }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Contract Information</h2>
        <div className="form-container">
          <form>
            {/* Contract Name */}
            <div className="form-group">
              <label>Contract Name</label>
              <p>{selectedSub.contract_name}</p>
            </div>

            {/* Signing Date */}
            <div className="form-group">
              <label>Signing Date</label>
              <p>{selectedSub.signing_date}</p>
              {errors.signingDate && (
                <p className="error">{errors.signingDate}</p>
              )}
            </div>

            {/* Contract Expiration Date */}
            <div className="form-group">
              <label>Contract Expiration Date</label>
              <p>{selectedSub.contract_expiration_date}</p>
              {errors.contractExpirationDate && (
                <p className="error">{errors.contractExpirationDate}</p>
              )}
            </div>

            {/* Subscription Price */}
            <div className="form-group">
              <label>Subscription Price</label>
              <p>{selectedSub.total_cost}</p>
            </div>

            {/* Action Buttons */}
            <div className="popup-buttons">
              <button
                type="button"
                className="theme-btn close-btn"
                onClick={onClose}
                disabled={isLoading}
              >
                <span>{isLoading ? "Loading..." : "Close"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CSS for Popup */}
      <style jsx>{`
        /* Overlay */
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

        /* Popup Content */
        .popup-content {
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          width: 600px;
          max-width: 100%;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          z-index: 1001;
          text-align: left;
        }

        /* Form Container */
        .form-container {
          max-height: 500px;
          overflow-y: auto;
          padding-right: 10px;
        }

        /* Form Group */
        .form-group {
          margin-bottom: 20px;
        }

        /* Labels */
        label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
        }

        /* Data text */
        p {
          font-size: 16px;
          color: #555;
          background-color: #f8f8f8;
          padding: 10px;
          border-radius: 6px;
        }

        /* Action Buttons */
        .popup-buttons {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }

        /* Button Styling */
        .theme-btn {
          background-color: #d10024;
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          padding: 12px 24px;
          border-radius: 6px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }

        .theme-btn:hover {
          background-color: #b8001d;
        }

        .theme-btn:disabled {
          background-color: #888;
          cursor: not-allowed;
        }

        /* Error Styling */
        .error {
          color: red;
          font-size: 12px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .popup-content {
            width: 90%;
          }

          p {
            font-size: 14px;
          }

          .theme-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default PopupCompany;
