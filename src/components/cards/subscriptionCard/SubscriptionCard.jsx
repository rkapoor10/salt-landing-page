import React from "react";
import "./SubscriptionCard.css";

export const SubscriptionCard = () => {
  return (
    <div className="flex flex-center subscription-card ">
      <div className="flex-col">
        <h1>Subscribe Now for Get Special Features!</h1>
        <p>Banking, but seasoned with SALT.</p>
      </div>
      <button className="flex flex-center">Subscribe Now!</button>
    </div>
  );
};
