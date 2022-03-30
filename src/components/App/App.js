import React from 'react';
import { Route, Routes, Redirect, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';




function App() {

  
  
  
  return (
    <div className="page">

      <Routes>
        <Route exact path="/" element={<Main />}/>
      </Routes>
        
    </div>
  );
}

export default App;
