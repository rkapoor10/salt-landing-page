import React from "react";
import {TiTick} from "react-icons/ti"
import "./PlanCard.css";

export const PlanCard = ({ price }) => {
  const planFeatures = [
    "Unlimited Free Transfers",
    "Encrypted Data",
    "24x7 Support",
    "Works on Akk Devices",
  ];
  return (
    <div className="plancard-container">
      <img src="./assets/planhero.svg" alt="planhero" />
      <h3>Free Plan</h3>
      <ul>
        {planFeatures.map((feature) => (
          <li> <TiTick className="green-tick"/> {feature}</li>
        ))}
      </ul>
      <h2>{price}</h2>
      <button>Sign Up</button>
    </div>
  );
};
