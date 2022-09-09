import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Category extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  selectCategory = async ({ target }) => {
    const { onCategorySet } = this.props;
    const resultsById = await getProductsFromCategoryAndQuery(target.id, null);
    onCategorySet(resultsById.results);
  };

  // handleId = async (categoryId) => {
  //   const categoriesIds = await getProductsFromCategoryAndQuery(categoryId, '$QUERY');
  //   console.log(categoriesIds);
  //   return categoriesIds.results;
  // };

  render() {
    const { categories } = this.state;
    // console.log(categories);
    return (
      <div>
        <div className="categories">
          {categories.map((elemento) => (
            <section key={ elemento.id }>
              <label htmlFor={ elemento.id }>
                <input
                  name="categories"
                  type="radio"
                  id={ elemento.id }
                  data-testid="category"
                  onChange={ this.selectCategory }
                />
                {elemento.name}
              </label>
            </section>
          ))}
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  onCategorySet: PropTypes.func.isRequired,
};
