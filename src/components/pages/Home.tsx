import ImageSlider from "../ImageSlider";
import ProductCardLarge from "../ProductCardLarge";
import "./home.css";
import data from "../../data/products.json";

export const Home = () => {
  const images = import.meta.glob("/src/assets/slideImages/*.{webp,png,jpg}");

  const imagePaths = Object.keys(images).sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, ""), 10);
    const numB = parseInt(b.replace(/\D/g, ""), 10);

    return numA - numB;
  });

  return (
    <>
      <div className="slide-container">
        <ImageSlider images={imagePaths} />;
      </div>
      <div className="card-container">
        {data.products.map((product) => (
          <ProductCardLarge product={product} />
        ))}
      </div>
    </>
  );
};
