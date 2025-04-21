import React, { useState, useEffect } from "react";
import "./Upload.css";

const UploadPage = () => {
  const [category, setCategory] = useState("tops");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [savedClothes, setSavedClothes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("clothes");
    if (data) {
      setSavedClothes(JSON.parse(data)); // Accessing saved clothes from local storage
    }
  }, []);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]); // Uploading images to removr background
  };

  const handleRemoveBg = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image_file", image);
    formData.append("size", "auto");

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": import.meta.env.VITE_REMOVE_BG_KEY, // Importing the Background remover API
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Remove.bg API Error");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPreview(url);
    } catch (error) {
      console.error("Failed to remove background:", error);
    }
  };

  const saveToWardrobe = (imageUrl) => {
    const existing = JSON.parse(localStorage.getItem("wardrobe")) || [];

    const clothItem = {
      imageUrl,
      category,
    };

    const updated = [...existing, clothItem];
    localStorage.setItem("wardrobe", JSON.stringify(updated)); // Storing clothes in local storage
    alert("Saved to wardrobe!");
  };

  return (
    <div className="upload-container">
      <h1 className="upload-title">Upload Your Clothes</h1>

      <div className="upload-form">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="dresses">Dresses</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <button onClick={handleRemoveBg}>Remove Background</button>
      </div>

      {preview && (
        <div className="preview-section">
          <img src={preview} alt="Preview" className="preview-img" />
          <button
            onClick={() => {
              saveToWardrobe(preview);
              setPreview(null);
            }}
          >
            Save to Wardrobe
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
