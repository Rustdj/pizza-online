import React from 'react';
import Header from '../content/header/header';
import Footer from '../content/footer/footer';
import CartData from '../content/cartData';
import SliderFooter from '../content/slider/sliderFooter';
import '../content/set/set.css';
import '../content/slider/slider.css';




const Cart = () => {
    return (
        <div>
            <Header />
       
            <CartData />
            <SliderFooter/>
            <Footer />
        </div>
    )
}

export default Cart;
