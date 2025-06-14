import { useEffect, useState } from "react";
import "./imageMagnifier.css";
interface Props {
  imageUrl: string;
}

function ImageMagnifier({ imageUrl }: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);

  const [imageSrc, setImageSrc] = useState(imageUrl);

  useEffect(() => {
    setImageSrc(imageUrl);
  }, [imageUrl]);

  const handleMouseHover = (e: React.MouseEvent) => {
    const { left, top, width, height } = (
      e.currentTarget as HTMLElement
    ).getBoundingClientRect();

    //console.log(`left:${left}, top:${top}, width:${width}, height:${height}`);
    // console.log(`size width:${width} height:${height}`);
    //console.log(`e.pageX : ${e.pageX} e.pageY : ${e.pageY} `);

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
  };
  return (
    <div
      className="img-magnifier-container"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      <img
        className="main-image"
        alt="Fallback Image"
        src={imageSrc}
        onError={() => setImageSrc("/image-not-available.webp")}
      />

      {showMagnifier && (
        <div
          className="magnified-image"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
          }}
        />
      )}
    </div>
  );
}

export default ImageMagnifier;
