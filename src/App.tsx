import React from "react";
import styles from "./App.module.css";
import PoductsPage from "./components/Products/PoductsPage";

function App() {

  return (
    <div>
      <h1 className={styles.title}>Hello React</h1>
      <p>v 1.07</p>
      <PoductsPage />
    </div>
  );
}

export default App;


