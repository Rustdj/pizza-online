import React from "react";
import Footer from "../content/footer/footer";
import Header from "../content/header/header";
import Spoiler from "../content/spoiler/spoiler";
import SaladsList from "./saladsList";
import saladLogo from "../../img/logo/salad.svg";
import c from "./salad.module.css";
import { saladsData } from "./saladsData";

const Salads = () => {
  const saladsDataBase = saladsData.map((elem) => {
    return(
      <div className={c.item}>
          <SaladsList
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
      <div className={c.name}>
        <img src={saladLogo} alt="saladLogo" />
        <h2>Салаты</h2>
      </div>
      <div className={c.items}>
        {saladsDataBase}
      </div>

      <Spoiler />
      <Footer />
    </div>
  );
};

export default Salads;
