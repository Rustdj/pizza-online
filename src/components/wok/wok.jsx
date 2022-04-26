import React from "react";
import '../content/set/set.css';

const Wok = ({ image, title, text, price, button }) => {
  return (
    <>
      <img src={image} alt="set" />
      <h4>{title}</h4>
      <p>{text}</p>
      <div className="summ">
        <div>{price}</div>
        <button>{button}</button>
      </div>
    </>
  );
};

export default Wok;
