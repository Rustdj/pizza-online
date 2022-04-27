import React from "react";
import classes from "../pizza/pizza.module.css";

export default function JuiceBox({ image, title, text, price, button }) {
  return (
    <>
    <img src={image} alt="juice" />
    <h4>{title}</h4>
    <p>{text}</p>
    <div className={classes.buttons}>
      <div>{price}</div>
      <button>{button}</button>
    </div>
  </>
  )
}
