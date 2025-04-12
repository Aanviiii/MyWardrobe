import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Wardrobe from "./components/Wardrobe";
import SavedCombos from "./components/SavedCombos";
import OutfitGenerator from "./components/OutfitGenerator";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/savedcombos" element={<SavedCombos />} />
          <Route path="/outfitgenerator" element={<OutfitGenerator />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
