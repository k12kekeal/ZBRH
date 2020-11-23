import React from 'react';

const Cart = ({currentSku, currentStyle, skuSelect}) => {

  var quantity = [];
  if (currentSku) {
    for (var i = 0; i <= Math.min(currentSku.quantity, 15); i++) {
      quantity.push(<option key={i} value={i}>{i}</option>);
    }
  }
  return (
    <div>
      {!currentSku ?
        <button>Add to Cart</button> :
        <button>Add to Cart</button>}
      <select
        className="select"
        name="size"
        onChange={e => {
          e.preventDefault();
          skuSelect(e.target.value, e);
        }}
      >
        <option value={0}>SELECT SIZE</option>
        {currentStyle.skus ? Object.keys(currentStyle.skus).map((skuNum, index) => (
          <option
            key={index}
            value={skuNum}>
            {currentStyle.skus[skuNum].size}
          </option>
        )) : console.log('no skus yet')
        }
      </select>
      <select
        className="select"
        name="quantity"
        disabled={!currentSku}>
        <option defaultValue="">-</option>
        {currentSku !== 0 ? quantity : null}
      </select>

    </div>
  );
};

export default Cart;
