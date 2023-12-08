import React, { useState } from "react";

type ProductsFilterProps = {
  filtredByPrice: (price: number) => void
}
const ProductsFilter = ({filtredByPrice}:ProductsFilterProps) => {
  const [rangeValue, setRangeValue] = useState(1000);
  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    filtredByPrice(rangeValue)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>ЦЕНА</span>
        <input
          type="range"
          min={50}
          max={1000}
          value={rangeValue}
          onChange={(e) => setRangeValue(+e.target.value)}
        />
        <span>
          от {50} до {rangeValue}
        </span>
      </label>
      <button type="submit">Фильтровать</button>
    </form>
  );
};

export default ProductsFilter;
