import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo/Logo.png';
import pizza from '../../img/logo/pizza.svg';
import seti from '../../img/logo/seti.svg';
import wok from '../../img/logo/wok.svg';
import roll from '../../img/logo/roll.svg';
import sushi from '../../img/logo/sushi.svg';
import salad from '../../img/logo/salad.svg';
import soup from '../../img/logo/soup.svg';
import dogs from '../../img/logo/dogs.svg';
import juice from '../../img/logo/juice.svg';
import sales from '../../img/logo/sales.svg';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarLogo'>
                <img src={logo} alt=''/>
            </div>
            <div className='sidebarLine'>
                <hr></hr>
            </div>
            <div className='sidebarMenu'>
                    <div className='sidebarMenuItems'>
                        <div><img src={pizza} alt=''/></div>
                        <p>Пицца</p>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={seti} alt=''/></div>
                        <p>Сеты</p>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={wok} alt=''/></div>
                        <p>WOK</p>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={roll} alt=''/></div>
                        <p>Роллы</p>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={sushi} alt=''/></div>
                        <p>Суши</p>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={salad} alt=''/></div>
                        <p>Салаты</p>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={soup} alt=''/></div>
                        <p>Супы</p>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={dogs} alt=''/></div>
                        <p>Корн доги</p>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={juice} alt=''/></div>
                        <p>Напитки</p>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={sales} alt=''/></div>
                        <p>Акции</p>
                    </div>
            </div>
                
        </div>
    )
}

export default Sidebar
