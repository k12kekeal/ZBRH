import React from 'react';
import 'bootstrap';

import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';

import Overview from './components/Overview/Overview.jsx';
import ProductComparison from './components/ProductComparison/ProductComparison.jsx';
import QuestionsAndAnswers from './components/Q&A/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import axios from 'axios';
import exampleData from './exampleData';




import { getProducts, getProducts2 } from './Requests.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: exampleData[0],
    };

    this.toggleDarkLight = this.toggleDarkLight.bind(this)
  }

  componentDidMount() {
    getProducts();



  }

  toggleDarkLight() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          WELCOME TO ZBRH  {name}
        </h1>
        <button type="button" class="btn btn-primary" onClick={this.toggleDarkLight}>
          Dark/Light Toggle
        </button>
        <Overview />
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