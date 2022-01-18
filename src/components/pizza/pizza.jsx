import React from 'react';
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import Footer from '../content/footer/footer';



const Pizza = ({pizzaData}) => {

    const elements = pizzaData.map(item => {
            <pizzaBox {...item}/>
    })

    return ( 
    
        <div >
            <Header />
            {elements}
            <pizzaData/>
            <Spoiler />
            <Footer />
        </div>
    )
}

export default Pizza;