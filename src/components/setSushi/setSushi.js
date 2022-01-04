import './setSushi.css';
import Spoiler from '../content/spoiler/spoiler';
import Footer from '../content/footer/footer';
import React from 'react'
import Header from '../content/header/header';
import Set from '../content/set/set';


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
