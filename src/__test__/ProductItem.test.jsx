import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import ShoppingCartContext from "../context/ShoppingCartContext";

import ProductItem from "../components/ProductItem";

const mockAddToCart = jest.fn();

const mockItem = {
  id: 1,

  name: "Sample Product",

  icon: "sample-icon.png",

  price: 10.99,
};

// Mock the context provider

const MockProvider = ({ children }) => (
  <ShoppingCartContext.Provider value={{ addToCart: mockAddToCart }}>
    {children}
  </ShoppingCartContext.Provider>
);

test("renders product item with correct content and functionality", () => {
  render(
    <BrowserRouter>
      <MockProvider>
        <ProductItem item={mockItem} />
      </MockProvider>
    </BrowserRouter>
  );

  const productImage = screen.getByAltText("pen");

  const productLink = screen.getByRole("link", { name: /sample product/i });

  // Check if the product image and link are rendered correctly

  expect(productImage).toBeInTheDocument();

  expect(productLink).toBeInTheDocument();

  expect(productLink.getAttribute("href")).toBe(`/details/${mockItem.id}`);

  // Check if clicking the product link navigates correctly

  fireEvent.click(productLink);

  expect(window.location.pathname).toBe(`/details/${mockItem.id}`);
});
