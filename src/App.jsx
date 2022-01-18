import './App.css';
import './index.css';
import './components/content/slider/slider.css';
//import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import RightMenu from './components/rightMenu/rightMenu';
import Content from './components/content/content'; 
import SetSushi from './components/setSushi/setSushi';
import Pizza from './components/pizza/pizza';
import Wok from './components/wok/wok';
import Roll from './components/roll/roll';
import Sushi from './components/sushi/sushi';
import Salads from './components/salads/salads';
import Soup from './components/soup/soup';
import CornDogs from './components/cornDogs/cornDogs';
import Juice from './components/juice/juice';
import Sales from './components/sales/sales';
import Cart from './components/cart/cart';
import { HomePage } from './pages/home-page';
import PizzaBox from './components/pizza/pizzaBox';





function App() {

  const pizzaData = [
    {
        image: 'https://c.ollis.ru/1641905333540-285x198.jpeg',
        title: 'Пицца Прошутто котто 450 гр',
        descr: '',
        price: 500,
        button: 'Заказать'
    },
    {
        image: 'https://c.ollis.ru/1641904477043-285x198.jpeg',
        title: 'Пицца с цукини и креветками 430 гр',
        descr: '',
        price: 780,
        button: 'Заказать'
    },
    {
        image: 'https://c.ollis.ru/1641904838841-285x198.jpeg',
        title: 'Пицца с белыми грибами 500 гр',
        descr: '',
        price: 670,
        button: 'Заказать'
    },
    {
        image: 'https://c.ollis.ru/1640093830404-285x198.jpeg',
        title: 'Пицца Новогодняя с лососем и красной икрой 500 гр',
        descr: '',
        price: 800,
        button: 'Заказать'
    },
    {
        image: 'https://c.ollis.ru/1630671970511-285x198.jpeg',
        title: 'Пицца Кон Формаджио 355 гр',
        descr: '',
        price: 690,
        button: 'Заказать'
    },
    {
        image: 'https://c.ollis.ru/1602517563992-285x198.jpeg',
        title: 'Пицца Мясная 470 гр',
        descr: '',
        price: 630,
        button: 'Заказать'
    },
    {
        image: 'https://c.ollis.ru/1630672529037-285x198.jpeg',
        title: 'Пицца с ветчиной и рукколой 385 гр',
        descr: '',
        price: 500,
        button: 'Заказать'
    },
    {
        image: 'https://c.ollis.ru/1630672843097-285x198.jpeg',
        title: 'Пицца Гавайская с брусникой 435 гр',
        descr: '',
        price: 650,
        button: 'Заказать'
    },
    {
        image: 'https://c.ollis.ru/1641905333540-285x198.jpeg',
        title: 'Пицца Петровская 560 гр',
        descr: '',
        price: 700,
        button: 'Заказать'
    },
]

  return (
    
    <>
      {/* <Provider store={store}> */}
        <div className="wrapper"> 
                  <Routes>
                      <Route path='/' element={<Content/>} />
                        <Route path='/set' element={<SetSushi/>} />
                          <Route path='/pizza' element={<Pizza pizzaData={pizzaData}/>} />
                              <Route path='/wok' element={<Wok/>} />
                                <Route path='/roll' element={<Roll/>} />
                                  <Route path='/sushi' element={<Sushi/>} />
                                <Route path='/salads' element={<Salads/>} />
                              <Route path='/soup' element={<Soup/>} />
                            <Route path='/dogs' element={<CornDogs/>} />
                          <Route path='/juice' element={<Juice/>} />
                        <Route path='/sales' element={<Sales/>} />
                      <Route path='/cart' element={<Cart/>} />
                  </Routes>       
              <RightMenu/>
            <Sidebar/> 
                   
        </div>
      {/* </Provider> */}
    </>
    
    
  );

}

export default App;
