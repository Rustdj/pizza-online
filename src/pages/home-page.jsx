import React from 'react';
import  { GameItem }  from '../components/game-item/game-item';



export const GAMES = [
    {
        image: 'https://gidsy.ru/logo/pizza_ollis.jpg',
        title: 'Пицца Новогодняя с лососем и красной икрой',
        genres: 'Тесто, соус сливочный',
        price: 500,
        id: 1
    },
    {
        image: '',
        title: 'Пицца Кон Формаджио',
        genres: 'Тесто, соус сливочный',
        price: 500,
        id: 2
    },
    {
        image: '',
        title: 'Пицца Мясная',
        genres: 'Тесто, соус сливочный',
        price: 500,
        id: 3
    },
    {
        image: '',
        title: 'Пицца с ветчиной и рукколой',
        genres: 'Тесто, соус сливочный',
        price: 500,
        id: 4
    },
    {
        image: '',
        title: 'Пицца Дьябло',
        genres: 'Тесто, соус сливочный',
        price: 500,
        id: 5
    },
    {
        image: '',
        title: 'Пицца Гавайская',
        genres: 'Тесто, соус сливочный',
        price: 500,
        id: 6
    },
    {
        image: '',
        title: 'Пицца Петровская',
        genres: 'Тесто, соус сливочный',
        price: 500,
        id: 7
    },
    {
        image: '',
        title: 'Пицца Мясная карри',
        genres: 'Тесто, соус сливочный',
        price: 500,
        id: 8
    },
    {
        image: '',
        title: 'Пицца Мясная карри',
        genres: 'Тесто, соус сливочный',
        price: 500,
        id: 9
    },
    {
        image: '',
        title: 'Пицца Новогодняя с лососем и красной икрой',
        genres: 'Тесто, соус сливочный',
        price: 500,
        id: 10
    },
]

export const HomePage = () => {
    return (
        <div className='homePage'>
            { GAMES.map(game => <GameItem game={game} key={game.id}/>)}
        </div>
    )
}