import React from "react";
import classes from "../pizza/pizza.module.css";

export default function SoupBox({ image, title, text, price, button }) {
  return (
    <div>
      <img src={image} alt="roll" />
      <h4>{title}</h4>
      <p>{text}</p>
      <div className={classes.buttons}>
        <div>{price}</div>
        <button>{button}</button>
      </div>
    </div>
  );
}
