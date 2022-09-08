import React, { Component } from 'react';

export default class ProductList extends Component {
  state = {
    products: [],
  };

  render() {
    // const { products } = this.state;
    return (
      <div>
        <input />
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </div>
    );
  }
}
