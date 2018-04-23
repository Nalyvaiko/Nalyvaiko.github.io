import React from 'react';
import { array } from 'prop-types';

const ImagesSection = ({ images }) => (
  <section className="images">
    <div className="wrapper">
      <h2 className="images__title">Discover activity ideas</h2>
      <div className="images__grid grid">
        <div className="images__grid-sizer" />
        {images.map((image, i) => {
          const key = image.id;
          const url = image.webformatURL;
          const tags = image.tags;
          const figureClass = i == 4 || i == 5 ? 'images__grid-item--width2 grid-item--width2' : 'images__grid-item grid-item'

          return (
            <figure key={key} className={figureClass}>
              <img className="images__grid-img" src={url} />
              <figcaption className="images__grid-text">{tags}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  </section>
);

ImagesSection.propTypes = {
  images: array.isRequired
};

export default ImagesSection;
