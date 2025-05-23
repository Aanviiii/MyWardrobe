import React, { useEffect, useState } from "react";
import "./OutfitGenerator.css";

function OutfitGenerator() {
  const [clothes, setClothes] = useState({
    tops: [],
    bottoms: [],
    dresses: [],
    shoes: [],
    accessories: [],
  });

  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wardrobe")) || []; // Accessing clothes from local storage
    const grouped = {
      tops: [],
      bottoms: [],
      dresses: [],
      shoes: [],
      accessories: [],
    };

    saved.forEach((item) => {
      const cat = item.category?.toLowerCase();
      if (grouped[cat]) {
        grouped[cat].push(item);
      }
    });

    setClothes(grouped);
  }, []);

  const getRandomItem = (arr) => {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const generateOutfit = () => {
    const dress = getRandomItem(clothes.dresses);
    const top = getRandomItem(clothes.tops);
    const bottom = getRandomItem(clothes.bottoms);
    const shoes = getRandomItem(clothes.shoes);
    const accessories = getRandomItem(clothes.accessories);
    // Generating outfit combos consisting of either a dress, shoes & accessories or a top, bottom, shoes & accessories
    const newOutfit = dress
      ? [dress, shoes, accessories]
      : [top, bottom, shoes, accessories];

    setOutfit(newOutfit.filter(Boolean));
  };

  const saveOutfit = () => {
    if (outfit.length === 0) return;

    const saved = JSON.parse(localStorage.getItem("savedOutfits")) || [];
    saved.push(outfit);
    localStorage.setItem("savedOutfits", JSON.stringify(saved));
    alert("Outfit saved successfully!");
  };

  return (
    <div className="outfit-generator-container">
      <h2 className="generator-title">👗 Outfit Generator</h2>
      <button onClick={generateOutfit} className="generate-button">
        Generate Random Outfit
      </button>

      {outfit.length > 0 && (
        <button onClick={saveOutfit} className="save-button">
          Save Combo
        </button>
      )}

      {outfit.length === 0 ? (
        <p className="empty-outfit-message">
          Click the button to get your stylish combo!
        </p>
      ) : (
        <div className="outfit-display">
          {outfit.map((item, index) =>
            item ? (
              <div key={index} className="outfit-card">
                <img
                  src={item.imageUrl || item.image}
                  alt={`${item.category || "clothing"} ${index}`}
                  className="outfit-image"
                />
                <div className="outfit-category">
                  {item.category?.charAt(0).toUpperCase() +
                    item.category?.slice(1)}
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

export default OutfitGenerator;
