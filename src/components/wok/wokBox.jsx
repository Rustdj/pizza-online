import "../content/set/set.css";
import wokLogo from "../../img/logo/wok.svg";

import React from "react";
import Wok from "./wok";
import { wokData } from "./wokData";

const WokData = () => {
  const wokDataBase = wokData.map((elem) => {
    return (
      <div className="setItem">
        <Wok
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
    <>
      
      <div className="setWrapper">
        <div className="setName">
          <img src={wokLogo} alt="wokLogo" />
          <h2>WOK</h2>
        </div>
        <div className="setItems">
            {wokDataBase}
        </div>
        
      </div>
    </>
  );
};

export default WokData;
