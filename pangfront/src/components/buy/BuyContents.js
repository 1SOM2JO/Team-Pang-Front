import React from "react";
import BuyItem from "./BuyItem";
const BuyContents = ({ product }) => {
  console.log(product);
  return (
    <>
      {product.map((product) => (
        <BuyItem product={product} />
      ))}
    </>
  );
};

export default BuyContents;
