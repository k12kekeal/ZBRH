import React from "react";
import Style from "./Style.jsx";

const StyleSelector = ({ value, changeStyle, currentProduct, styles }) => {
  return (
    <div>
      {styles.map(style => (
        <ul>
          <Style changeStyle={changeStyle} style={style.results} />
        </ul>
      ))}
      <h4>{currentProduct.category}</h4>
      <h3>{currentProduct.name}</h3>
      <p>${currentProduct.default_price}</p>
    </div>
  );
};

export default StyleSelector;
