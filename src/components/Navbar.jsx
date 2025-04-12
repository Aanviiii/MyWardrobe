import React from "react";
import Logo from "../assets/MyWardrobe.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Link to="/">
        <img src={Logo} />
      </Link>

      <Link to="/">Home</Link>

      <Link to="/upload">Upload</Link>

      <Link to="/wardrobe">Wardrobe</Link>

      <Link to="/savedcombos">Saved Combos</Link>

      <Link to="/outfitgenerator">Generater Outfits</Link>

      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
