import React from "react";

const FormattedPrice = ({ value }) => {
  const formattedPrice = value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return <span>{formattedPrice}</span>;
};

export default FormattedPrice;
