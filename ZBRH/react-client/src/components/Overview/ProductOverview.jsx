import React from 'react';

const ProductOverview = ({currentProduct}) => (
  <div>
    {currentProduct.slogal}
    {currentProduct.description}
    {(currentProduct.features) ? currentProduct.features.map(feature => (
      <li>{feature.feature}{feature.value && `: ${feature.value}`}</li>
    )) : null}
  </div>
);

export default ProductOverview;