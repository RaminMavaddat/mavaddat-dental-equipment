import "./App.css";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import ProductPage from "./components/pageComponents/ProductPage";
import ProductList from "./components/pageComponents/ProductList";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, About } from "./components/pages";
import { OralScanner, DentaFilmScanner } from "./components/pages/products";
import implantSystemProducts from "../src/components/pages/TStrong-implant-system";

function App() {
  const [productsData, setProductsData] = useState<any>(null);
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch("/data/implantSystems.json");
        const json = await response.json();
        setProductsData(json);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchProductsData();
  }, []);

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

        {productsData?.map((product: any) => {
          const ProductComponent =
            implantSystemProducts[String(product.component)];

          return (
            <Route
              path={String(product.navigationUrl)}
              element={
                <ProductPage>
                  <ProductComponent />
                </ProductPage>
              }
            />
          );
        })}

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
