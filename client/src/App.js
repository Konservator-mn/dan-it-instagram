import React, { Fragment } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Feed from './components/Feed/Feed'
import Footer from './components/Layout/Footer'
import {Route} from 'react-router-dom'

import SignIn from './components/SignIn/SignIn'


function App() {
  return (
    <div className="mainContainer">
      <Header/>
      <Route path="/" component = {SignIn} /> 
      {/* <Route exact path="/signup" component = {SignUp} />    */}
      <Route exact path="/feed" component = {Feed} />   
      <Footer/>

    </div>
  );
}

export default App;
