import FormattedPrice from "../components/FormattedPrice";

const CartCard = ({ item }) => {
  return (
    <div className="cart-card">
      <p style={{ fontWeight: "bold", fontSize: "12px" }}>{item.name}</p>
      <img src={item.icon} alt="pen" className="dropImage" />

      {/*  <p>
        price - <FormattedPrice value={item.price} />
      </p>*/}
      <p style={{ fontSize: "10px" }}>QTY: {item.quantity}</p>
    </div>
  );
};

export default CartCard;
