import React from 'react';
import classes from '../pizza/pizza.module.css';

export default function SushiBox({ title, text, price, button, image }) {
  return (
    <>
        <img src={image} alt="sushi" />
          <h4>{title}</h4>
          <p>{text}</p>
          <div className={classes.buttons}>
            <div>{price}</div>
            <button>{button}</button>
          </div>
    </>
  )
}
