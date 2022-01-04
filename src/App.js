import './App.css';
import './index.css';
import './components/content/slider/slider.css';
import { Routes, Route, Router } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import RightMenu from './components/rightMenu/rightMenu';
import Content from './components/content/content'; 
import SetSushi from './components/setSushi/setSushi';
import Pizza from './components/pizza/pizza';





function App() {

  return (
    <>
        <div className="wrapper">
          <Routes>
                <Route path='/' element={<Content/>} />
                <Route path='/set' element={<SetSushi/>} />
                <Route path='/pizza' element={<Pizza/>} />
          </Routes>
          
          <RightMenu/>
          <Sidebar/>
        </div>
    </>
    
  );

}

export default App;
