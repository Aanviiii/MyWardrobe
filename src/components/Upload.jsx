import React, { useState, useEffect } from "react";

const UploadPage = () => {
  const [category, setCategory] = useState("tops");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [savedClothes, setSavedClothes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("clothes");
    if (data) {
      setSavedClothes(JSON.parse(data));
    }
  }, []);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleRemoveBg = async () => {
    if (!image) return;

    const formData = new FormData();
    console.log("Image selected:", image);
    formData.append("image_file", image);
    formData.append("size", "auto");

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": import.meta.env.VITE_REMOVE_BG_KEY,
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
    const updated = [...existing, imageUrl];
    localStorage.setItem("wardrobe", JSON.stringify(updated));
    alert("Saved to wardrobe!");
  };

  return (
    <div>
      <h1>Upload Your Clothes</h1>

      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="dresses">Dresses</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <button onClick={handleRemoveBg}>Remove Background</button>

        {preview && (
          <div>
            <img src={preview} alt="Preview" />
            <button onClick={() => saveToWardrobe(preview)}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
