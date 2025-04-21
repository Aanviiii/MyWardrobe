import React, { useEffect, useState } from "react";
import "./SavedCombos.css";

function SavedCombos() {
  const [savedCombos, setSavedCombos] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedOutfits")) || []; // Accessing saved combos from local storage
    setSavedCombos(saved);
  }, []);

  const deleteCombo = (indexToDelete) => {
    const updated = savedCombos.filter((_, index) => index !== indexToDelete);
    setSavedCombos(updated);
    localStorage.setItem("savedOutfits", JSON.stringify(updated)); // Deleting specific combos from local storage
  };

  return (
    <div className="saved-combos-container">
      <h2 className="saved-title">💾 Saved Outfits</h2>

      {savedCombos.length === 0 ? (
        <p className="no-saved-message">No saved outfits yet. Start styling!</p>
      ) : (
        <div className="combo-list">
          {savedCombos.map((combo, comboIndex) => (
            <div key={comboIndex} className="combo-card">
              <div className="combo-items">
                {combo.map((item, itemIndex) => (
                  <div key={itemIndex} className="combo-item">
                    <img
                      src={item.imageUrl || item.image}
                      alt={item.category}
                      className="combo-image"
                    />
                    <div className="combo-category">
                      {item.category?.charAt(0).toUpperCase() +
                        item.category?.slice(1)}
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="delete-combo-button"
                onClick={() => deleteCombo(comboIndex)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedCombos;
