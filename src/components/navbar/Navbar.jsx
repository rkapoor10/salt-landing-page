import {useState} from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { HamburgerMenu } from "../../utilities/Components/Hamburger/Hamburger";

export const Navbar = () => {
  const [hamToggle, setHamToggle] = useState(false)
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
        <GiHamburgerMenu className="hamburger-icon" onClick={()=>setHamToggle((hamToggle) => !hamToggle)} />
      </nav>
      <div>
        <HamburgerMenu hamToggle={hamToggle}/>
      </div>
      {hamToggle && <div className="carpet-bg" onClick={()=>setHamToggle(false)}></div>}
      
    </header>
  );
};
