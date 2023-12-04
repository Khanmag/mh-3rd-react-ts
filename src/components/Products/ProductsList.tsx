import React from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../../api/products";

const ProductsList = () => {
  const products = getProducts();
  return (
    <div>
      {products.map((item) => {
        return (
          < ProductItem key={item.id} name={item.name} price={item.price} count={item.count} />
        );
      })}
    </div>
  );
};

export default ProductsList;
