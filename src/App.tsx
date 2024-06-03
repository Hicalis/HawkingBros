import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Menu } from "antd";
import HeaderShop from "./Header/Header";
import Cart from "./Cart/Cart";

function App() {
  return (
    <Layout className="App">
      <HeaderShop />
      <Cart />
    </Layout>
  );
}

export default App;
