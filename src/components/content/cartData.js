import React from 'react';
import fishPizza from '../../img/pizza/formaggio.svg';
import '../content/cartData.css';
import '../content/set/set.css';
import '../content/footer/footer.css';
import '../content/content.css';

const CartData = () => {
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
                            <div>770 ₽</div>
                            <div className='cartAdd'>
                                <button>&#43;</button> 
                                <div className='num'>0</div>
                                <button>&#8722;</button>  
                            </div>                
                        </div>
                        <button>Хочу!</button>
                    </div>
                </div>
        </div>
    )
}

export default CartData;
