import React from "react";
import Footer from "../content/footer/footer";
import Header from "../content/header/header";
import Spoiler from "../content/spoiler/spoiler";
import SaladsList from "./saladsList";
import saladLogo from "../../img/logo/salad.svg";
import c from "./salad.module.css";

const Salads = () => {
  return (
    <div>
      <Header />
      <div className={c.name}>
        <img src={saladLogo} alt="saladLogo" />
        <h2>Салаты</h2>
      </div>
      <div className={c.items}>
        <div className={c.item}>
          <SaladsList
            image={require("../../img/salads/s1.jpeg")}
            title="Салат с чечевицей и адыгейским сыром 240 гр"
            text="Чечевица зеленая, помидоры, сыр адыгейский.."
            price="390 ₽"
            button="Хочу!"
          />
        </div>
        <div className={c.item}>
          <SaladsList
            image={require("../../img/salads/s2.jpeg")}
            title="Салат с печеной свеклой и сливочным сыром 200 гр"
            text="Свекла, салат айсберг, перец чили.."
            price="390 ₽"
            button="Хочу!"
          />
        </div>
        <div className={c.item}>
          <SaladsList
            image={require("../../img/salads/s3.jpeg")}
            title="Салат с телятиной и авокадо 250 гр"
            text="Говядина, авокадо, фасоль стручковая, грибы вешенки.."
            price="390 ₽"
            button="Хочу!"
          />
        </div>
        <div className={c.item}>
          <SaladsList
            image={require("../../img/salads/s4.jpeg")}
            title="Оливье 200 гр"
            text="Морковь, картофель, сыр тофу, соленые огурцы.."
            price="390 ₽"
            button="Хочу!"
          />
        </div>
        <div className={c.item}>
          <SaladsList
            image={require("../../img/salads/s5.jpeg")}
            title="Паста из цукини с соусом из вяленых томатов 160 гр"
            text="Цукини, томаты вяленые, финики, лук красный.."
            price="390 ₽"
            button="Хочу!"
          />
        </div>
        <div className={c.item}>
          <SaladsList
            image={require("../../img/salads/s6.jpeg")}
            title="Овощной салат с соусом кешью и фаршем из вяленых томатов 170 гр"
            text="Салат айсберг, перец болгарский, капуста квашенная, морковь.."
            price="390 ₽"
            button="Хочу!"
          />
        </div>
        <div className={c.item}>
          <SaladsList
            image={require("../../img/salads/s7.jpeg")}
            title="Салат с острым тунцом и авокадо 200 гр"
            text="Тунец, авокадо, тобико, соус шрираче, майонез.."
            price="390 ₽"
            button="Хочу!"
          />
        </div>
        <div className={c.item}>
          <SaladsList
            image={require("../../img/salads/s8.jpeg")}
            title="Салат с курицей терияки 225 гр"
            text="Куриное филе в соусе Терияки, свежие помидоры, свежий огурец.."
            price="390 ₽"
            button="Хочу!"
          />
        </div>
        <div className={c.item}>
          <SaladsList
            image={require("../../img/salads/s9.jpeg")}
            title="Цезарь салат 205 гр"
            text="Копченая куриная грудка, сыр Пармезан, свежие помидоры.."
            price="390 ₽"
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
