import React from 'react';
import { Route, Routes, Redirect, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';




function App() {

  
  
  
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
