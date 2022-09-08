import React, { Component } from 'react';
import { getCategories } from '../services/api';

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

  // novo push

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((elemento) => (
          <section key={ elemento.id }>
            <label htmlFor={ elemento.id }>
              <input
                name="categories"
                type="radio"
                id={ elemento.id }
                data-testid="category"
              />
              {elemento.name}
            </label>
          </section>
        ))}
      </div>
    );
  }
}
