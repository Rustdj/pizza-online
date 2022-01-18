import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import '../../components/content/cartData.css';
import React from 'react';



const Carousel = (props) => {

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return (
        <div id='mainSliderContainer'>
            <div className='title'>Новинки рекомендуемые к заказу</div>
            <MdChevronLeft size={40} className='sliderIconLeft' onClick={slideLeft}/>
            <div id='slider'>
                {
                    props.slides.map((slide, index) => {
                            return (
                                <div className='sliderCard' key={index}>
                                    <div className='sliderCartImage' style={{backgroundImage:`url(${slide.image})`}}></div>
                                    <p className='sliderCartTitle'>{slide.title}</p>
                                    <p className='sliderCartDescr'>{slide.descr}</p>
                                    <button className='sliderButton'>&#43;</button>
                                </div>
                            )
                    })
                }
            </div>
            <MdChevronRight size={40} className='sliderIconRight' onClick={slideRight}/>
        </div>
    )
}

export default Carousel
