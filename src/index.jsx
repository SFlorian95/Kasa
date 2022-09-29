import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Home from './home/Home'
import Header from './header/Header'
import Error from './error/Error'
import Footer from './footer/Footer'
import About from './about/About'
import Lodging from './lodging/Lodging'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {ActiveRouteProvider } from './utils/context';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
      <ActiveRouteProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/lodging/:id">
            <Lodging />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </ActiveRouteProvider>
    </Router>
)
