import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageGallery = ({currentStyle}) => (
  <div>

    <Carousel>
      {currentStyle.photos ? currentStyle.photos.map(photo => (
        <Carousel.Item>
          <img src={photo.url} width="400"/>
        </Carousel.Item>
      )) : null}
    </Carousel>

  </div>
);

export default ImageGallery;
