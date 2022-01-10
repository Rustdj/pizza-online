import './content.css';
import React from 'react';
import { SliderData } from './sliderData';
import './blockMarket/blockMarket.css';
import BlockMarket from './blockMarket/blockMarket.js';
import Slider from './slider/slider';
import SliderFooter from './slider/sliderFooter';
import { SliderFooterData } from './SliderFooterData.js';
import Spoiler from './spoiler/spoiler';
import Footer from './footer/footer';
import Header from './header/header';





const Content = () => {
    return (
        <div className='content'>
                    <Header/>
                    <Slider slides={SliderData}/>
                    <BlockMarket/>  
                    <div className='container'>
                        <SliderFooter _class='SliderFooterData'>
                                    {
                                    SliderFooterData.map((v, i) => {
                                        return (
                                        <div  className='scrollableItem'>
                                            <img key={i} src={v.image}/>
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
                    
        </div>
    )
}

export default Content;