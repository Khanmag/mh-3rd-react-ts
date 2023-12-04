import React from "react";
import styles from "./App.module.css";
import ProductsList from "./components/Products/ProductsList";

function App() {

  return (
    <div>
      <h1 className={styles.title}>Hello React</h1>
      <p>v 1.07</p>
      <ProductsList />
    </div>
  );
}

export default App;


