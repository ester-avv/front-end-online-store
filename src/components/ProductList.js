import React, { Component } from 'react';

export default class ProductList extends Component {
  state = {
    products: [],
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
