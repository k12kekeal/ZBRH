import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Overview = ({value}) => {
  return (
    <div>
      <h3 id="product-overview">Product Overview</h3>
      <div>
        <Rating id="product-overview-rating" name="quarter-rating" value = {value} defaultValue={2.5} precision={0.25} />
      </div>
    </div>
  );
};

export default Overview;
