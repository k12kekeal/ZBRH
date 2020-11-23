import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { AppBar, Toolbar, } from '@material-ui/core'; <= if we wanna add a search bar
import $ from 'jquery';
import axios from 'axios';

import Overview from './components/Overview/Overview.jsx';
import ProductComparison from './components/ProductComparison/ProductComparison.jsx';
import QuestionsAndAnswers from './components/Q&A/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import exampleData from './exampleData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: exampleData[0],
      avgRating: 3.75,
      reviewNum: 0
    };
    this.getProduct = this.getProduct.bind(this);
    this.toggleDarkLight = this.toggleDarkLight.bind(this);
  }

  componentDidMount() {
    this.getProduct(1);
  }

  getProduct(productId, e) {
    if (e) {
      e.preventDefault();
    }
    axios.get(`http://3.21.164.220/products/${productId}`)
      .then((response) =>
        this.setState({
          currentProduct: response.data,
        })
      )
      .catch((err) => console.log(err));
  }
  toggleDarkLight() {
    var element = document.body;
    element.classList.toggle('dark-mode');
  }

  render() {
    return (
      <>
        <h1>
          WELCOME TO ZBRH, HRATX52!  {name}
        </h1>
        <button type="button" className="btn btn-secondary" onClick={this.toggleDarkLight}>
          Dark/Light Toggle
        </button>
        <Overview
          reviewNum={this.state.reviewNum}
          currentProduct={this.state.currentProduct}
          avgRating={this.state.avgRating}
          getProduct={this.getProduct}
          reviews = {[1, 2, 3]}
        />
        <ProductComparison currentProduct={this.state.currentProduct} />
        {/*
        <QuestionsAndAnswers />
        <RatingsAndReviews /> */}
        {/*console.log("This is the current product from App.jsx", this.state.currentProduct)*/}




      </>
    );
  }
}

export default App;
