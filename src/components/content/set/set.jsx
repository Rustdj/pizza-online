import React from "react";
import "./set.css";
import { useDispatch } from "react-redux";
import { setItemsInCart } from "../../../redux/cart/reducer"

export default function Set({ image, title, text, price, button }) {
  const item = { image, title, text, price, button };
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemsInCart(item));
  };
  return (
    <>
      <img src={image} alt="set" />
      <h4>{title}</h4>
      <p>{text}</p>
      <div className="summ">
        <div>{price}</div>
        <button onClick={handleClick}>{button}</button>
      </div>
    </>
  );
}
