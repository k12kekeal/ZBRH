import axios from 'axios';
//OVERVIEW

const getProducts = () => {
  axios.get('http://3.21.164.220/products')
    .then(response => console.log('here are the products: ', response.data))
    .catch(err => console.log(err));
};

const getCart = () => {
  axios.get('http://3.21.164.220/cart')
    .then(response => console.log('here is the cart: ', response.data))
    .catch(err => console.log(err));
};

const getProduct = () => {
  axios.get('http://3.21.164.220/:product_id')
    .then(response => console.log('here is the product:', response.data)
      .catch(err => console.log(err)));
};

const getStyles = () => {
  axios.get('http://3.21.164.220/:product_id/styles')
    .then(response => console.log('here are the product styles: ', response.data))
    .catch(err => console.log(err));
};

//PRODUCT COMPARISON

//QUESTIONS AND ANSWERS

//RATINGS AND REVIEWS

export { getProducts, getCart, getProduct, getStyles };

// module.exports = { getProducts }