import React, { useEffect, useState } from "react";
import "./Wardrobe.css";

function Wardrobe() {
  const [groupedClothes, setGroupedClothes] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wardrobe")) || [];

    // Normalize category names to match consistent display
    const normalizeCategory = (cat) => {
      switch (cat.toLowerCase()) {
        case "tops":
          return "Tops";
        case "bottoms":
          return "Bottoms";
        case "dresses":
          return "Dresses";
        case "shoes":
          return "Shoes";
        case "accessories":
          return "Accessories";
        default:
          return "Uncategorized";
      }
    };

    // Group clothes by normalized category
    const grouped = saved.reduce((acc, item) => {
      const cat = normalizeCategory(item.category || "uncategorized");
      if (!acc[cat]) {
        acc[cat] = [];
      }
      acc[cat].push(item);
      return acc;
    }, {});

    setGroupedClothes(grouped);
  }, []);

  const handleDelete = (category, index) => {
    const updatedCategory = [...groupedClothes[category]];
    updatedCategory.splice(index, 1);

    const updatedGrouped = {
      ...groupedClothes,
      [category]: updatedCategory,
    };

    // Flatten all grouped clothes to save back to localStorage
    const flattened = Object.entries(updatedGrouped).flatMap(([cat, items]) =>
      items.map((item) => ({ ...item, category: cat.toLowerCase() }))
    );
    localStorage.setItem("wardrobe", JSON.stringify(flattened));

    // Update state
    setGroupedClothes(updatedGrouped);
  };

  return (
    <div className="wardrobe-container">
      <h2 className="wardrobe-title">🧺 My Wardrobe</h2>

      {Object.keys(groupedClothes).length === 0 ? (
        <p className="empty-message">
          No clothes yet! Start uploading to fill your wardrobe.
        </p>
      ) : (
        Object.entries(groupedClothes).map(([category, items]) => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category}</h3>
            <div className="clothes-grid">
              {items.map((item, index) => (
                <div key={index} className="clothes-card">
                  <img
                    src={item.imageUrl || item.image}
                    alt={`Cloth ${index + 1}`}
                    className="clothes-image"
                  />
                  <button
                    onClick={() => handleDelete(category, index)}
                    className="delete-button"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wardrobe;
