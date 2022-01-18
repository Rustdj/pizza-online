import React from 'react'
import './set/set.css';

import SaladsLogo from '../../img/logo/salad.svg';
import s1 from '../../img/salads/s1.jpeg';
import s2 from '../../img/salads/s2.jpeg';
import s3 from '../../img/salads/s3.jpeg';
import s4 from '../../img/salads/s4.jpeg';
import s5 from '../../img/salads/s5.jpeg';
import s6 from '../../img/salads/s6.jpeg';
import s7 from '../../img/salads/s7.jpeg';
import s8 from '../../img/salads/s8.jpeg';
import s9 from '../../img/salads/s9.jpeg';
import s10 from '../../img/salads/s10.jpeg';
import s11 from '../../img/salads/s11.jpeg';
import s12 from '../../img/salads/s12.jpeg';


const SaladsData = () => {
    return (
        <div className="setWrapper">
            <div className='setName'>
                    <img src={SaladsLogo} alt='SaladsLogo'/>
                    <h2>Салаты</h2>
            </div>
                <div className='setItems'>
                    <div className='setItem'>
                        <img src={s1} alt='s1'/>
                        <h4>Суши запеченные с лососем, 2 шт. 86 гр</h4>
                        <p>Лосось, Спайси соус, сырный соус..</p>
                        <div className='summ'>
                            <div>255 ₽</div>
                            <button>Хочу!</button>
                        </div>
                </div>
                <div className='setItem'>
                    <img src={s2} alt='s2'/>
                    <h4>Суши с угрём, 2шт. 56 гр</h4>
                    <p>Угорь, рис, нори, соус унаги, кунжут</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={s3} alt='s3'/>
                    <h4>Суши с лососем, 2 шт.</h4>
                    <p>Лосось, японский рис</p>
                    <div className='summ'>
                        <div>235 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={s4} alt='s4'/>
                    <h4>Суши с чукой, 2шт. 56 гр</h4>
                    <p>Чука, рис, нори</p>
                    <div className='summ'>
                        <div>225 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={s5} alt='s5'/>
                    <h4>Суши с тигровой креветкой, 2шт. 62 гр</h4>
                    <p>Креветка, рис</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={s6} alt='s6'/>
                    <h4>Суши запеченные с крабом и креветкой, 2 шт.</h4>
                    <p>Смесь со снежным крабом и тигровыми креветками</p>
                    <div className='summ'>
                        <div>225 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={s7} alt='s7'/>
                    <h4>Суши с угрём, 2шт. 56 гр</h4>
                    <p>Угорь, рис, нори, соус унаги, кунжут</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={s8} alt='s8'/>
                    <h4>Суши с лососем, 2 шт. 68 гр</h4>
                    <p>Лосось, японский рис</p>
                    <div className='summ'>
                        <div>235 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={s9} alt='s9'/>
                    <h4>Суши с тунцом, 2шт. 56 гр</h4>
                    <p>Тунец, рис</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={s10} alt='s10'/>
                    <h4>Суши запеченные с угрем, 2 шт. 86 гр</h4>
                    <p>Угорь, Спайси соус, сырный соус, Унаги соус, кунжут</p>
                    <div className='summ'>
                        <div>255 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={s11} alt='s11'/>
                    <h4>Суши острые с крабом и креветкой, 2 шт. 80 гр</h4>
                    <p>Смесь со снежным крабом и тигровыми креветками</p>
                    <div className='summ'>
                        <div>229 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={s12} alt='s12'/>
                    <h4>Суши острые с лососем + Суши острые с крабом и креветкой80 гр</h4>
                    <p>Суши острые с лососем + Суши острые..</p>
                    <div className='summ'>
                        <div>259 ₽</div>
                        <button>Хочу!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaladsData
