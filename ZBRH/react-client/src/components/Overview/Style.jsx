import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

const Style = ({ changeStyle, style, currentStyle }) => (
  <>
    <Avatar
      alt={style.name}
      src={style.photos[0].thumbnail_url}
      className="styles"
      onClick={e => {
        e.preventDefault();
        changeStyle(style.style_id - 1, e);
      }}
    />
    <p>
      {currentStyle.style_id === style.id ? style.name : null}
      {/* TODO: make this render dynamically if this style matches currentStyle */}
    </p>
  </>
);

export default Style;
