import React, { Fragment } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Feed from './components/Feed/Feed'
import Footer from './components/Layout/Footer'


function App() {
  return (
    <div className="mainContainer">
      <Header/>
      <Feed/>
      <Footer/>

    </div>
  );
}

export default App;
