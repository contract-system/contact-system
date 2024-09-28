import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import HeaderPricing from "../Header/Header_pricing";
import "./Subscription.css";
import Footer from "../Footer/Footer";
import Subscription from "./Subscription";
import Pricing from "../contract/priceing";

const ProfileLayout = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleEditProfile = () => {
    // Logic for editing profile
  };

  const handleViewSubscription = () => {
    // Logic for viewing subscription
  };

  const getCardClass = (contract) => {
    const today = new Date();
    // console.log(today);
    const expirationDate = new Date(contract.contract_expiration_date);
    // console.log(expirationDate);
    const timeDiff = expirationDate - today;
    // console.log(timeDiff);
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    // console.log(daysLeft);

    if (daysLeft <= 3) {
      return "card red";
    } else if (daysLeft <= 10) {
      return "card yellow";
    }
    return "card";
  };

  return (
    <>
      <HeaderPricing />

      <Sidebar
        onEditProfile={handleEditProfile}
        onViewSubscription={handleViewSubscription}
      />
      {/* <Pricing /> */}

      <Subscription />
      <Footer />
    </>
  );
};

export default ProfileLayout;
