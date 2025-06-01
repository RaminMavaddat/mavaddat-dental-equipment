import { useNavigate } from "react-router-dom";
import "./ProductCardLarge.css";

interface Props {
  product: any;
}

function ProductCardLarge({ product }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <img src={product.imgUrl} />
        <h1>
          <i className="bi bi-stars" /> {product.header}
        </h1>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <button
          className="more-info-btn"
          onClick={() => {
            navigate(product.navigationUrl, { state: product.moreInfo });
          }}
        >
          <i className="bi bi-mouse"></i>مشاهده بیشتر
        </button>
      </div>
    </>
  );
}

export default ProductCardLarge;
