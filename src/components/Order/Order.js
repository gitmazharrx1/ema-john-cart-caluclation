import React from "react";
import { Link } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProduct";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const deleteItem = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="item-container">
        {cart.map((item) => (
          <ReviewItem
            key={item.id}
            product={item}
            deleteItem={deleteItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button>
            <Link to="/">Checkout</Link>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
