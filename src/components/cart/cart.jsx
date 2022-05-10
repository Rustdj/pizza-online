import React, { useState } from "react";
import Footer from "../content/footer/footer";
import Header from "../content/header/header";
import Spoiler from "../content/spoiler/spoiler";
import classes from "./cart.module.css";


export default function Cart() {
  const [count, setCount] = useState(1)
  const incCount = () => {
    if(count < 10) 
      return setCount(count + 1)
  }
  const decCount = () => {
    if(count > 0) 
      return setCount(count - 1)
  }
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.blocks}>
        <div className={classes.block}>
        <h2>Корзина</h2>
          <img src="" alt="logo" />
          <title></title> 
        </div>
        <div className={classes.block}>
          <div className={classes.counter}>
            <button onClick={decCount}>-</button>
            <div>{count}</div>
            <button onClick={incCount}>+</button>
          </div>
        </div>
      </div>
      <Spoiler />
      <Footer />
    </div>
  );
}
