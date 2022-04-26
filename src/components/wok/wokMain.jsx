import React from 'react';
import Footer from '../content/footer/footer';
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import WokBox from './wokBox';


function WokMain() {
  return (
    <div>
        <Header />
        <WokBox />
        <Spoiler />
        <Footer />
    </div>
  )
}

export default WokMain;