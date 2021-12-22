import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/content/content';
import RightMenu from './components/rightMenu/rightMenu';
import { Routes, Route } from 'react-router-dom';
import Content from './components/content/content';

function App() {
  return (
    <>
        <div className="wrapper">
          <Content/>
          <RightMenu/>
          {/* <Routes>
          </Routes> */}
          <Sidebar/>
          
        </div>
    </>
  );
}

export default App;
