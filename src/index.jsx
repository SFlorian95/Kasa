import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Home from './home/Home'
import Header from './header/Header'
import Error from './error/Error'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
)
