import React from "react";
import { useDispatch } from "react-redux";
import { setItemsInCart } from "../../../redux/cart/reducer";
import { setCurrentItem } from "../../../redux/product-cart/reducer";
import { useNavigate } from "react-router-dom";
import "./set.css";

export default function Set({ image, title, text, price, button }) {
  const item = { image, title, text, price, button };
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemsInCart(item));
  };

  const history = useNavigate();
  const onDispatch = useDispatch();

  const toggleClick = () => {
    onDispatch(setCurrentItem(item));
    history(`/app${item.title}`);
  };
  return (
    <>
      <img src={image} alt="set" onClick={toggleClick}/>
      <h4>{title}</h4>
      <p>{text}</p>
      <div className="summ">
        <div>{price}</div>
        <button onClick={handleClick}>{button}</button>
      </div>
    </>
  );
}
