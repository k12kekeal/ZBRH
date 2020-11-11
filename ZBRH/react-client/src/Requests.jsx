import axios from 'axios';
//OVERVIEW

const getProducts = () => {
  axios.get('http://3.21.164.220/products')
    .then(response => console.log("here's the response: ", response))
    .catch(err => console.log(err));
}

const getProducts2 = () => {
  axios.get('http://3.21.164.220/products')
    .then(response => console.log("here's the response: ", response))
    .catch(err => console.log(err));
}

//PRODUCT COMPARISON

//QUESTIONS AND ANSWERS

//RATINGS AND REVIEWS

export { getProducts, getProducts2 };

// module.exports = { getProducts }