import React from 'react';

const ProductOverview = ({ currentProduct }) => {
  return (
    <div>
      {currentProduct.slogan ? <h3>{currentProduct.slogan}</h3> : null}

      {currentProduct.description ? <p>{currentProduct.description}</p> : null}

      {currentProduct.features ? currentProduct.features.map(feature => (
        <ul>{feature.feature}: {feature.value}</ul>
      )) : null}
    </div>
  );
};

export default ProductOverview;