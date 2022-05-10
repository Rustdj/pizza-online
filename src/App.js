import './App.css';
import './index.css';
import './components/content/slider/slider.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from'react-redux';
import Sidebar from './components/sidebar/sidebar';
import RightMenu from './components/rightMenu/rightMenu';
import Content from './components/content/content'; 
import SetSushi from './components/content/set/setSushi';
import Pizza from './components/pizza/pizza';
import Roll from './components/roll/roll';
import Sushi from './components/sushi/sushi';
import Salads from './components/salads/salads';
import Soup from './components/soup/soup';
import CornDogs from './components/cornDogs/cornDogs';
import Juice from './components/juice/juice';
import Sales from './components/sales/sales';
import Cart from './components/cart/cart';
import {PizzaData} from './components/pizza/pizzaData';
import WokMain from './components/wok/wokMain';
import { store } from './redux';

function App() {
  return ( 
    <>
        <div className="wrapper"> 
        <Provider store={store}>
                  <Routes>
                      <Route path='/' element={<Content/>} />
                        <Route path='/set' element={<SetSushi/>} />
                          <Route path='/pizza' element={<Pizza PizzaData={PizzaData}/>} />
                              <Route path='/wok' element={<WokMain/>} />
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
          </Provider>         
        </div>
    </> 
  );

}

export default App;
