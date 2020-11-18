import React from "react";

const ProductOverview = ({ currentProduct }) => {
  return (
    <div>
      {currentProduct.slogan ? <h3>{currentProduct.slogan}</h3> : null}
      {currentProduct.description ? <p>{currentProduct.description}</p> : null}
      {/* <div>{currentProduct.features}</div> */}
    </div>
  );
};

export default ProductOverview;
