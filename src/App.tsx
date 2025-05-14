import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home, Contact, About } from "./components/pages";
import { OralScannerBlz } from "./components/pages/products";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oralScannerBlz" element={<OralScannerBlz />} />
        <Route path="/home" element={<Contact />} />
        <Route path="/home" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
