import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ ProductList } />
      </BrowserRouter>
    );
  }
}

export default App;
