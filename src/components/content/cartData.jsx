import React, {useState, useEffect} from 'react';
import '../content/cartData.css';
import '../content/set/set.css';
import '../content/footer/footer.css';
import '../content/content.css';
import Carousel from '../cart/carousel';



// Add to cart


const CartData = () => {

    const [ slide, setSlide ] = useState(1);
    const decCounter = () => {
        if ( slide > 1) {
            setSlide(slider => slider -1)
        }
    }
//===================================
    const [ number, setNumber ] = useState(500);
    function addPrice(i) {
        setNumber(number * i);
    }
//===================================
    function changeSlide(i) {
        setSlide(slide + i);
    }

    useEffect(() => {
        console.log('effect');
        document.title = `Slide: ${slide}`;
    }, [slide]);





    //=========== slider
    
    const slides = [
        {image: 'https://c.ollis.ru/1606483941163-285x198.jpeg', title: 'This is title', descr: 'This is descr'},
        {image: 'https://c.ollis.ru/1605776585916-285x198.jpeg', title: 'This is title', descr: 'This is descr'},
        {image: 'https://c.ollis.ru/1640173542636-285x198.jpeg', title: 'This is title', descr: 'This is descr'},
        {image: 'https://c.ollis.ru/1621592228530-285x198.jpeg', title: 'This is title', descr: 'This is descr'},
        {image: 'https://c.ollis.ru/1615978892241-285x198.jpeg', title: 'This is title', descr: 'This is descr'},
        {image: 'https://c.ollis.ru/1627651247916-285x198.jpeg', title: 'This is title', descr: 'This is descr'},
        {image: 'https://c.ollis.ru/1605775546926-285x198.jpeg', title: 'This is title', descr: 'This is descr'},
        {image: 'https://c.ollis.ru/1621581709683-285x198.jpeg', title: 'This is title', descr: 'This is descr'},
        {image: 'https://c.ollis.ru/1605778946417-285x198.jpeg', title: 'This is title', descr: 'This is descr'}
    ];

    
    return (
        <div className='cartWrapper'>
            <div className='setName'>
                    <h2>Предварительный заказ</h2>
            </div>
                <div className='cartItems'>
                    <div className='cartItem'>
                        <img src='' alt='fishPizza'/>
                    </div>
                    <div className='cartItem'>
                    <h2>Пицца Новогодняя с лососем и красной икрой</h2>
                            <p>Тесто, соус сливочный, лосось, икра лосося, сыр моцарелла, руккола</p>
                        <div className='cartSumm'>
                            <div onClick={() => addPrice(changeSlide)} className='price'>{number}</div>
                            <div className='cartAdd'>
                                <button onClick={() => decCounter(-1)}>&#8722;</button> 
                                <div className='num'>{ slide }</div>
                                <button onClick={() => changeSlide(1)}>&#43;</button>
                            </div>                
                        </div>
                        <button className="btnCart">Хочу!</button>
                    </div> 
                </div>

                <div id='body'>
                    <Carousel slides={slides}/>
                </div>
        </div>
    )
}

export default CartData;
