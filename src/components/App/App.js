import React from 'react';
import { Route, Routes, Redirect, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './App.css';




function App() {

  const [islogOn, setlogOn] = React.useState(false);
  const navigate = useNavigate();

  function handleSignIn() {
    setlogOn(true);
    navigate.push("/movies");
  }

  function handleProfile() {}

  function handleSignUp() {
    handleSignIn();
  }

  function handleSignOut() {
    setlogOn(false);
    navigate.push("/");
  }

  
  
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/sign-up" element={<Register onSubmit={handleSignUp} />}/>
        <Route exact path="/sign-in" element={<Login onSubmit={handleSignIn} />}/>
        <Route exact path="/profile" element={<Profile onSubmit={handleSignUp} />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
