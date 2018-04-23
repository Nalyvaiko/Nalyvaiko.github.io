import React, { Component } from 'react';
import Masonry from 'masonry-layout';

import SearchSection from './SearchSection';
import ImagesSection from './ImagesSection';
import FooterSection from './FooterSection';
import URL from '../api';
// import countries from '../data';
// import autocomplete from '../api/autocomplete';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }
  componentDidMount() {
    new Masonry('.images__grid', {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });

    // const searchInput = document.getElementById('searchInput');
    // autocomplete(searchInput, countries);

    this.getImages();
  }

  getImages = (searchRequest = '') => {
    const searchQuery = URL+"&q="+encodeURIComponent(searchRequest);

    fetch(searchQuery)
      .then(response => response.json())
      .then((data) => {
        const images = data.hits.slice(0, 7);

        this.setState({
          images
        });
      });
  }

  render() {
    return (
      <div>
        <SearchSection
          getImages={this.getImages}/>
        <ImagesSection
          images={this.state.images}/>
        <FooterSection/>
      </div>
    );
  }
}

export default App;
