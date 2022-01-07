import './App.css';
import './index.css';
import './components/content/slider/slider.css';
import { Routes, Route, Router } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import RightMenu from './components/rightMenu/rightMenu';
import Content from './components/content/content'; 
import SetSushi from './components/setSushi/setSushi';
import Pizza from './components/pizza/pizza';
import Wok from './components/wok/wok';
import Roll from './components/roll/roll';





function App() {

  return (
    <>
        <div className="wrapper">
          <Routes>
                <Route path='/' element={<Content/>} />
                <Route path='/set' element={<SetSushi/>} />
                <Route path='/pizza' element={<Pizza/>} />
                <Route path='/wok' element={<Wok/>} />
                <Route path='/roll' element={<Roll/>} />
          </Routes>
          
          <RightMenu/>
          <Sidebar/>
        </div>
    </>
    
  );

}

export default App;
