import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const Style = ({getProduct}) => (
  <Avatar onClick={(e) => getProduct(1, e)}/>
  // when style is clicked, it should change currentProduct to
);

export default Style;