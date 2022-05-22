import React from "react";
import "./IntroBanner.css";

export const IntroBanner = () => {
  return (
    <div className="intro-banner">
      <div className="intro-content">
        <h1>Not your average banking experience.</h1>
        <div>
          <p>Banking, but seasoned with SALT.</p>
          <p>
            We deal with all things related to global business banking so that
            you don't have to.
          </p>
        </div>
        <button>Get Started</button>
      </div>
      <div className="intro-hero">
        <img src="./assets/hero.svg" alt="introhero" />
      </div>
    </div>
  );
};
