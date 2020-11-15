import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Overview = () => {
  return (
    <div>
      <h3>Hi</h3>
      <div>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
      </div>
    </div>
  );
};

export default Overview;
