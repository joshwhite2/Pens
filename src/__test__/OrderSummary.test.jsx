import React from "react";
import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import OrderSummary from "../components/OrderSummary";

const mockShoppingCart = [
  {
    id: 1,
    name: "Sample Product 1",
    price: 10.0,
    quantity: 2,
  },
  {
    id: 2,
    name: "Sample Product 2",
    price: 15.0,
    quantity: 3,
  },
];

// Mock the useContext hook

jest.mock("react", () => ({
  ...jest.requireActual("react"),

  useContext: jest.fn(),
}));

test("renders order summary with correct calculations", () => {
  useContext.mockReturnValue({ shoppingCart: mockShoppingCart });

  render(<OrderSummary />);

  const subtotalText = screen.getByText(/subtotal/i);

  const shippingText = screen.getByText(/shipping/i);

  const taxesText = screen.getByText(/taxes/i);

  const orderTotalText = screen.getByText(/order total/i);

  // Check if the calculated values are displayed correctly

  expect(subtotalText).toHaveTextContent(`Subtotal(5 items): $65.00`);

  expect(shippingText).toHaveTextContent(`Shipping: $250`);

  expect(taxesText).toHaveTextContent(`Taxes: $47.25`);

  expect(orderTotalText).toHaveTextContent(`Order total: $362.25`);
});
