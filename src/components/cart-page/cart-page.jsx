import React from "react";
import { useSelector } from "react-redux";
import classes from "./cart-page.module.css";

export const CartPage = () => {
  const prod = useSelector((state) => state.product.curretProduct);

  if (!prod) return null;
  return (
    <div className={classes.cart}>
      <h1 className={classes.title}>{prod.title}</h1>
      <div className={classes.content}>
          <div className={classes.left}>
              <img src={prod.image} alt="img" />
          </div>
          <div className={classes.right}>
              {prod.text}
          </div>
      </div>
    </div>
  );
};
