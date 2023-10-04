import React from "react";
import { useNavigate } from "react-router-dom";

import "../../../style/techStack/backendAndDb/stripe.css";

function Stripe() {
  const GoToWebshop = () => {
    const navigate = useNavigate();

    const navigateToWebshop = () => {
      navigate("/webshop");
    };

    return (
      <button className="navigateToWebshop" onClick={navigateToWebshop}>
        webshop
      </button>
    );
  };
  return (
    <>
      <div>Stripe</div>
      <div>
        With Stripe.js accepting online payments became versatile and developer-friendly payment
        gateway. My <GoToWebshop /> is a personal project hat offers seamless and secure
        transactions.
      </div>
      <h3>Custom Payment Flows</h3>
      <h3>Secure Transactions:</h3>
      <h3>Subscription Management</h3>
      <h3>Real-time Reporting</h3>

    </>
  );
}

export default Stripe;
