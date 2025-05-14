import { useState } from "react";
import "./imageGalleryModal.css";
interface Props {
  imageUrls: string[];
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  setParentOverflow: React.Dispatch<React.SetStateAction<string>>;
  display: string;
}

function ImageGalleryModal({
  imageUrls,
  display,
  setDisplay,
  setParentOverflow,
}: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  const imagesCount = imageUrls.length;
  return (
    <div className="modal" style={{ display: display }}>
      <i
        className="bi bi-x-square"
        onClick={() => {
          setDisplay("none");
          setParentOverflow("");
        }}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: "1000",
        }}
      ></i>
      <div className="modal-container">
        <i
          style={{ right: "0.5rem" }}
          className="bi bi-chevron-right"
          onClick={() => setImageIndex((imageIndex + 1) % imagesCount)}
        ></i>
        <div className="modal-main-image-container">
          <img
            className="modal-main-image"
            src={imageUrls[imageIndex]}
            alt="gallery-image"
          />
        </div>
        <i
          style={{ left: "0.5rem" }}
          className="bi bi-chevron-left"
          onClick={() => setImageIndex((imageIndex - 1) % imagesCount || 0)}
        ></i>
      </div>
    </div>
  );
}

export default ImageGalleryModal;
