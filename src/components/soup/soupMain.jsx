import React from "react";
import "../content/set/set.css";
import soupLogo from "../../img/logo/soup.svg";
import {soupData} from "./soupData.js";
import SoupBox from "./soupBox";

const SoupMain = () => {
  const soupDataBase = soupData.map((elem) => {
    return (
      <div className="setItem">
        <SoupBox
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
        <img src={soupLogo} alt="soupLogo" />
        <h2>Супы</h2>
      </div>
      <div className="setItems">
        {soupDataBase}
      </div>
    </div>
  );
};

export default SoupMain;
