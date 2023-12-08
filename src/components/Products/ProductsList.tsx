import React from "react";
import ProductItem from "./ProductItem";
import { ProductItemType } from "../../api/products";

type ProductsListProps = {
  products: ProductItemType[];
  decrementProduct: (id: number) => void;
};
const ProductsList = ({ products, decrementProduct }: ProductsListProps) => {
  // const products = getProducts();
  return (
    <div>
      {products.map((item) => {
        return (
          <ProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            count={item.count}
            decrementProduct={decrementProduct}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
