import "./App.css";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import { Routes, Route } from "react-router-dom";
import { Home, About } from "./components/pages";
import ProductPage from "./components/pageComponents/ProductPage";
import { OralScanner, DentaFilmScanner } from "./components/pages/products";
import ProductList from "./components/pageComponents/ProductList";

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
