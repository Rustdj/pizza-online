import './App.css';
import './components/content/slider.css';
import Sidebar from './components/sidebar/sidebar';
import RightMenu from './components/rightMenu/rightMenu';
import Content from './components/content/content';
import ImageSlider from './components/content/imageSlider'; 
import { SliderData } from './components/content/sliderData';





function App() {

  return (
    <>
        <div className="wrapper">
          <Content slides={SliderData}/>
          <RightMenu/>
          <Sidebar/>
          
        </div>
    </>
  );
}

export default App;
