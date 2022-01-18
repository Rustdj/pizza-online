import './set/set.css';
import React from 'react';
import roll from '../../img/logo/roll.svg';
import roll1 from '../../img/roll/roll1.jpeg';
import roll2 from '../../img/roll/roll2.jpeg';
import roll3 from '../../img/roll/roll3.jpeg';
import roll4 from '../../img/roll/roll4.jpeg';
import roll5 from '../../img/roll/roll5.jpeg';
import roll6 from '../../img/roll/roll6.jpeg';
import roll7 from '../../img/roll/roll7.jpeg';
import roll8 from '../../img/roll/roll8.jpeg';
import roll9 from '../../img/roll/roll9.jpeg';
import roll10 from '../../img/roll/roll10.jpeg';
import roll11 from '../../img/roll/roll11.jpeg';
import roll12 from '../../img/roll/roll12.jpeg';
import roll13 from '../../img/roll/roll13.jpeg';
import roll14 from '../../img/roll/roll14.jpeg';
import roll15 from '../../img/roll/roll15.jpeg';
import roll16 from '../../img/roll/roll16.jpeg';
import roll17 from '../../img/roll/roll17.jpeg';
import roll18 from '../../img/roll/roll18.jpeg';
import roll19 from '../../img/roll/roll19.jpeg';
import roll20 from '../../img/roll/roll20.jpeg';
import roll21 from '../../img/roll/roll21.jpeg';
import { NavLink } from 'react-router-dom';



const RollData = () => {
    return (
        <div className="setWrapper">
            <div className='setName'>
                    <img src={roll} alt='roll'/>
                    <h2>Роллы</h2>
            </div>
            <div className='setItems'>
                    <div className='setItem'>
                        <img src={roll1} alt='roll1'/>
                        <h4>Ролл новогодний с креветкой 235гр</h4>
                        <p>Свежий лосось, креветки..</p>
                        <div className='summ'>
                        <div>640 ₽</div>
                        <NavLink to='/cart'><button>Хочу!</button></NavLink>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll2} alt='roll2'/>
                    <h4>Удон с овощами и фучжу 280 гр</h4>
                    <p>Лапша рамен, спаржа, морковь..</p>
                    <div className='summ'>
                        <div>1499 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll3} alt='roll3'/>
                    <h4>Королевский ролл с тунцом, креветкой и соусом манго 255 гр</h4>
                    <p>Японский рис, водоросли нори, тунец..</p>
                    <div className='summ'>
                        <div>545 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll4} alt='roll4'/>
                    <h4>Ролл Филадельфия классик 260 гр</h4>
                    <p>Свежий лосось, японский рис, водоросли нори..</p>
                    <div className='summ'>
                        <div>399 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll5} alt='roll5'/>
                    <h4>Суши запеченные с лососем, 2 шт. 86 гр</h4>
                    <p>Лосось, Спайси соус, сырный соус..</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll6} alt='roll6'/>
                    <h4>Ролл с креветкой темпура 245 гр</h4>
                    <p>Японский рис, водоросли нори, креветки, омлет.. </p>
                    <div className='summ'>
                        <div>389 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll7} alt='roll7'/>
                    <h4>Суши с угрём, 2шт. 56 гр</h4>
                    <p>Угорь, рис, нори, соус унаги, кунжут</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll8} alt='roll8'/>
                    <h4>Суши с лососем, 2 шт. 68 гр</h4>
                    <p>Лосось, японский рис</p>
                    <div className='summ'>
                        <div>235 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll9} alt='roll9'/>
                    <h4>Императорский ролл с лососем, креветкой и соусом манго 255 гр</h4>
                    <p>Японский рис, водоросли нори, лосось..</p>
                    <div className='summ'>
                        <div>499 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll10} alt='roll10'/>
                    <h4>Ролл Филадельфия XL 270 гр</h4>
                    <p>Свежий лосось, японский рис, водоросли нори..</p>
                    <div className='summ'>
                        <div>499 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll11} alt='roll11'/>
                    <h4>Суши с чукой, 2шт. 56 гр</h4>
                    <p>Чука, рис, нори</p>
                    <div className='summ'>
                        <div>225 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll12} alt='roll12'/>
                    <h4>Ролл Филадельфия с угрем XL 268 гр</h4>
                    <p>Угорь, японский рис, водоросли нори..</p>
                    <div className='summ'>
                        <div>499 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll13} alt='roll13'/>
                    <h4>Ролл Veggi классический 200 гр</h4>
                    <p>Сыр сливочный, перец болгарский, вяленые томаты..</p>
                    <div className='summ'>
                        <div>290 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll14} alt='roll14'/>
                    <h4>Ролл Премиум с тунцом и соусом манго 265 гр</h4>
                    <p>Японский рис, водоросли нори, тунец..</p>
                    <div className='summ'>
                        <div>525 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll15} alt='roll15'/>
                    <h4>Ролл Фуджу в кунжуте 175 гр</h4>
                    <p>Спаржа, огурец, перец болгарский, сыр сливочный..</p>
                    <div className='summ'>
                        <div>270 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll16} alt='roll16'/>
                    <h4>Ролл с тофу и такуаном 175 гр</h4>
                    <p>Сыр тофу, такуан, кукуруза, редис, огурцы..</p>
                    <div className='summ'>
                        <div>270 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll17} alt='roll17'/>
                    <h4>Ролл с лососем и соусом кимчи 225 гр</h4>
                    <p>Японский рис, водоросли нори, лосось..</p>
                    <div className='summ'>
                        <div>379 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll18} alt='roll18'/>
                    <h4>Ролл темпура с лососем и снежным крабом 270 гр</h4>
                    <p>Японский рис, водоросли нори, лосось..</p>
                    <div className='summ'>
                        <div>489 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll19} alt='roll19'/>
                    <h4>Ролл темпура Симфония морей 230 гр</h4>
                    <p>Японский рис, водоросли нори, окунь, лосось..</p>
                    <div className='summ'>
                        <div>399 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll20} alt='roll20'/>
                    <h4>Ролл Филадельфия Дуэт 184 гр</h4>
                    <p>Свежий лосось, японский рис, водоросли нори..</p>
                    <div className='summ'>
                        <div>429 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={roll21} alt='roll21'/>
                    <h4>Ролл Филадельфия ТОП 180 гр</h4>
                    <p>Свежий лосось, японский рис, водоросли нори..</p>
                    <div className='summ'>
                        <div>359 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RollData;