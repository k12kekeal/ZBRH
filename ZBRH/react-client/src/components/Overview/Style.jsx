import React from "react";
import Avatar from "@material-ui/core/Avatar";

const Style = ({ changeStyle, style }) => (
  <div>
    <Avatar
      alt={style.name}
      src={style.photos[0].thumbnail_url}
    />
  </div>
  // TODO: when clicked, should set currentStyle to selected style
);

export default Style;
