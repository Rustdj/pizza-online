import './content.css';
import watch from '../../img/logo/watch.svg';
import search from '../../img/logo/search.svg';
import React, { useState } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { SliderData } from './sliderData';




const Content = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    

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

                <section className='slider'>
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                    {SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt='sushi image' className='image'/>
                                )}
                                
                            </div>
                        )
                        
                        
                    })}
                </section>

            
            
        </div>
    )
}

export default Content;