import { useState } from "react";
import "./imageGallery.css";
import ImageMagnifier from "./ImageMagnifier";

interface Props {
  imageUrls: string[];
  onZoomIconClicked: () => void;
}

function ImageGallery({ imageUrls = [], onZoomIconClicked }: Props) {
  const [mainImg, setMainImg] = useState(imageUrls[0]);
  const [fade, setFade] = useState(true);
  const imageClickedHandler = (url: string) => {
    setFade(false);
    setTimeout(() => {
      setMainImg(url);
      setFade(true);
    }, 500);
  };

  const images = imageUrls.map((url) => (
    <div className="img-box">
      <img src={url} onClick={() => imageClickedHandler(url)} />
    </div>
  ));

  // console.log(`$these are my images url: ${images}`);
  return (
    <>
      <div className="gallery-container">
        <i
          className="bi bi-zoom-in"
          onClick={onZoomIconClicked}
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "1.5rem",
            backgroundColor: "white",
            borderRadius: "50%",
            width: "4rem",
            height: "4rem",
            top: "1rem",
            right: "1rem",
            zIndex: "10",
          }}
        ></i>
        <div className={`main-image-container ${fade ? "fade-in" : ""}`}>
          <ImageMagnifier imageUrl={mainImg} />
        </div>
        <div className="gallery-images-container">{images}</div>
      </div>
    </>
  );
}

export default ImageGallery;
