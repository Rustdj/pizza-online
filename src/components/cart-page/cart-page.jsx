import React from "react";
import { useSelector } from "react-redux";
import Header from "../content/header/header.jsx";
import Spoiler from "../content/spoiler/spoiler.jsx";
import Footer from "../content/footer/footer.jsx";
import { Button } from '../button/button';
import classes from "./cart-page.module.css";



export const CartPage = () => {
  const prod = useSelector((state) => state.product.currentCart);

  if (!prod) return null;

  return (
    <div className={classes.cart}>
      <Header />
      <h1 className={classes.title}>{prod.title}</h1>
      <div className={classes.content}>
        <div className={classes.left}>
          <img src={prod.image} alt="img" />
        </div>
        <div className={classes.right}>
          <p>{prod.title}</p>
          <p>{prod.text}</p>
          <p>{prod.price} ₽</p>
          <Button 
            type="primary"
            onClick={() => null}
            size='m'
            children
          >
            Хочу!
          </Button>
        </div>
      </div>
      <Spoiler />
      <Footer />
    </div>
  );
};
