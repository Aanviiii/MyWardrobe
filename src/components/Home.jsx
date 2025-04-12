import React from "react";
import "./Home.css";
// import Upload from "./Upload";
// import OutfitGenerator from "./OutfitGenerator";
// import SavedCombos from "./SavedCombos";
// import About from "./About";

function Home() {
  return (
    <div>
      {/* <navLink to="/">
        <Home />
      </navLink>
      <NavLink to="/upload">
        <Upload />
      </NavLink>
      <NavLink to="/generate">
        <OutfitGenerator />
      </NavLink>
      <NavLink to="/combos">
        <SavedCombos />
      </NavLink>
      <NavLink to="/help">
        <About />
      </NavLink> */}

      <nav>
        <img href="" />
        <h1>MyWardrobe</h1>
        <h3>Your personal virtual closet✨</h3>
      </nav>
      <div className="btns">
        <button onClick={() => navigate("/upload")}>Get Started</button>
        <button onClick={() => navigate("/generate")}>
          Try Outfit Generator
        </button>
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
