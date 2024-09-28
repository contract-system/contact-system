import React, { useState } from "react";
import Swal from "sweetalert2";

const PopupCompany = ({ isOpen, onClose, selectedSub }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Subscription Information</h2>
        <div className="form-container">
          <form>
            {/* Subscription Name */}
            <div>
              <label>Subscription Name</label>
              <p>{selectedSub.name}</p>
            </div>

            {/* Speed */}
            <div>
              <label>Speed</label>
              <p>{selectedSub.speed}</p>
            </div>

            {/* Subscription Price */}
            <div>
              <label>Subscription Price</label>
              <p>{selectedSub.price} JOD</p>
            </div>

            {/* Action Buttons */}
            <div className="popup-buttons">
              <button
                type="button"
                className="theme-btn close-btn"
                onClick={onClose}
              >
                <span>{"Close"}</span>
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
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-in-out;
        }
        .popup-content {
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          width: 500px;
          max-width: 90%;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
          animation: scaleIn 0.3s ease-in-out;
        }
        h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: #333;
          text-align: center;
        }
        .form-container {
          max-height: 400px;
          overflow-y: auto;
        }
        form div {
          margin-bottom: 20px;
        }
        form label {
          font-weight: 600;
          margin-bottom: 8px;
          display: block;
          font-size: 1rem;
          color: #555;
        }
        form p {
          font-size: 1rem;
          padding: 10px;
          background-color: #f9f9f9;
          border-radius: 5px;
          border: 1px solid #e3e3e3;
          color: #333;
        }
        .popup-buttons {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }
        .theme-btn {
          background-color: #d10024;
          color: #fff;
          padding: 12px 30px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }
        .theme-btn:hover {
          background-color: #b3001f;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          0% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default PopupCompany;
