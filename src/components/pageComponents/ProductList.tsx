import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./productList.css";
import ProductCardSmall from "./ProductCardSmall";

function ProductList() {
  const location = useLocation();
  const data = location.state || {};
  const [jsonData, setJsonData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.dataUrl) {
      fetch(data.dataUrl)
        .then((response) => response.json())
        .then((json) => {
          setJsonData(json);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching JSON:", error);
          setLoading(false); // Ensure loading stops even if fetch fails
        });
    }
  }, [data.dataUrl]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-list-container">
      <div className="product-list">
        {jsonData &&
          jsonData.map((product: any) => (
            <ProductCardSmall key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
