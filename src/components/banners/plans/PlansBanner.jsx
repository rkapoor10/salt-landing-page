import React from "react";
import { PlanCard } from "../../cards/planCard/PlanCard";
import "./PlansBanner.css";

export const PlansBanner = () => {
  const plans = ["Free", "$9/mo", "$12/mo"];
  return (
    <div className="plans-banner">
      <h1>Choose Your Plan</h1>
      <p>
        Let’s choose a package that is best for you and explore it happily and
        cheerfully
      </p>
      <ul className="flex flex-center">
        {plans.map((plan) => (
          <PlanCard key={plan} price={plan} />
        ))}
      </ul>
    </div>
  );
};
