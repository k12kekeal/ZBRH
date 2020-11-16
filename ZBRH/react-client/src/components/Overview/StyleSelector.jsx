import React from 'react';

const StyleSelector = ({value, getProduct, currentProduct}) => {
  return (
    <div onClick={e => getProduct(1, e)}>CLICK TO GET STYLE</div>
  );
};

export default StyleSelector;