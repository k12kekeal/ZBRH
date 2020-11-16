import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StyleSelector from './StyleSelector.jsx';

const Overview = ({ value, getProduct, product }) => {
  return (
    <div>
      <h3 id="product-overview">Product Overview</h3>
      <div>
        <Rating
          id="product-overview-rating"
          name="quarter-rating"
          value={value}
          defaultValue={2.5}
          precision={0.25}
        /> <a href="#ratings-and-reviews">Read all [#] reviews</a>
        <StyleSelector getProduct = {getProduct}/>
      </div>
    </div>
  );
};

export default Overview;
