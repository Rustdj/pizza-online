import './App.css';
import './index.css';
import './components/content/slider/slider.css';
import Sidebar from './components/sidebar/sidebar';
import RightMenu from './components/rightMenu/rightMenu';
import Content from './components/content/content'; 
import Scrollable from './components/content/slider/scrollable';





function App() {

  const listItems = [
    {
      image: '',
      title: '',
      text: ''
    },
    {
      image: '',
      title: '',
      text: ''
    },
    {
      image: '',
      title: '',
      text: ''
    },
    {
      image: '',
      title: '',
      text: ''
    },
    {
      image: '',
      title: '',
      text: ''
    }
  ]

  return (
    <>
        <div className="wrapper">
          <Content/>
          <RightMenu/>
          <Sidebar/>
        </div>

        <div className='container'>
            <Scrollable _class='listItems'>
                {
                  listItems.map((v, i) => {
                    return (
                      <div key={i} className='scrollableItem'>
                          <h2>{v.title}</h2>
                          <p>{v.text}</p>
                      </div>
                    )
                  })
                }
            </Scrollable>
        </div>

      
    </>
    
  );

}

export default App;
