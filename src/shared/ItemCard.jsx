import FormattedPrice from "../components/FormattedPrice";
import { useContext } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ItemCard = ({ item }) => {
  // code for remove item button to function

  const { deleteFromCart } = useShoppingCart();

  // set button up to remove one item at a time and not the whole quantity

  const handleRemove = () => {
    if (item.quantity === 0) {
      deleteFromCart(item.id);
    } else {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      deleteFromCart(updatedItem);
    }
  };

  return (
    <div className="card">
      <h2>{item.name}</h2>
      <img src={item.icon} alt="" height="60px"/>
      <p>{item.description}</p>
      
      <p>
        price - <FormattedPrice value={item.price} />
      </p>
           
      <button className="btn1 top-right" onClick={handleRemove}>
        Remove Item
      </button>
      <h2>Quantity: {item.quantity}</h2>
    </div>
  );
};

export default ItemCard;
