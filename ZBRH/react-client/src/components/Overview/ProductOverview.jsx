import React from 'react';

const ProductOverview = ({ currentProduct }) => {
  return (
    <div className='product-overview-container'>

      <div className='product-slogan-description'>
        {currentProduct.slogan ? <h3>{currentProduct.slogan}</h3> : null}
        {currentProduct.description ? <p>{currentProduct.description}</p> : null}
      </div>

      <div className="vertical-line"></div>

      <div className='product-features'>
        {currentProduct.features ? currentProduct.features.map((feature, i) => (
          <ul key={i}>✓ {feature.feature}: {feature.value}</ul>
        )) : null}
      </div>

    </div>
  );
};

export default ProductOverview;