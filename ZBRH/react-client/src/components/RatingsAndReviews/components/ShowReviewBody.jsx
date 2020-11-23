import React from 'react';

const ShowReviewBody = (props) => (
  <div>
    {props.show === 'Show less' ? props.body : props.body.slice(0, 150) + '...'}
  </div>
);

export default ShowReviewBody;
