import React, {useState, useEffect} from 'react';
import fishPizza from '../../img/pizza/formaggio.svg';
import '../content/cartData.css';
import '../content/set/set.css';
import '../content/footer/footer.css';
import '../content/content.css';




const CartData = (props) => {

    const [slide, setSlide] = useState(1);
    const decCounter = () => {
        if ( slide > 1) {
            setSlide(slider => slider -1)
        }
    }
//===================================
    const [number, setNumber] = useState(500);
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
    

    return (
        <div className='cartWrapper'>
            <div className='setName'>
                    <h2>Предварительный заказ</h2>
            </div>
                <div className='cartItems'>
                    <div className='cartItem'>
                        <img src={fishPizza} alt='fishPizza'/>
                    </div>
                    <div className='cartItem'>
                    <h2>Пицца Новогодняя с лососем и красной икрой</h2>
                            <p>Тесто, соус сливочный, лосось, икра лосося, сыр моцарелла, руккола</p>
                        <div className='cartSumm'>
                            <div onClick={() => addPrice(changeSlide)} className='price'>{number}</div>
                            <div className='cartAdd'>
                                <button onClick={() => decCounter(-1)}>&#8722;</button> 
                                <div className='num'>{slide}</div>
                                <button onClick={() => changeSlide(1)}>&#43;</button> 
                            </div>                
                        </div>
                        <button className="btnCart">Хочу!</button>
                    </div>
                    
                </div>
                
        </div>
    )
}

export default CartData;
