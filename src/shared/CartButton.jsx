import React, { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";

const CartButton = ({ item }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <button className="btn1" onClick={handleAddToCart}>
      <img src="/images/cart-icon.png" alt="view cart" /> Add To Cart
    </button>
  );
};

export default CartButton;
