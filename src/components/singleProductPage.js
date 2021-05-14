import { useParams } from "react-router-dom";
import { useContext } from "react";

import Context from "./Context";

function SingleProductPage() {
  let params = useParams();
  const { data } = useContext(Context);

  const [product] = data.filter((item) => {
    return item.id == params.id;
  });
  return (
    <div className="single-product-item">
      <p className="single-product-name">Name:{product.name}</p>
      <p className="single-product-description">
        Description: {product.description}
      </p>
      <p className="single-product-price">Price: {product.price}</p>
      <p style={{ backgroundColor: product.color }}>Color</p>
      <img src={product.image ? product.image : "./image/default.jpg"} />
    </div>
  );
}

export default SingleProductPage;
