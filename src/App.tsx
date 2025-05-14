import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home, Contact, About } from "./components/pages";
import ProductPage from "./components/pages/products/ProductPage";
import { OralScanner } from "./components/pages/products";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/oralScannerBlz"
          element={
            <ProductPage>
              <OralScanner />
            </ProductPage>
          }
        />
        <Route path="/home" element={<Contact />} />
        <Route path="/home" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
