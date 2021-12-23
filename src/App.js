import './App.css';
import Sidebar from './components/sidebar/sidebar';
import RightMenu from './components/rightMenu/rightMenu';
import { Routes, Route } from 'react-router-dom';
import Content from './components/content/content';
import { useState } from 'react';




function App() {

  const items = [
    {
      title: 'Заголовок 1',
      text: 'Текст'
    },
    {
      title: 'Заголовок 2',
      text: 'Текст'
    },
    {
      title: 'Заголовок 3',
      text: 'Текст'
    },
    {
      title: 'Заголовок 4',
      text: 'Текст'
    },
    {
      title: 'Заголовок 5',
      text: 'Текст'
    },
    {
      title: 'Заголовок 5',
      text: 'Текст'
    },
    {
      title: 'Заголовок 5',
      text: 'Текст'
    },
    {
      title: 'Заголовок 5',
      text: 'Текст'
    },
    
  ]
  


  return (
    <>
        <div className="wrapper">
          <Content _class='items'>
                {
                  items.map((v, i) => {
                    return (
                      <div key={i} className='item'>
                            <h2>{v.title}</h2>
                            <p>{v.text}</p>
                      </div>
                    )
                  })
                }
          </Content>
          <RightMenu/>
          {/* <Routes>
          </Routes> */}
          <Sidebar/>
          
        </div>
    </>
  );
}

export default App;
