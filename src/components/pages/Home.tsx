import Card from "../Card";
import ImageSlider from "../ImageSlider";
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
      <div className="card">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          aspernatur doloremque dignissimos iusto laudantium ea architecto
          sapiente rerum dolor excepturi inventore tempore voluptatem cumque non
          a magnam culpa saepe animi, porro nisi deserunt. Odit dicta ad, amet
          nostrum maxime, distinctio repellendus laboriosam nobis fugiat totam
          saepe eaque dolores assumenda autem?
        </p>

        <img src="./src/assets/tstrong.webp" />
      </div>
      <Card
        description="hi there i'm using card"
        imgUrl="./src/assets/tstrong.webp"
      />
    </>
  );
};
