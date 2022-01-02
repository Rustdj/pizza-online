import './App.css';
import './index.css';
import './components/content/slider/slider.css';
import Sidebar from './components/sidebar/sidebar';
import RightMenu from './components/rightMenu/rightMenu';
import Content from './components/content/content'; 
import SetSushi from './components/setSushi/setSushi';





function App() {

  return (
    <>
        <div className="wrapper">
          <Content/>
          <RightMenu/>
          <Sidebar/>
          <SetSushi/>
        </div>
    </>
    
  );

}

export default App;
