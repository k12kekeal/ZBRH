import axios from 'axios';
//OVERVIEW

const getProducts = () => {
  axios.get('http://3.21.164.220/products')
    .then(response => console.log('here are the products: ', response))
    .catch(err => console.log(err));
};

const getCart = () => {
  axios.get('http://3.21.164.220/cart')
    .then(response => console.log('here is the cart: ', response))
    .catch(err => console.log(err));
};

const getProduct = () => {
  axios.get('http://3.21.164.220/:product_id')
    .then(response => console.log('here is the product:', response)
      .catch(err => console.log(err)));
};

const getStyles = () => {
  axios.get('http://3.21.164.220/:product_id')
    .then(response => console.log('here are the product styles: ', response))
    .catch(err => console.log(err));
};

//PRODUCT COMPARISON

// const getRelatedProducts = (productIdArr) => {

//   for (var i = 0; i < productIdArr; i++) {

//     axios.get('http://3.21.164.220/:product_id')
//       .then(response => console.log('here is the product:', response)
//         .catch(err => console.log(err)));
//   };


// }



//QUESTIONS AND ANSWERS

//RATINGS AND REVIEWS

export { getProducts, getCart, getProduct, getStyles };

// module.exports = { getProducts }