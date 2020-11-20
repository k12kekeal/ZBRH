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
      <h4>{currentProduct.category}</h4>
      <h3>{currentProduct.name}</h3>
      {currentStyle.sale_price != 0 ? (
        <p>
          <em style={{color: 'red'}}>${currentStyle.sale_price} </em> <small style={{textDecoration: 'line-through'}}>${currentStyle.original_price}</small>
        </p>
      ) : (
        <p>${currentStyle.original_price}</p>
      )}
      <p><b>Style {'>'} </b>{currentStyle.name}</p>
      <div>
        {styles.map((style) => (
          <Style
            key={style.name}
            changeStyle={changeStyle}
            style={style}
            currentStyle={currentStyle}/>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
