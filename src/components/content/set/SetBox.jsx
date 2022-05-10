import React from "react";
import "./set.css";
import logoSet from "../../../img/logo/seti.svg";
import { setData } from "./SetData";
import Set from "./set.jsx";

const SetBox = () => {
  const setDataBase = setData.map((elem) => {
    return (
      <div key={elem.id} className="setItem">
        <Set
          image={elem.image}
          title={elem.title}
          text={elem.text}
          price={elem.price}
          button={elem.button}
        />
      </div>
    );
  });
  return (
    <div className="setWrapper">
      <div className="setName">
        <img src={logoSet} alt="set" />
        <h2>Сеты</h2>
      </div>
        <div className="setItems">
          {setDataBase}
        </div>
    </div>
  );
};

export default SetBox;
