import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import ConfirmButton from "../shared/ConfirmButton";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div className="checkout">
        <h2>Checkout</h2>

        <form action="">
          <h3>Contact Information</h3>
          <label>
            E-mail Address:
            <input type="text" />
          </label>
          <h3>Shipping Information</h3>
          <label>
            First Name:
            <input type="text" />
          </label>
          <label>
            Last Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Street Address:
            <input type="text" />
          </label>
          <label>
            City:
            <input type="text" />
          </label>
          <br />
          <label>
            Province/State:
            <input type="text" />
          </label>
          <label>
            Postal Code / Zip Code:
            <input type="text" />
          </label>
          <label>
            Country:
            <input type="text" />
          </label>
          <br />
          <h3>Payment Method</h3>
          <label>
            Card Type:
            <select style={{ width: "140px" }}>
              <option value="Interac">Interac</option>
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
              <option value="American Express">American Express</option>
            </select>
          </label>
          <label>
            Card Number:
            <input type="text" style={{ width: "140px" }} />
          </label>
          <p>Expiry Date</p>
          <div className="pay-drop">
            <label>
              Month:
              <select>
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Year:
              <select>
                {Array.from({ length: 25 }, (_, index) => (
                  <option key={index + 1} value={2023 + index}>
                    {2023 + index}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label style={{ width: "60px" }}>
            Cvv:
            <input type="text" />
          </label>
        </form>
        <OrderSummary></OrderSummary>
        <Link to="/cart">
          <button className="btn1">&#8656; Back to Cart</button>
        </Link>
        <ConfirmButton></ConfirmButton>
      </div>
    </>
  );
};

export default Checkout;
