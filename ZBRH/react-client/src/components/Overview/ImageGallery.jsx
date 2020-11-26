import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';


const ImageGallery = ({currentStyle}) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    currentStyle.photos ?
      <div className="image-gallery-wrapper">
        <div className="image-gallery-carousel-container">
          <Carousel
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
          {currentStyle.photos.map(
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
            ))}
        </div>
      </div>
      : null
  );
};

export default ImageGallery;
