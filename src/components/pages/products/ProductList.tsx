import { useLocation } from "react-router-dom";
import "./productList.css";
import ProductCardSmall from "../../ProductCardSmall";

function ProductList() {
  const location = useLocation();
  const data = location.state || {};
  //const productImages: string[] = data.images;

  return (
    <>
      <div className="product-list-container">
        <div className="product-list">
          {data.productTypes.map((item: any) => (
            <ProductCardSmall product={item} />
            //<img src={item.imgUrl} />
          ))}
        </div>
      </div>
      ;
    </>
  );
}

export default ProductList;
