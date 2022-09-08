import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Products extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <div data-testid="product">
        <p key={ id }>
          Nome
          {' '}
          {title}
        </p>
        <img src={ thumbnail } alt={ title } />
        <p>
          Valor
          {' '}
          {price}
        </p>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
