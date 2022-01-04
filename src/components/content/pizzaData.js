import './set/set.css';
import fish from '../../img/pizza/fishPizza.svg';
import formaggio from '../../img/pizza/formaggio.svg';
import meatPizza from '../../img/pizza/myasnaya.svg';
import rucola from '../../img/pizza/rukola.svg';
import diablo from '../../img/pizza/diablo.svg';
import toscana from '../../img/pizza/toskana.svg';
import hawai from '../../img/pizza/gawai.svg';
import petrovskaya from '../../img/pizza/petrovskaya.svg';
import meatKari from '../../img/pizza/myasnayaKarri.svg';
import logoPizza from '../../img/logo/pizza.svg';


import React from 'react'

const PizzaData = () => {
    return (
        <div className='setWrapper'>
            <div className='setName'>
                    <img src={logoPizza} alt='pizza'/>
                    <h2>Пицца</h2>
                </div>
                <div className='setItems'>
                    <div className='setItem'>
                        <img src={formaggio} alt=''/>
                        <h4>Пицца Новогодняя с лососем и красной икрой</h4>
                        <p>Тесто, соус сливочный</p>
                        <div className='summ'>
                        <div>1500 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={meatPizza} alt=''/>
                    <h4>Пицца Кон Формаджио</h4>
                    <p>Тесто, сливочный соус</p>
                    <div className='summ'>
                        <div>1499 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={diablo} alt=''/>
                    <h4>Пицца Мясная</h4>
                    <p>Тесто, соус Наполи</p>
                    <div className='summ'>
                        <div>1500 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={rucola} alt=''/>
                    <h4>Пицца с ветчиной и рукколой</h4>
                    <p>Тесто, томатный соус</p>
                    <div className='summ'>
                        <div>1559 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={toscana} alt=''/>
                    <h4>Пицца Дьябло</h4>
                    <p>Тесто, соус Наполи</p>
                    <div className='summ'>
                        <div>1519 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={hawai} alt=''/>
                    <h4>Пицца Гавайская</h4>
                    <p>Тесто, соус Оллис </p>
                    <div className='summ'>
                        <div>1469 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={petrovskaya} alt=''/>
                    <h4>Пицца Петровская</h4>
                    <p>Тесто, соус Оллис</p>
                    <div className='summ'>
                        <div>1559 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={meatKari} alt=''/>
                    <h4>Пицца Мясная карри</h4>
                    <p>Тесто, соус Оллис</p>
                    <div className='summ'>
                        <div>1479 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={fish} alt=''/>
                    <h4>Пицца Новогодняя с лососем и красной икрой</h4>
                    <p>Тесто, соус сливочный</p>
                    <div className='summ'>
                        <div>1499 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaData
