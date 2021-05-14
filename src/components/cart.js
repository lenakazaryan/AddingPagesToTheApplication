import { useContext } from "react";
import Context from "./Context";

function Cart() {
  const DataContext = useContext(Context);
  const cart = DataContext.cart;

  return (
    <div className="cart">
      <h1 className="cart-text">Cart</h1>
      {cart.map((item) => {
        return (
          <div className="cart-items">
            <div>
              <p className="cart-items-name"> {item.name}</p>
              <img
                className="cart-items-img"
                src={item.image ? item.image : "./image/default.jpg"}
              />
            </div>
          </div>
        );
      })}
      {!cart.length && (
        <div>
          <h1>Cart</h1>
          <p>Cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
