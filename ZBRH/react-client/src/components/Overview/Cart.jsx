import React from 'react';

// TODO: add cart button functionality
const Cart = () => (
  <div>
    <button>Add to Cart</button>
    <select className="select" name="size">
      {/* TODO: for loop to create option for each available size */}
      <option defaultValue="">SELECT SIZE</option>
      <option value="xs">XS</option>
      <option value="s">S</option>
      <option value="m">M</option>
    </select>
    <select className="select" name="quantity">
      {/* TODO: for loop to create an option up to available quantity */}
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>
);

export default Cart;
