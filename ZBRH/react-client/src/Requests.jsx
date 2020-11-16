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

const getRelatedProductIdsRequest = (productId, callback) => {

  axios.get(`http://3.21.164.220/products/${productId}/related`)
    .then((response) => {
      console.log('here are the id_s of related products: ', response.data);
      callback(null, response.data);
    })
    .catch((err) => {
      console.log(err);
      callback(err, null);

    });

};

const getRelatedProductDataRequest = (productIdArr, callback) => {
  let result = [];

  for (var i = 0; i < productIdArr.length; i++) {

    axios.get(`http://3.21.164.220/products/${productIdArr[i]}`)
      .then((response) => {
        console.log('Pushing object into array...');
        result.push(response.data);
      })
      .then(() => {
        if (result.length === productIdArr.length) {
          callback(null, result);
        }
      })
      .catch(err => console.log(err));


  }
};



//RATINGS AND REVIEWS

export {
  getProducts, getCart, getProduct, getStyles,
  getRelatedProductIdsRequest, getRelatedProductDataRequest
};

// module.exports = { getProducts }