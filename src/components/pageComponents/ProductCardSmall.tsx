import { useNavigate } from "react-router-dom";
import "./productCardSmall.css";

interface Props {
  product: any;
}

function ProductCardSmall({ product }: Props) {
  const navigate = useNavigate();

  return (
    <div className="product-card-small">
      <img src={product.imgUrl} />
      <h1> {product.description} </h1>
      <button
        onClick={() => {
          navigate(product.navigationUrl, { state: product.moreInfo });
        }}
      >
        اطلاعات بیشتر
      </button>
    </div>
  );
}

export default ProductCardSmall;
