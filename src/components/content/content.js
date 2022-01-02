import './content.css';
import watch from '../../img/logo/watch.svg';
import search from '../../img/logo/search.svg';
import React from 'react';
import { SliderData } from './sliderData';
import './blockMarket/blockMarket.css';
import BlockMarket from './blockMarket/blockMarket.js';
import Slider from './slider/slider';
import SliderFooter from './slider/sliderFooter';
import { SliderFooterData } from './SliderFooterData.js';
import Spoiler from './spoiler/spoiler';
import Footer from './footer/footer';
import SetSushi from '../setSushi/setSushi';





const Content = () => {
    return (
        <div className='content'>  
                    <div className='contentHeader'>
                        <div className='contentHeaderWrapper'>
                                <div className='contentHeaderBox'>
                                    <h4>Наш телефон</h4>
                                    <li><a href="tel:79650033900">+7965 003 39 00</a></li>
                                    <li><a href="tel:358456670514">+358 45 667 05 14</a></li>
                                    <div className='time'>
                                        <img src={watch}/>
                                        <li>работаем с 10:00 до 00:00</li>
                                    </div>
                                </div>
                                <div className='contentWrapper'>
                                    <div className='contentDelivery'>
                                        <a href='#'>Отзывы</a>
                                        <a className='link' href='#'>Доставка и оплата</a>
                                    <img src={search}/>
                                </div>
                            </div>  
                        </div>
                    </div> 
            

                    <Slider slides={SliderData}/>
                    <BlockMarket/>  
                    <div className='container'>
                        <SliderFooter _class='SliderFooterData'>
                                    {
                                    SliderFooterData.map((v, i) => {
                                        return (
                                        <div key={i} className='scrollableItem'>
                                            <img src={v.image}/>
                                            <h2>{v.title}</h2>
                                            <li>{v.text}</li>
                                            <div className='scrollableItemBlock'>
                                                <p>{v.price}</p>
                                                <button className='scrollableBtn'>{v.button}</button>
                                            </div>
                                        </div>
                                        )
                                    })
                                    }
                        </SliderFooter>
                    </div>
                    <Spoiler/>
                    <Footer/>
                    <SetSushi/>
                    
        </div>
    )
}

export default Content;