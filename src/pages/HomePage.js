import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/Category';
import { searchProducts } from '../services/api';
import Products from '../components/Products';

export default class HomePage extends Component {
  state = {
    products: [],
    search: '',
    hasProduct: false,
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSearch = async () => {
    const { search } = this.state;
    const products = await searchProducts(search);
    this.setState({ hasProduct: true, products: products.results });
  };

  render() {
    const { search, hasProduct, products } = this.state;
    return (
      <div className="pai">
        <input onInput={ this.handleChange } data-testid="query-input" />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleSearch }
        >
          Pesquisar

        </button>
        <button type="button" className="botao">
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>
        { !search
        && (
          <div className="products">
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma
              categoria.
            </p>
          </div>
        ) }
        <Category />
        {hasProduct ? products.map(({ title, thumbnail, price, id }) => (
          <div key={ id }>
            <Products
              id={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />
          </div>
        )) : 'Nenhum produto foi encontrado'}
      </div>
    );
  }
}
