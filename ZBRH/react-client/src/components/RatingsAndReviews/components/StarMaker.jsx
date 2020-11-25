import React from 'react';
import Rating from '@material-ui/lab/Rating';

//Import StarMaker and pass it a number with the key of "rating"
const StarMaker = (props) => (
  <Rating
    name="simple-controlled"
    value={props.rating}
    precision={0.2}
    size="small"
    readOnly
  />
);

export default StarMaker;
