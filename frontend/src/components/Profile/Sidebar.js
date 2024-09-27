import React from "react";
import "./Sidebar.css"; 
import Swal from "sweetalert2";

const Sidebar = ({ onEditProfile, onViewSubscription }) => {
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
      }
    });
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item" onClick={onEditProfile}>
          Edit Profile
        </li>
        <li className="sidebar-item" onClick={onViewSubscription}>
          View Subscription
        </li>
        <li className="sidebar-item logout" onClick={handleLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
