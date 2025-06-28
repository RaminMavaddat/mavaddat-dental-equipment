import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./productPage.css";
import ImageGallery from "./ImageGallery";
import ImageGalleryModal from "./ImageGalleryModal";

export default function ProductPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const data: any = location.state || {};
  const productImages = data.productImages;

  const [overflow, setOverflow] = useState("");
  const [modalDisplay, setModalDisplay] = useState("none");

  const onZoomIconClicked = () => {
    setOverflow((prev) => (prev === "" ? "hidden" : ""));
    setModalDisplay("flex");
  };

  return (
    <>
      <ImageGalleryModal
        imageUrls={productImages}
        display={modalDisplay}
        setDisplay={setModalDisplay}
        setParentOverflow={setOverflow}
      />
      <div className="product-container" style={{ overflow: overflow }}>
        <h1 className="product-header">{data.header}</h1>
        <div className="feature-top-section">
          <div className="feature-description-section">
            {data.productFeatures && (
              <div>
                <h1>ویژگی محصول</h1>
                <ul>
                  {Object.entries(data.productFeatures).map(([key, value]) => (
                    <li key={key}>{`${key} : ${value}`}</li>
                  ))}
                </ul>
              </div>
            )}
            {data.moreFeatures && (
              <div>
                <h1>قابلیت ها</h1>
                <ul>
                  {data.moreFeatures?.map((item: string) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              {data.usage?.length > 0 && <h1>موارد استفاده</h1>}
              {data.usage?.map((item: string) => (
                <li>{item}</li>
              ))}
            </div>
          </div>
          <ImageGallery
            onZoomIconClicked={onZoomIconClicked}
            imageUrls={productImages}
          />
        </div>

        <div className="page-body">{children}</div>
      </div>
    </>
  );
}
