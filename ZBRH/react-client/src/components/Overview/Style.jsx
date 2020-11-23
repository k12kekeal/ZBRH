import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

const Style = ({ changeStyle, style, currentStyle }) => (
  <Badge color="primary" badgeContent={currentStyle === style ? '✓' : null}>
    <Avatar
      alt={style.name}
      src={style.photos[0].thumbnail_url}
      className="styles"
      onClick={e => {
        e.preventDefault();
        changeStyle(style.style_id - 1, e);
      }}
    />
  </Badge>
);

export default Style;