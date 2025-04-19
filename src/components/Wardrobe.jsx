import React, { useEffect, useState } from "react";
import "./Wardrobe.css";

function Wardrobe() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wardrobe")) || [];
    setClothes(saved);
  }, []);

  const handleDelete = (index) => {
    const updated = [...clothes];
    updated.splice(index, 1);
    setClothes(updated);
    localStorage.setItem("wardrobe", JSON.stringify(updated));
  };

  return (
    <div className="wardrobe-container">
      <h2 className="wardrobe-title">🧺 My Wardrobe</h2>

      {/* Empty Message */}
      {clothes.length === 0 ? (
        <p className="empty-message">
          No clothes yet! Start uploading to fill your wardrobe. 👕👖
        </p>
      ) : (
        <div className="clothes-grid">
          {clothes.map((item, index) => (
            <div key={index} className="clothes-card">
              {/* Optional: Show Category if available */}
              {item.category && (
                <span className="category-label">{item.category}</span>
              )}

              <img
                src={typeof item === "string" ? item : item.image}
                alt={`Cloth ${index + 1}`}
                className="clothes-image"
              />

              {/* Delete button */}
              <button
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wardrobe;
