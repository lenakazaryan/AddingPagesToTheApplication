import Cart from "./cart";
import Context from "./Context";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useContext } from "react";

function ProductsListPage() {
  const DataContext = useContext(Context);
  const { setCart, data } = DataContext;

  function handler(item) {
    setCart((state) => {
      return [...state, item];
    });
  }

  return (
    <div>
      <h1 className="products">Products</h1>
      <div className="dataItems-container">
        {data.map((item, id) => {
          return (
            <div key={id}>
              <div key={id} className="dataItems" data-id={item.id}>
                <p className="dataItems-name">{item.name}</p>
                <Link to={`/product/${item.id}`}>
                  <img
                    className="dataItemsimages"
                    src={item.image ? item.image : "./image/default.jpg"}
                    alt="no img"
                  />
                </Link>
                <button
                  onClick={() => handler(item)}
                  className="addToCart-button"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsListPage;
