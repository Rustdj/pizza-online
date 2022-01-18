import './setSushi.css';
import Spoiler from '../content/spoiler/spoiler';
import React from 'react';
import Set from '../content/set/set';
import Header from '../content/header/header';
import Footer from '../content/footer/footer';


const SetSushi = () => {
    return (
        <div>
            <Header/>
            <Set/>
            <Spoiler/>
            <Footer/>
        </div> 
    )
}

export default SetSushi
