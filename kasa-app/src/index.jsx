import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Route path='/'>
        <App />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);