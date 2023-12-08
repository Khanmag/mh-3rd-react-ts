import React, { useState } from "react";
import s from './AddPoductForm.module.css'
import { ProductItemType } from "../../../api/products";

type AddPoductFormProps = {
  addProduct: (obj:Omit<ProductItemType, "id">) => void
}
const AddPoductForm = ({addProduct}:AddPoductFormProps) => {
  const [prodName, setProductName] = useState("");
  const [prodPrice, setProductPrice] = useState("");
  const [prodCount, setProductCount] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // console.dir(event.target);
    // create new product
    addProduct({
      name: prodName,
      price: +prodPrice,
      count: +prodCount,
    })
    setProductName("")
    setProductPrice("")
    setProductCount("")
  };
  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <label>
        <span>Название</span>
        <input
          type="text"
          name="name"
          value={prodName}
          placeholder="Сосисочка"
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <label>
        <span>Цена</span>
        <input
          type="number"
          min={10}
          step={10}
          name="price"
          value={prodPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </label>
      <label>
        <span>Количество</span>
        <input
          type="number"
          name="count"
          value={prodCount}
          onChange={(e) => setProductCount(e.target.value)}
        />
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddPoductForm;
