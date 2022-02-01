import React from "react";
import Header from "../content/header/header";
import Spoiler from "../content/spoiler/spoiler";
import Footer from "../content/footer/footer";
import SaladsLogo from '../../img/logo/salad.svg';
import classes from '../pizza/pizza.module.css';
import SaladBox from "./saladBox";


const Salads = () => {
  return (
    <div>
      <Header />
      <div className={classes.name}>
        <img src={SaladsLogo} alt="SaladsLogo" />
        <h2>Пицца</h2>
      </div>
      <div className={classes.items}>
        <div className={classes.item}>
          <SaladBox
            image={require("../../img/salads/s1.jpeg")}
            title="Ролл новогодний с креветкой 235гр"
            text="Свежий лосось, креветки.."
            price="640 ₽"
            button="Хочу!"
          />
        </div>
        <div className={classes.item}>
          <SaladBox
            image={require("../../img/salads/s2.jpeg")}
            title="Удон с овощами и фучжу 280 гр"
            text="Лапша рамен, спаржа, морковь.."
            price="600 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <SaladBox
            image={require("../../img/salads/s3.jpeg")}
            title="Королевский ролл с тунцом, креветкой и соусом манго 255 гр"
            text="Японский рис, водоросли нори, тунец.."
            price="750 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <SaladBox
            image={require("../../img/salads/s4.jpeg")}
            title="Ролл Филадельфия классик 260 гр"
            text="Свежий лосось, японский рис, водоросли нори.."
            price="900 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <SaladBox
            image={require("../../img/salads/s5.jpeg")}
            title="Суши запеченные с лососем, 2 шт. 86 гр"
            text="Лосось, Спайси соус, сырный соус.."
            price="650 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <SaladBox
            image={require("../../img/salads/s6.jpeg")}
            title="Ролл с креветкой темпура 245 гр"
            text="Японский рис, водоросли нори, креветки, омлет.."
            price="1250 ₽"
            button="Хочу!"
          />
        </div>

        <div className={classes.item}>
          <SaladBox
            image={require("../../img/salads/s7.jpeg")}
            title="Суши с угрём, 2шт. 56 гр"
            text="Угорь, рис, нори, соус унаги, кунжут"
            price="750 ₽"
            button="Хочу!"
          />
        </div>
        <div className={classes.item}>
          <SaladBox
            image={require("../../img/salads/s8.jpeg")}
            title="Суши с лососем, 2 шт. 68 гр"
            text="Лосось, японский рис"
            price="850 ₽"
            button="Хочу!"
          />
        </div>
        <div className={classes.item}>
          <SaladBox
            image={require("../../img/salads/s9.jpeg")}
            title="Императорский ролл с лососем, креветкой и соусом манго 255 гр"
            text="Японский рис, водоросли нори, лосось.."
            price="950 ₽"
            button="Хочу!"
          />
        </div>
        <div className={classes.item}>
          <SaladBox
            image={require("../../img/salads/s10.jpeg")}
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

export default Salads;
