import './App.css';
import './index.css';
import './components/content/slider/slider.css';
import { Routes, Route, Router } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import RightMenu from './components/rightMenu/rightMenu';
import Content from './components/content/content'; 
import SetSushi from './components/setSushi/setSushi';





function App() {

  return (
    <>
        <div className="wrapper">
          <Routes>
                <Route path='/' element={<Content/>} />
                <Route path='/set' element={<SetSushi/>} />
          </Routes>
          
          <RightMenu/>
          <Sidebar/>
        </div>
    </>
    
  );

}

export default App;
