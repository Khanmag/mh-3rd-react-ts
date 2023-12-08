import React, { useState } from 'react';
import AddPoductForm from './AddPoductForm/AddPoductForm';
import ProductsList from './ProductsList';
import { ProductItemType, getProducts } from '../../api/products';
import ProductsFilter from './ProductsFilter/ProductsFilter';

function PoductsPage() {
  const [productsList, setProductsList] = useState<ProductItemType[]>(getProducts())
  const [filtredList, setFiltredList] = useState<ProductItemType[]>(productsList)

  const filtredByPrice = (price:number) => {
    setFiltredList(productsList.filter( item => item.price <= price))
  }
  const addProduct = (obj:Omit<ProductItemType, "id">) => {
    const id = +(Math.random() * 1000).toFixed()
    // setProductsList([...productsList, {...obj, id}])
    setProductsList( (prevState) => {
      return [...prevState, {...obj, id}]
    })
  }
  const decrementProduct = (id:number) => {
    setProductsList( (prevState) => {
      return prevState.map( item => {
        if (item.id === id) return {...item, count: item.count - 1}
        return item
      }).filter( item => item.count)
    } )
  }
  return (
    <div>
      <AddPoductForm addProduct={addProduct}/>
      <ProductsFilter filtredByPrice={filtredByPrice}/>
      <ProductsList products={productsList} decrementProduct={decrementProduct}/>
    </div>
  );
}

export default PoductsPage;
