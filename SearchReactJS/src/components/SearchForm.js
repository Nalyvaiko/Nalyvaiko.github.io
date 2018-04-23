import React, { Component } from 'react';
import { func } from 'prop-types';

import SearchInput from './SearchInput';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  handleInputChange = (inputValue) => {
    this.setState({
      inputValue
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.getImages(this.state.inputValue);
  };

  render() {
    return (
      <form
        id="searchForm"
        className="search__form"
        autoComplete="off"
        onSubmit={this.handleFormSubmit}
      >
        <div className="autocomplete">
          <SearchInput
            value={this.state.inputValue}
            handleChange={this.handleInputChange} />
        </div>
        <button id="searchButton" className="search__btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  getImages: func.isRequired
}

export default SearchForm;
