import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {GridList, GridListTile, GridListTileBar} from '@material-ui/core';

const ImageGallery = ({currentStyle}) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    currentStyle.photos ?
      <div>
        <GridList cellHeight={180}>
          {currentStyle.photos.map((photo, i) => (
            <GridListTile key={i}>
              <img
                value={i}
                src={photo.thumbnail_url}
                alt={currentStyle.name}
                onClick={e => handleSelect(i, e)} />
            </GridListTile>
          ))}
        </GridList>

        <Carousel activeIndex={index} onSelect={handleSelect}>
          {currentStyle.photos ? currentStyle.photos.map(photo => (
            <Carousel.Item>
              <img src={photo.url} width="400"/>
            </Carousel.Item>
          )) : null}
        </Carousel>
      </div>
      : null
  );
};

export default ImageGallery;
