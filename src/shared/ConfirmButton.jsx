import React, { useContext } from "react";

import ShoppingCartContext from "../context/ShoppingCartContext";

const ConfirmButton = () => {
  const { clearCart } = useContext(ShoppingCartContext);

  // Confirmation window after button is pressed

  const handleConfirm = async () => {
    window.alert(
      "Your order is confirmed. Thank you for your purchase. You will receive a copy of the invoice in your e-mail"
    );

    // Redirect to home page after order is confirmed and clear the cart

    await clearCart();

    window.location.href = "/";
  };

  return (
    <div>
      <button className="btn1 btn2" onClick={handleConfirm}>
        Confirm Order
      </button>
    </div>
  );
};

export default ConfirmButton;
