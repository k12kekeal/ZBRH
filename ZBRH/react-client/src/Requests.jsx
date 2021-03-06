import axios from 'axios';
//OVERVIEW

const getCart = () => {
  axios.get('http://3.21.164.220/cart')
    .then(response => console.log('here is the cart: ', response.data))
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

/*
FIX THIS!!!!

const getRelatedProductIdsAndDataRequest = (productId, setStateCb1, setStateCb2){
  axios.get(`http://3.21.164.220/products/${productId}/related`)
    .then((response) => {
      console.log('here are the id_s of related products: ', response.data);
      callback(null, response.data);
      return response.data;
    })
    .then((relatedProductsIdArr)=>{


    })
    .catch((err) => {
      console.log(err);
      callback(err, null);
    });

}
*/

//RATINGS AND REVIEWS

export {
  getCart,
  getRelatedProductIdsRequest, getRelatedProductDataRequest
};

// module.exports = { getProducts }