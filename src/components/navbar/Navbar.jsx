import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/">
            <div className="logo">
              <span>
                <span style={{ color: "#cbfc01" }}>under</span>pin <br /> game
              </span>
            </div>
          </Link>
        </div>
        <div className="middle">
          <ul>
            <li>Games</li>
            <li>Community</li>
            <li>Merch</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <button>Log in</button>
            </li>
            <li>
              <div
                className={`mobile-menu-btn ${open && "opened"}`}
                onClick={() => setOpen(!open)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-container">
            <ul>
              <li>Games</li>
              <li>Community</li>
              <li>Merch</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
