import React from 'react';
import Style from './Style.jsx';

const StyleSelector = ({ value, getProduct, currentProduct }) => {
  return (
    <div>
      {/* map over styles of currentProduct, create Style instance for each available style and pass props  */}
      <Style getProduct={getProduct} />
      <h4>{currentProduct.category}</h4>
      <h3>{currentProduct.name}</h3>
      <p>{currentProduct.description}</p>
      <p>${currentProduct.default_price}</p>
    </div>
  );
};

export default StyleSelector;
