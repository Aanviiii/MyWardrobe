import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        {/* <img src="" alt="Logo" /> */}
        <h1>MyWardrobe</h1>
        <h3>Your personal virtual closet✨</h3>
      </nav>
      <div className="btns">
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/upload">
          <button>Get Started</button>
        </Link>
        <Link to="/outfitgenerator">
          <button>Try Outfit Generator</button>
        </Link>
        <div>
          <h2 style={{ color: "black" }}>How to use?</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="cards">
              👚
              <p style={{ fontSize: "15px" }}>Upload clothes</p>
            </div>
            <div className="cards">
              🔀
              <br />
              <p style={{ fontSize: "15px" }}>Generate looks</p>
            </div>
            <div className="cards">
              💾
              <br />
              <p style={{ fontSize: "15px" }}>Save outfits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
