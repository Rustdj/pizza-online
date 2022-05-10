import classes from "../pizza/pizza.module.css";
import { useDispatch } from "react-redux"; 
import React from "react";
import { setItemsInCart } from "../../redux/cart/reducer";

const SaladsList = ({ image, title, text, price, button }) => {
  const item = {title, text, price, button, image}
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setItemsInCart(item))
  }
  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <img src={image} alt="roll" />
            <h4>{title}</h4>
            <p>{text}</p>
            <div className={classes.buttons}>
              <div>{price}</div>
              <button onClick={handleClick}>{button}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaladsList;
