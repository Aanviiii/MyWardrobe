import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      {/* This page tells about the features of the website */}
      <Link to="/" className="back-button">
        ⬅ Back to Home
      </Link>

      <h1 className="about-title">👗 About MyWardrobe</h1>

      <p className="about-intro">
        <strong>MyWardrobe</strong> is your personal digital closet — a space to
        organize, visualize, and style your clothing!
      </p>

      <h2>✨ What Can You Do Here?</h2>
      <ul className="feature-list">
        <li>
          <strong>Upload Your Clothes:</strong> Add tops, bottoms, and more.
        </li>
        <li>
          <strong>Remove Backgrounds:</strong> Make images pop with one click.
        </li>
        <li>
          <strong>Create Outfit Combos:</strong> Pair items randomly.
        </li>
        <li>
          <strong>Save Your Favorite Styles:</strong> Keep your best looks.
        </li>
        <li>
          <strong>Edit or Delete:</strong> Keep everything up to date.
        </li>
      </ul>

      <h2>🎯 Why Use MyWardrobe?</h2>
      <ul className="feature-list">
        <li>Plan outfits before events or travel.</li>
        <li>Digitally organize your closet.</li>
        <li>Reduce outfit decision stress.</li>
        <li>Perfect for last-minute events as well!</li>
      </ul>

      <h2>⚙️ Tech Stack</h2>
      <p className="tech-stack">
        Built with 💜 using: React.js, React Router, Plain CSS, Remove.bg API,
        and Local Storage.
      </p>

      <p className="about-footer">
        ✨ Let’s make dressing up easier, smarter, and fun!
      </p>
    </div>
  );
}

export default About;
