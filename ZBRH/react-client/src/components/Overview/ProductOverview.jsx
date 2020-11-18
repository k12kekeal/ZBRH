import React from 'react';

const ProductOverview = ({ currentProduct }) => {
  return (
    <div>
      <h3>{currentProduct.slogan}</h3>
      <p>{currentProduct.description}</p>
      {/* <div>{currentProduct.features}</div> */}
    </div>
  );
};

export default ProductOverview;
