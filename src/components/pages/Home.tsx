import ImageSlider from "../ImageSlider";
import Card from "../Card";
import "./home.css";

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
        <Card
          description="lorem ipisum dome amintsda this is what is it there was nothing left to do when the "
          imgUrl="./src/assets/tstrong.webp"
        />

        <Card
          description="lorem ipisum dome amintsda this is what is it there was nothing left to do when the "
          imgUrl="./src/assets/tstrong.webp"
        />
        <Card
          description="lorem ipisum dome amintsda this is what is it there was nothing left to do when the "
          imgUrl="./src/assets/tstrong.webp"
        />
        <Card
          description="lorem ipisum dome amintsda this is what is it there was nothing left to do when the "
          imgUrl="./src/assets/tstrong.webp"
        />
        <Card
          description="lorem ipisum dome amintsda this is what is it there was nothing left to do when the "
          imgUrl="./src/assets/tstrong.webp"
        />
        <Card
          description="lorem ipisum dome amintsda this is what is it there was nothing left to do when the "
          imgUrl="./src/assets/tstrong.webp"
        />
      </div>
    </>
  );
};
