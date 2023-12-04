import React, { useState } from "react";
import { ProductItemType } from "../../api/products";
import s from "./ProductItem.module.css";

const ProductItem = ({ name, price, count }: Omit<ProductItemType, "id">) => {
  //   const { name, price, count } = props;
  const [currentCount, setCurrentCount] = useState(count);

  const decrementCount = () => {
    if (currentCount) {
      setCurrentCount(currentCount - 1); // можно лучше
    } else {
      alert("Товар закончился");
    }
  };
  return (
    <div className={s.container}>
      <h4>{name}</h4>
      <p>{price} руб</p>
      <p>Осталось: {currentCount}</p>
      <button onClick={decrementCount}></button>
    </div>
  );
};
export default ProductItem;
