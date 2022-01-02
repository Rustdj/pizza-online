import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink to='/'><img src={logo} alt=''/></NavLink>
            </div>
            <div className='sidebarLine'>
                <hr></hr>
            </div>
            <div className='sidebarMenu'>
                    <div className='sidebarMenuItems'>
                        <div><img src={pizza} alt='pizza'/></div>
                        <NavLink to='/pizza'>Пицца</NavLink>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={seti} alt='set'/></div>
                        <NavLink to='/set'>Сеты</NavLink>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={wok} alt=''/></div>
                        <NavLink to='/wok'>WOK</NavLink>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={roll} alt=''/></div>
                        <NavLink to='/roll'>Роллы</NavLink>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={sushi} alt=''/></div>
                        <NavLink to='/sushi'>Суши</NavLink>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={salad} alt=''/></div>
                        <NavLink to='/salads'>Салаты</NavLink>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={soup} alt=''/></div>
                        <NavLink to='/soup'>Супы</NavLink>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={dogs} alt=''/></div>
                        <NavLink to='/dogs'>Корн доги</NavLink>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={juice} alt=''/></div>
                        <NavLink to='/juice'>Напитки</NavLink>
                    </div>
                    <div className='sidebarMenuItems'>
                        <div><img src={sales} alt=''/></div>
                        <NavLink to='/sales'>Акции</NavLink>
                    </div>
            </div>
                
        </div>
    )
}

export default Sidebar
