import React from "react";
import { Link } from "react-router-dom";
import './set.css';

export default function Set({ image, title, text, price, button }) {
  return (
    <>
      <img src={image} alt="set" />
      <h4>{title}</h4>
      <p>{text}</p>
      <div className="summ">
        <div>{price}</div>
        <Link to="/cart"><button>{button}</button></Link>
        
      </div>
    </>
  );
}
