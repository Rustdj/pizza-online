import React from "react";
import "../content/set/set.css";
import juiceLogo from "../../img/logo/juice.svg";
import JuiceBox from "./juiceBox";
import { juiceData } from "./juiceData";


const JuiceMain = () => {
  const juiceDataBase = juiceData.map((elem) => {
    return(
        <div className="setItem">
            <JuiceBox 
                image={elem.image} 
                title={elem.title}
                text={elem.text}
                price={elem.price}
                button={elem.button}
            />
        </div>
    )
    
  });
  return (
    <div className="setWrapper">
      <div className="setName">
        <img src={juiceLogo} alt="juiceLogo" />
        <h2>Напитки</h2>
      </div>
      <div className="setItems">
        {juiceDataBase}
      </div>
    </div>
  );
};

export default JuiceMain;
