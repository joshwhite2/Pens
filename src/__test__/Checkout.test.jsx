import React from "react";

import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import { ShoppingCartProvider } from "../context/ShoppingCartContext";

import Checkout from "../components/Checkout";

test("renders checkout page", () => {
  render(
    <BrowserRouter>
      <ShoppingCartProvider>
        <Checkout />
      </ShoppingCartProvider>
    </BrowserRouter>
  );

  const headingElement = screen.getByText("Checkout");

  const confirmButton = screen.getByText("Confirm Order");

  expect(headingElement).toBeInTheDocument();

  expect(confirmButton).toBeInTheDocument();
});
