import { Link } from "react-router-dom";
import CartButton from "../shared/CartButton";
import React, { useContext } from "react";
import FormattedPrice from "./FormattedPrice";
import ShoppingCartContext from "../context/ShoppingCartContext";

const ProductItem = ({ item }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="productItem">
      <div className="itemDisplay">
        <Link to={`/details/${item.id}`}>
          <img src={item.icon} alt="pen" className="productImage" />
        </Link>
      </div>
      <div className="price">
        <FormattedPrice value={item.price} />
      </div>

      <div className="productLabel">
        <Link to={`/details/${item.id}`}>
          <h2>{item.name}</h2>
        </Link>
        <img
          src="/images/cart-icon.png"
          alt=""
          onClick={handleAddToCart}
          className="cart-button"
        />
      </div>
    </div>
  );
};

export default ProductItem;
