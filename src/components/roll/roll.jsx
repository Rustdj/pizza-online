import React from "react";
import Header from "../content/header/header";
import Spoiler from "../content/spoiler/spoiler";
import Footer from "../content/footer/footer";
import classes from "../pizza/pizza.module.css";
import RollBox from "./rollBox";
import roll from "../../img/logo/roll.svg";
import { rollData } from "./rollData";

const Roll = () => {
  const rollDataBase = rollData.map((elem) => {
    return(
      <div className={classes.item}>
          <RollBox
            image={elem.image}
            title={elem.title}
            text={elem.text}
            price={elem.price}
            button={elem.button}
          />
        </div>
    )
  })
  return (
    <div>
      <Header />
      <div className={classes.name}>
        <img src={roll} alt="SushiLogo" />
        <h2>Rolls</h2>
      </div>
      <div className={classes.items}>
          {rollDataBase}
      </div>
      <Spoiler />
      <Footer />
    </div>
  );
};

export default Roll;
