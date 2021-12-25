import './content.css';
import watch from '../../img/logo/watch.svg';
import search from '../../img/logo/search.svg';
import React from 'react';
import { SliderData } from './sliderData';
import './blockMarket/blockMarket.css';
import BlockMarket from './blockMarket/blockMarket.js';
import Slider from './slider/slider';
import SliderFooter from './slider/sliderFooter';




const Content = () => {
    return (
        <div className='content'>  
                    <div className='contentHeader'>
                        <div className='contentHeaderBox'>
                            <p>Наш телефон</p>
                            <a href="tel:79650033900">+7965 003 39 00</a> <br></br>
                            <a href="tel:358456670514">+358 45 667 05 14</a>
                        </div>
                        <div className='vl'></div>
                        <div className='contentHeaderTime'>
                            <img src={watch}/>
                            <p>работаем с 10:00 до 00:00</p>
                        </div>
                        <div className='contentWrapper'>
                            <div className='contentDelivery'>
                                <a href='#'>Отзывы</a>
                                <a className='link' href='#'>Доставка и оплата</a>
                                <img src={search}/>
                            </div>
                        </div>  
                    </div> 
            <hr className='hr' align="center"></hr>

                    <Slider slides={SliderData}/>
                    <BlockMarket/>  
                    <SliderFooter karusel={SliderData}/>  
        </div>
    )
}

export default Content;