import React from "react";
import s from "./ProductItem.module.css";
type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  count: number;
  decrementProduct: (id: number) => void;
}
const ProductItem = ({id, name, price, count, decrementProduct }:ProductItemProps) => {
  //   const { name, price, count } = props;

  // const decrementCount = () => {
  //   if (currentCount) {
  //     setCurrentCount(currentCount - 1); // можно лучше
  //   } else {
  //     alert("Товар закончился");
  //   }
  // };
  return (
    <div className={s.container}>
      <h4>{name}</h4>
      <p>{price} руб</p>
      <p>Осталось: {count}</p>
      <button onClick={() => {decrementProduct(id)}}></button>
    </div>
  );
};
export default ProductItem;
