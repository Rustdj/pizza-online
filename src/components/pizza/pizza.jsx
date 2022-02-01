import React from "react";
import Header from "../content/header/header";
import Spoiler from "../content/spoiler/spoiler";
import Footer from "../content/footer/footer";
import classes from "./pizza.module.css";
import PizzaBox from "./pizzaBox";
import logo from "../../img/logo/pizza.svg";

const Pizza = () => {
  return (
    <div>
      <Header />
      <div className={classes.name}>
        <img src={logo} alt="SushiLogo" />
        <h2>Пицца</h2>
      </div>
      <div className={classes.items}>
        <div className={classes.item}>
          <PizzaBox
            image="https://c.ollis.ru/1605700681747-285x198.jpeg"
            title="Пицца Прошутто котто 450 гр"
            text="1050 грамм, 30 кусочков"
            price="700 ₽"
            button="Хочу!"
          />
        </div>
        <div className={classes.item}>
          <PizzaBox
            image="https://c.ollis.ru/1640359115196-285x198.jpeg"
            title="Пицца с цукини и креветками 430 гр"
            text="1050 грамм, 30 кусочков"
            price="600 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <PizzaBox
            image="https://c.ollis.ru/1615978213119-285x198.jpeg"
            title="Пицца с белыми грибами 500 гр"
            text="950 грамм, 30 кусочков"
            price="750 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <PizzaBox
            image="https://c.ollis.ru/1605087279890-285x198.jpeg"
            title="Пицца Новогодняя с лососем и красной икрой 500 гр"
            text="950 грамм, 30 кусочков"
            price="900 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <PizzaBox
            image="https://c.ollis.ru/1621591622503-285x198.jpeg"
            title="Пицца Кон Формаджио 355 гр"
            text="950 грамм, 30 кусочков"
            price="750 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <PizzaBox
            image="https://c.ollis.ru/1615533529669-285x198.jpeg"
            title="Пицца Мясная 470 гр"
            text="950 грамм, 30 кусочков"
            price="1050 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <PizzaBox
            image="https://c.ollis.ru/1641905333540-285x198.jpeg"
            title="Пицца с ветчиной и рукколой 385 гр"
            text="850 грамм, 30 кусочков"
            price="550 ₽"
            button="Хочу!"
          />
        </div>
      </div>

      <Spoiler />
      <Footer />
    </div>
  );
};

export default Pizza;
