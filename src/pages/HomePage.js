import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  state = {
    // products: [],
    search: '',
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <input onChange={ this.handleChange } />
        <button type="button">
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>
        { !search
        && (
          <div>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma
              categoria.
            </p>
          </div>
        ) }
      </div>
    );
  }
}
