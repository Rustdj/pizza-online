import React from "react";
import "../content/set/set.css";
import SushiLogo from "../../img/logo/sushi.svg";
import { SushiData } from "./sushiData";
import SushiBox from './sushiBox';

const SushiMain = () => {
  const sushiDataBase = SushiData.map((elem) => {
    return (
      <div className="setItem">
          <SushiBox 
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
        <img src={SushiLogo} alt="SushiLogo" />
        <h2>Суши</h2>
      </div>
      <div className="setItems">
          {sushiDataBase}
      </div>
    </div>
  );
};

export default SushiMain;
