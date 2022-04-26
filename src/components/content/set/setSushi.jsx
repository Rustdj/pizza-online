import Spoiler from '../spoiler/spoiler';
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import SetBox from './SetBox.jsx';


const SetSushi = () => {
    return (
        <div>
            <Header/>
            <SetBox/>
            <Spoiler/>
            <Footer/>
        </div> 
    )
}

export default SetSushi
