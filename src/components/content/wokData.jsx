import '././set/set.css';
import chick from '../../img/wok/chick.jpeg';
import fish from '../../img/wok/fish.jpeg';
import riceBeef from '../../img/wok/rice-beef.jpeg';
import riceChick from '../../img/wok/rice-chick.jpeg';
import riceFish from '../../img/wok/rice-fish.jpeg';
import sauce from '../../img/wok/sauce.jpeg';
import udonBeef from '../../img/wok/udon-beef.jpeg';
import udonChick from '../../img/wok/udon-chick.jpeg';
import udonTempe from '../../img/wok/udon-tempe.jpeg';
import udonVegetables from '../../img/wok/udon-vegetables.jpeg';
import vegetables from '../../img/wok/vegetables.jpeg';
import wokLogo from '../../img/logo/wok.svg';


import React from 'react'

const WokData = () => {
    return (
        <div className="setWrapper">
            <div className='setName'>
                    <img src={wokLogo} alt='wokLogo'/>
                    <h2>WOK</h2>
            </div>
            <div className='setItems'>
                    <div className='setItem'>
                        <img src={chick} alt='chick'/>
                        <h4>Удон с морепродуктами 380гр</h4>
                        <p>Лапша удон, коктейль из морепродуктов..</p>
                        <div className='summ'>
                        <div>1500 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={fish} alt='fish'/>
                    <h4>Удон с овощами и фучжу 280 гр</h4>
                    <p>Лапша рамен, спаржа, морковь..</p>
                    <div className='summ'>
                        <div>1499 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={riceBeef} alt='riceBeef'/>
                    <h4>Рис с морепродуктами 350 гр</h4>
                    <p>Рис, коктейль из морепродуктов, болгарский перец..</p>
                    <div className='summ'>
                        <div>1500 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={riceChick} alt='riceChick'/>
                    <h4>Удон с темпе и соусом терияки 280 гр</h4>
                    <p>Лапша удон, соевый темпе, морковь..</p>
                    <div className='summ'>
                        <div>1559 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={riceFish} alt='riceFish'/>
                    <h4>Тепан с цыпленком 330 гр</h4>
                    <p>Цыпленок, рис, шампиньоны, горох лопатка..</p>
                    <div className='summ'>
                        <div>1519 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={udonBeef} alt='udonBeef'/>
                    <h4>Удон с курицей терияки 290 гр</h4>
                    <p>Лапша удон, куриное филе, болгарский перец.. </p>
                    <div className='summ'>
                        <div>1469 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={udonChick} alt='udonChick'/>
                    <h4>Рис с говядиной 340 гр</h4>
                    <p>Рис, говядина маринованная, болгарский перец..</p>
                    <div className='summ'>
                        <div>1559 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={udonTempe} alt='udonTempe'/>
                    <h4>Рис с курицей терияки 360 гр</h4>
                    <p>Рис, куриное филе, болгарский перец..</p>
                    <div className='summ'>
                        <div>1479 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={udonVegetables} alt='udonVegetables'/>
                    <h4>Удон с говядиной 300 гр</h4>
                    <p>Лапша удон, говядина маринованная..</p>
                    <div className='summ'>
                        <div>1479 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={vegetables} alt='vegetables'/>
                    <h4>Удон с овощами 300 гр</h4>
                    <p>Лапша удон, болгарский перец..</p>
                    <div className='summ'>
                        <div>1479 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={sauce} alt='sauce'/>
                    <h4>Соевый соус 40 гр</h4>
                    <p>Соевый соус</p>
                    <div className='summ'>
                        <div>1479 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default WokData

