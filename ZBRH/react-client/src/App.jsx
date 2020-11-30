//comment 11.29.2020
import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import Overview from './components/Overview/Overview.jsx';
import ProductComparison from './components/ProductComparison/ProductComparison.jsx';
import RatingReviewApp from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import exampleData from './exampleData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      avgRating: 3.75,
      reviewNum: 4,
      isLoading: true,
      keyValue: 1,
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
      .then(response => {
        var num = this.state.keyValue;
        num++;
        this.setState({
          currentProduct: response.data,
          keyValue: num,
          isLoading: false
        });
      })
      .catch((err) => console.log(err));
  }
  toggleDarkLight() {
    var element = document.body;
    element.classList.toggle('dark-mode');
  }

  render() {
    if (this.state.isLoading === true) {
      return (<div>is loading...</div>);
    } else {

      return (
        <>
          <h1>
            WELCOME TO ZBRH, HRATX52!
          </h1>
          {/* <button type="button" className="btn btn-secondary" onClick={this.toggleDarkLight}>
            Dark/Light Toggle
          </button> */}

          <Overview
            reviewNum={this.state.reviewNum}
            currentProduct={this.state.currentProduct}
            avgRating={this.state.avgRating}
            getProduct={this.getProduct}
            reviews = {[1, 2, 3]}
          />

          <ProductComparison
            currentProduct={this.state.currentProduct}
            handleSelectProduct={this.getProduct}/>

          <a id='ratings-and-reviews'><RatingReviewApp /></a>

        </>
      );

    }
  }
}

export default App;
