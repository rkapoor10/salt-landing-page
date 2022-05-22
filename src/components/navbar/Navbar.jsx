import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  const menuOptions = ["About", "Features", "Pricing", "Testimonials", "Help"];
  return (
    <header>
      <nav className="navbar">
        <div className="flex flex-center">
          <img className="logo" src="./assets/salt.svg" alt="logo" />
          <ul className="menu-options">
            {menuOptions.map((option) => (
              <li>{option}</li>
            ))}
          </ul>
        </div>
        <div className="menu-options">
          <button>Login</button>
          <button>Get Started</button>
        </div>
      </nav>
    </header>
  );
};
