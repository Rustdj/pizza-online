import React from "react";
import Header from "../content/header/header";
import Spoiler from "../content/spoiler/spoiler";
import Footer from "../content/footer/footer";
import classes from "../pizza/pizza.module.css";
import RollBox from "./rollBox";
import roll from "../../img/logo/roll.svg";

const Roll = () => {
  return (
    <div>
      <Header />
      <div className={classes.name}>
        <img src={roll} alt="SushiLogo" />
        <h2>Пицца</h2>
      </div>
      <div className={classes.items}>
        <div className={classes.item}>
          <RollBox
            image={require("../../img/roll/roll2.jpeg")}
            title="Ролл новогодний с креветкой 235гр"
            text="Свежий лосось, креветки.."
            price="640 ₽"
            button="Хочу!"
          />
        </div>
        <div className={classes.item}>
          <RollBox
            image={require("../../img/roll/roll3.jpeg")}
            title="Удон с овощами и фучжу 280 гр"
            text="Лапша рамен, спаржа, морковь.."
            price="600 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <RollBox
            image={require("../../img/roll/roll4.jpeg")}
            title="Королевский ролл с тунцом, креветкой и соусом манго 255 гр"
            text="Японский рис, водоросли нори, тунец.."
            price="750 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <RollBox
            image={require("../../img/roll/roll5.jpeg")}
            title="Ролл Филадельфия классик 260 гр"
            text="Свежий лосось, японский рис, водоросли нори.."
            price="900 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <RollBox
            image={require("../../img/roll/roll6.jpeg")}
            title="Суши запеченные с лососем, 2 шт. 86 гр"
            text="Лосось, Спайси соус, сырный соус.."
            price="650 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <RollBox
            image={require("../../img/roll/roll7.jpeg")}
            title="Ролл с креветкой темпура 245 гр"
            text="Японский рис, водоросли нори, креветки, омлет.."
            price="1250 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <RollBox
            image={require("../../img/roll/roll8.jpeg")}
            title="Суши с угрём, 2шт. 56 гр"
            text="Угорь, рис, нори, соус унаги, кунжут"
            price="750 ₽"
            button="Хочу!"
          />
        </div>
        <div className={classes.item}>
          <RollBox
            image={require("../../img/roll/roll9.jpeg")}
            title="Суши с лососем, 2 шт. 68 гр"
            text="Лосось, японский рис"
            price="850 ₽"
            button="Хочу!"
          />
        </div>
        <div className={classes.item}>
          <RollBox
            image={require("../../img/roll/roll10.jpeg")}
            title="Императорский ролл с лососем, креветкой и соусом манго 255 гр"
            text="Японский рис, водоросли нори, лосось.."
            price="950 ₽"
            button="Хочу!"
          />
        </div>
        <div className={classes.item}>
          <RollBox
            image={require("../../img/roll/roll11.jpeg")}
            title="Ролл Филадельфия XL 270 гр"
            text="Свежий лосось, японский рис, водоросли нори.."
            price="790 ₽"
            button="Хочу!"
          />
        </div>
      </div>

      <Spoiler />
      <Footer />
    </div>
  );
};

export default Roll;
