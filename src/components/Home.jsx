import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Upload from "./Upload";
import OutfitGenerator from "./OutfitGenerator";

function Home() {
  return (
    <div>
      <nav>
        {/* <img src="" alt="Logo" /> */}
        <h1>MyWardrobe</h1>
        <h3>Your personal virtual closet✨</h3>
      </nav>
      <div className="btns">
        <Link to="/upload">
          <button>Get Started</button>
        </Link>
        <Link to="/outfitgenerator">
          <button>Try Outfit Generator</button>
        </Link>
        <div>
          <h2>How to use?</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="cards">👚</div>
            {/* Upload clothes */}
            <div className="cards">🔀</div>
            {/* Generate looks */}
            <div className="cards">💾</div>
            {/* Save outfits */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
