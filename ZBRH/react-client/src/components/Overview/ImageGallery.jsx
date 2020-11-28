import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ImageGallery = ({currentStyle}) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      {currentStyle ?
        <div className="image-gallery-wrapper">
          <div className="image-gallery-carousel-container">
            <span aria-hidden="true" className="carousel-control-prev-icon" />
            <Carousel
              fade={true}
              slide={false}
              interval={null}
              wrap={false}
              className="image-gallery-carousel"
              activeIndex={index}
              onSelect={handleSelect}>
              {currentStyle.photos ? currentStyle.photos.map(photo => (
                <Carousel.Item>
                  <img
                    src={photo.url}
                    className="image-gallery-carousel-images"
                  />
                </Carousel.Item>
              )) : null}
            </Carousel>
          </div>
          <div>
          </div>
          <div className="image-gallery-thumb-container">
            {currentStyle.photos ? currentStyle.photos.map(
              (photo, i) => (
                <div
                  className="image-gallery-thumb">
                  <img
                    className="image-gallery-thumb-image"
                    key={i}
                    value={i}
                    src={photo.thumbnail_url}
                    alt={currentStyle.name}
                    onClick={e => handleSelect(i, e)}
                  />
                </div>
              )) : null}
          </div>
        </div>
        : null}
    </div>
  );
};


export default ImageGallery;
