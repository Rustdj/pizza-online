import React from "react";
import Footer from "../content/footer/footer";
import Header from "../content/header/header";
import Spoiler from "../content/spoiler/spoiler";
import classes from "./cart.module.css";
import CartBox from "./cartBox";

export default function Cart() {
  return (
    <>
      <Header />
      <div className={classes.name}>
        <img src="" alt="Cart" />
        <h2>Корзина</h2>
      </div>
      <CartBox />
      <Cart />
      <Spoiler />
    </>
  );
}
