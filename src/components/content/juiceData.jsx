import React from 'react';
import './set/set.css';
import juiceLogo from '../../img/logo/juice.svg';
import j1 from '../../img/juice/j1.jpeg';
import j2 from '../../img/juice/j2.jpeg';
import j3 from '../../img/juice/j3.jpeg';
import j4 from '../../img/juice/j4.jpeg';
import j5 from '../../img/juice/j5.jpeg';
import j6 from '../../img/juice/j6.jpeg';
import j7 from '../../img/juice/j7.jpeg';
import j8 from '../../img/juice/j8.jpeg';
import j9 from '../../img/juice/j9.jpeg';
import j10 from '../../img/juice/j10.jpeg';




const JuiceData = () => {
    return (
        <div className="setWrapper">
                <div className='setName'>
                        <img src={juiceLogo} alt='juiceLogo'/>
                        <h2>Напитки</h2>
                </div>
                <div className='setItems'>
                    <div className='setItem'>
                        <img src={j1} alt='j1'/>
                        <h4>Суши запеченные с лососем, 2 шт. 86 гр</h4>
                        <p>Лосось, Спайси соус, сырный соус..</p>
                        <div className='summ'>
                            <div>255 ₽</div>
                            <button>Хочу!</button>
                        </div>
                </div>
                <div className='setItem'>
                    <img src={j2} alt='j2'/>
                    <h4>Суши с угрём, 2шт. 56 гр</h4>
                    <p>Угорь, рис, нори, соус унаги, кунжут</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={j3} alt='j3'/>
                    <h4>Суши с лососем, 2 шт.</h4>
                    <p>Лосось, японский рис</p>
                    <div className='summ'>
                        <div>235 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={j4} alt='j4'/>
                    <h4>Суши с чукой, 2шт. 56 гр</h4>
                    <p>Чука, рис, нори</p>
                    <div className='summ'>
                        <div>225 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={j5} alt='j5'/>
                    <h4>Суши с тигровой креветкой, 2шт. 62 гр</h4>
                    <p>Креветка, рис</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={j6} alt='j6'/>
                    <h4>Суши запеченные с крабом и креветкой, 2 шт.</h4>
                    <p>Смесь со снежным крабом и тигровыми креветками</p>
                    <div className='summ'>
                        <div>225 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={j7} alt='j7'/>
                    <h4>Суши с угрём, 2шт. 56 гр</h4>
                    <p>Угорь, рис, нори, соус унаги, кунжут</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={j8} alt='j8'/>
                    <h4>Суши с лососем, 2 шт. 68 гр</h4>
                    <p>Лосось, японский рис</p>
                    <div className='summ'>
                        <div>235 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={j9} alt='j9'/>
                    <h4>Суши с тунцом, 2шт. 56 гр</h4>
                    <p>Тунец, рис</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={j10} alt='j10'/>
                    <h4>Суши запеченные с угрем, 2 шт. 86 гр</h4>
                    <p>Угорь, Спайси соус, сырный соус, Унаги соус, кунжут</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JuiceData
