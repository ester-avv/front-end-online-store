import React, { Component } from 'react';
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

  handleId = async (categoryId) => {
    const categoriesIds = await getProductsFromCategoryAndQuery(categoryId, '$QUERY');
    console.log(categoriesIds);
    return categoriesIds.results;
  };

  render() {
    const { categories } = this.state;
    // console.log(categories);
    return (
      <div className="categories">
        {categories.map((elemento) => (
          <section key={ elemento.id }>
            <label htmlFor={ elemento.id }>
              <input
                name="categories"
                type="radio"
                id={ elemento.id }
                data-testid="category"
                onClick={ () => this.handleId(elemento.id) }
              />
              {elemento.name}
            </label>
          </section>
        ))}
      </div>
    );
  }
}
