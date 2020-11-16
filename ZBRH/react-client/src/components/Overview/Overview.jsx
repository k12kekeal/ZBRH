import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Overview = ({value}) => {
  return (
    <div>
      <h3>Hi</h3>
      <div>
        <Rating name="half-rating" defaultValue={2.5} precision={0.25} />
      </div>
    </div>
  );
};

export default Overview;
