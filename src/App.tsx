import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home, About } from "./components/pages";
import ProductPage from "./components/pages/products/ProductPage";
import { OralScanner, DentaFilmScanner } from "./components/pages/products";
import ProductList from "./components/pages/products/ProductList";

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
        <Route
          path="/denta-film-scanner"
          element={
            <ProductPage>
              <DentaFilmScanner />
            </ProductPage>
          }
        />

        <Route path="/TStrong-implant-system" element={<ProductList />} />

        <Route path="/home" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
