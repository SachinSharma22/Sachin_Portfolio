import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar shadow-md ">
      <div className="navbar-container">
        <h1 className="logo">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-60}
            onClick={closeMenu}
          >
            <span className="text-teal-500 hover:text-purple-700">𝕾</span>𝖆𝖈𝖍𝖎𝖓{" "}
            <span className="text-teal-500 hover:text-purple-700">𝕾</span>𝖍𝖆𝖗𝖒𝖆
          </Link>
        </h1>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={handleToggle}>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
                activeClass="active-link"
                onClick={closeMenu}
                className="cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
