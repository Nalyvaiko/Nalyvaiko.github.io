import React from 'react';
import { func } from 'prop-types';

import SearchForm from './SearchForm';

const SearchSection = ({ getImages }) => (
  <section className="search">
    <div className="wrapper">
      <p className="search__subtitle">Hi! What is your favorite country?</p>
      <SearchForm
        getImages={getImages}/>
    </div>
  </section>
);

SearchSection.propTypes = {
  getImages: func.isRequired
}

export default SearchSection;
