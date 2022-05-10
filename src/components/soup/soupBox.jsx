import React from "react";
import { useDispatch } from "react-redux";
import { setItemsInCart } from "../../redux/cart/reducer";
import classes from "../pizza/pizza.module.css";

export default function SoupBox({ image, title, text, price, button }) {
  const item = { title, text, price, button, image };
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemsInCart(item));
  };
  return (
    <div>
      <img src={image} alt="roll" />
      <h4>{title}</h4>
      <p>{text}</p>
      <div className={classes.buttons}>
        <div>{price}</div>
        <button onClick={ handleClick }>{button}</button>
      </div>
    </div>
  );
}
