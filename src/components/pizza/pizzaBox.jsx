import React, { useState } from "react";
import classes from "./pizza.module.css";

const PizzaBox = ({ title, text, price, button, image }) => {
  const [state, setState] = useState();

  
  return (
    <>
      <img src={image} alt="sushi1" />
      <h4>{title}</h4>
      <p>{text}</p>
      <div className={classes.buttons}>
        <div>{price}</div>
        <button>{button}</button>
      </div>
    </>
  );
};

export default PizzaBox;
