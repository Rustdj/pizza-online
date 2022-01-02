import './setSushi.css';
import Content from '../content/content.js';
import Spoiler from '../content/spoiler/spoiler';
import Footer from '../content/footer/footer';



import React from 'react'

const SetSushi = () => {
    return (
        <div>
            <Content/>
            <Spoiler/>
            <Footer/>
            <SetSushi/>
        </div> 
    )
}

export default SetSushi
