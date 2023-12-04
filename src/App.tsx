import React from "react";
import { UserItem } from "./UserItem";
// import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>v 1.07</p>
      <ul>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
      <div>
        <h2>Users</h2>
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    </div>
  );
}

export default App;

export const ListItem = () => {
  const randNum = (Math.random() * 1000).toFixed(0);
  return <li>{randNum}</li>;
};
