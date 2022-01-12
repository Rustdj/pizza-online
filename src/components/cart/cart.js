import React from 'react';
import Header from '../content/header/header.js';
import Footer from '../content/footer/footer.js';
import CartData from '../content/cartData.js';
import '../content/set/set.css';
import '../content/slider/slider.css';




const Cart = () => {
    return (
        <div>
            <Header/>
            <CartData />
            
            <Footer/>
        </div>
    )
}

export default Cart;
