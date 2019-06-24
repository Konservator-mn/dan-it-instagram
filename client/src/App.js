import React, { Fragment } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store'

import Header from "./components/Layout/Header"
import Landing from "./components/Layout/Landing"
import Footer from "./components/Layout/Footer"
import Feed from "./components/Feed/Feed"
import SignIn from "./components/SignIn/SignIn"

import "./App.css"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='mainContainer'>
          <Header />
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path="/register" component = {SignIn}/>
            <Route exact path="/login" component = {SignIn}/>
          </Switch>
          <Route exact path='/feed' component={Feed} />
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
