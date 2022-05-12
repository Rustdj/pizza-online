import { useDispatch } from "react-redux"; 
import React from "react";
import { setItemsInCart } from "../../redux/cart/reducer";
import { setCurrentItem } from "../../redux/product-cart/reducer";
import { useNavigate } from "react-router-dom";
import classes from "../pizza/pizza.module.css";

const SaladsList = ({ image, title, text, price, button }) => {
  const item = {title, text, price, button, image}
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setItemsInCart(item))
  }

  const history = useNavigate();
  const onDispatch = useDispatch();

  const toggleClick = () => {
    onDispatch(setCurrentItem(item));
    history(`/app${item.title}`);
  };
  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <img src={image} alt="roll" onClick={toggleClick}/>
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
