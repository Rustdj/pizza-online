import React from "react";
import Header from "../content/header/header";
import Spoiler from "../content/spoiler/spoiler";
import Footer from "../content/footer/footer";
import classes from "./pizza.module.css";
import PizzaBox from "./pizzaBox";
import logo from "../../img/logo/pizza.svg";
import { PizzaData } from "./pizzaData";
import { CartPage } from "../cart-page/cart-page";


const Pizza = () => {
  const dataBase = PizzaData.map((elem) => {
    return (
      <div key={elem.id} className={classes.item}>
        <PizzaBox
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
    <div>
      
      <Header />
      <div className={classes.name}>
        <img src={logo} alt="SushiLogo" />
        <h2>Пицца</h2>
      </div>
      <div className={classes.items}>
        {dataBase}
      </div>
      <Spoiler />
      <Footer />
    </div>
  );
};

export default Pizza;
