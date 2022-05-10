import React from "react";
import classes from "./pizza.module.css";
import { useDispatch } from 'react-redux';
import { setItemsInCart } from "../../redux/cart/reducer";

const PizzaBox = ({ title, text, price, button, image }) => {
const item = {title, text, price, button, image}
const dispatch = useDispatch();
const handleClick = () => {
  dispatch(setItemsInCart(item))
}
  
  return (
    <>
      <img src={image} alt="sushi1" />
      <h4>{title}</h4>
      <p>{text}</p>
      <div className={classes.buttons}>
        <div>{price}</div>
        <button onClick={handleClick}>{button}</button>
      </div>
    </>
  );
};

export default PizzaBox;
