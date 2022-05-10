import React from "react";
import { useDispatch } from "react-redux";
import { setItemsInCart } from "../../redux/cart/reducer";
import "../content/set/set.css";

const Wok = ({ image, title, text, price, button }) => {
  const item = { title, text, price, button, image };
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
};

export default Wok;
