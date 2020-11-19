/* eslint-disable eqeqeq */
import React from 'react';
import Style from './Style.jsx';

const StyleSelector = ({
  value,
  changeStyle,
  currentProduct,
  styles,
  currentStyle,
}) => {
  return (
    <div>
      <div>
        {styles.map((style) => (
          <Style key={style.name} changeStyle={changeStyle} style={style} />
        ))}
      </div>
      <h4>{currentProduct.category}</h4>
      <h3>{currentProduct.name}</h3>
      {currentStyle.sale_price != 0 ? (
        <>
          <p style={{color: 'red'}}>${currentStyle.sale_price} </p> <p style={{textDecoration: 'line-through'}}>${currentStyle.original_price}</p>
        </>
      ) : (
        <p>${currentStyle.original_price}</p>

      )}
    </div>
  );
};

export default StyleSelector;
