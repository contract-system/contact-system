import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import Swal from "sweetalert2";

const Sidebar = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  // Handle logout click
  const handleLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Logged out!",
          "You have successfully logged out.",
          "success"
        );
        // Clear tokens or perform other logout actions
        // navigate('/login'); // Uncomment to redirect to login
      }
    });
  };

  // Navigate to profile
  const onEditProfile = () => {
    navigate("/profile");
  };

  // Navigate to subscription
  const onViewSubscription = () => {
    navigate("/subscription");
  };

  return (
    <>
      <div className="sidebar">
        <a className="active" onClick={onEditProfile}>
          Edit Profile
        </a>
        <a onClick={onViewSubscription}>View Subscription</a>
        <a className="logout" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </>
  );
};

export default Sidebar;
