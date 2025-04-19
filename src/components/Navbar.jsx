import React from "react";
import Logo from "../assets/MyWardrobe.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Link to="/">
        <img
          src={Logo}
          style={{ height: "100px", width: "100px", borderRadius: "50%" }}
        />
      </Link>

      <Link
        to="/"
        style={{
          fontSize: "large",
          margin: "18px",
          fontStyle: "normal",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Home
      </Link>

      <Link
        to="/upload"
        style={{
          fontSize: "large",
          margin: "18px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Upload
      </Link>

      <Link
        to="/wardrobe"
        style={{
          fontSize: "large",
          margin: "18px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Wardrobe
      </Link>

      <Link
        to="/savedcombos"
        style={{
          fontSize: "large",
          margin: "18px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Saved Combos
      </Link>

      <Link
        to="/outfitgenerator"
        style={{
          fontSize: "large",
          margin: "18px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Generate Outfits
      </Link>

      <Link
        to="/about"
        style={{
          fontSize: "large",
          margin: "18px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        About
      </Link>
    </div>
  );
}

export default Navbar;
