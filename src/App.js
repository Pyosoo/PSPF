import React from 'react';
import './App.css';
import Photo from './components/Photo';
import Profile from './components/Profile';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <div className="left_window">
        <div className="Photo_component">
          <Photo />
        </div>
        {/* 
        <div className="footer_component">
          <Profile />
        </div>
        */}
      </div>


      <div className="main_component">
        <Main />
      </div>
    </div>
  );
}

export default App;
