import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/Cart" component={ Cart } />
      </BrowserRouter>
    );
  }
}

export default App;
