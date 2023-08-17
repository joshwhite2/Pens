import { React } from "react";
import BackButton from "../shared/BackButton";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ItemCard from "../shared/ItemCard";
import OrderSummary from "./OrderSummary";
import CheckoutButton from "../shared/CheckoutButton";
import Nav from "./Nav";
import Header from "./Header";

const ShoppingCart = () => {
  const { shoppingCart } = useShoppingCart();

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div className="cart">
        <h2>ShoppingCart</h2>

        {shoppingCart.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}

        <OrderSummary />

        <BackButton></BackButton>

        <CheckoutButton></CheckoutButton>
      </div>
    </>
  );
};

export default ShoppingCart;
