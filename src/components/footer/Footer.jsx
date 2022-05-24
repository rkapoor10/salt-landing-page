import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { SubscriptionCard } from "../cards/subscriptionCard/SubscriptionCard";

export const Footer = () => {
  const socials = [
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaTwitter />, name: "Twitter" },
    { icon: <FaLinkedinIn />, name: "LinkedIn" },
    { icon: <FaInstagram />, name: "Instagram" },
  ];
  return (
    <footer>
      <SubscriptionCard />
      <div className="flex footer-container">
        <div className="flex-col footer">
          <img src="./assets/salt.svg" alt="logo" className="logo" />
          <h3>Salt provides borderless banking and compliance solutions.</h3>
          <p>
            Copyright @ Poziom Ventures Pvt. Ltd Disclaimer | Privacy Policy |
            Terms of Service
          </p>
        </div>
        <div className="flex-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>contact@salt.pe</li>
          </ul>
        </div>
        <div className="flex-col">
          <h3>Add us to your life!</h3>
          <ul>
            {socials.map(({ icon, name }) => (
              <li key={name} className="flex flex-gap-1rem align-items-center">
                {icon} {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
