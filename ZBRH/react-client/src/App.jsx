import React from 'react';
import 'bootstrap';

//import 'bootstrap/dist/css/bootstrap.min.css';

import Overview from './components/Overview/Overview.jsx';
import ProductComparison from './components/ProductComparison/ProductComparison.jsx';
import QuestionsAndAnswers from './components/Q&A/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import axios from 'axios';
import exampleData from './exampleData';

// TODO: calculate average rating of current product and add it to state to pass down to overview
// TODO: get # of reviews to pass to overview

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: exampleData[0],
    };
    this.getProducts = this.getProducts.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {}

  getProducts() {
    axios
      .get('http://3.21.164.220/products')
      .then((response) => {
        this.setState({
          products: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  getProduct(productId, e) {
    e.preventDefault();
    axios.get(`http://3.21.164.220/products/${productId}`)
      .then((response) =>
        this.setState({
          currentProduct: response.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>WELCOME TO ZBRH {name}</h1>
        {/* <button type="button" class="btn btn-primary">
          This is a  bootstrap button
        </button> */}
        <Overview
          currentProduct={this.state.currentProduct}
          value={2.25}
          getProduct={this.getProduct}
          reviews = {[1, 2, 3]}
        />
        {/* <ProductComparison currentProduct={this.state.currentProduct} /> */}
        {/*
        <QuestionsAndAnswers />
        <RatingsAndReviews /> */}
        {/*console.log("This is the current product from App.jsx", this.state.currentProduct)*/}
      </>
    );
  }
}

export default App;
