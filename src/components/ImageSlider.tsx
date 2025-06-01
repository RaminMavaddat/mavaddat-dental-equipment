import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imageSlider.css";
interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerPadding: "0px",
    variableWidth: false, // Prevents width calculation issues
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <a href="/">
          <div key={index}>
            <img
              className="image-slider-img"
              src={image}
              alt={`Slide ${index}`}
            />
          </div>
        </a>
      ))}
    </Slider>
  );
};

export default ImageSlider;
