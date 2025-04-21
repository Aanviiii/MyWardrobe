import React from "react";
import "./Navbar.css"; // Import the CSS file
import Logo from "../assets/MyWardrobe.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* The navigation bar is common for all the pages */}
      <Link to="/">
        <img src={Logo} alt="MyWardrobe Logo" className="logo" />
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/wardrobe">Wardrobe</Link>
        <Link to="/savedcombos">Saved Combos</Link>
        <Link to="/outfitgenerator">Generate Outfits</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
