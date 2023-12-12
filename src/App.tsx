import React from "react";
import styles from "./App.module.css";
import PoductsPage from "./components/Products/PoductsPage";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {

  return (
    <div>
      <h1 className={styles.title}>Hello React</h1>
      {/* <PoductsPage /> */}
      <RegisterForm />
      
    </div>
  );
}

export default App;


