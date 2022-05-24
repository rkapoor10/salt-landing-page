import "./Hamburger.css";
import "../../../components/navbar/Navbar.css";

export const HamburgerMenu = ({ hamToggle }) => {
  const menuOptions = ["About", "Features", "Pricing", "Testimonials", "Help"];
  return (
    <div
      className={`hamburger-menu-container ${hamToggle ? "drawer-open" : ""}`}
    >
      <ul className="menu-options-ham">
        {menuOptions.map((option) => (
          <li key={option}>{option}</li>
        ))}
        <button className="ham-btn-login">Login</button>
        <button className="ham-btn-primary">Get Started</button>
      </ul>
    </div>
  );
};
