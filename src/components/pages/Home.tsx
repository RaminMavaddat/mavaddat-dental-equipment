import ImageSlider from "../pageComponents/ImageSlider";
import ProductCardLarge from "../pageComponents/ProductCardLarge";
import "./home.css";
import data from "../../data/products.json";
import slideImages from "../../assets/slideImages";

export const Home = () => {
  return (
    <>
      <div className="slide-container">
        <ImageSlider images={slideImages} />;
      </div>
      <div className="card-container">
        {data.products.map((product) => (
          <ProductCardLarge key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
