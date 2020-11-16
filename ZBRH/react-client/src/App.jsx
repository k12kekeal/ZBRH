import React from 'react';
import 'bootstrap';

//import 'bootstrap/dist/css/bootstrap.min.css';

import Overview from './components/Overview/Overview.jsx';
import ProductComparison from './components/ProductComparison/ProductComparison.jsx';
import QuestionsAndAnswers from './components/Q&A/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import axios from 'axios';
import exampleData from './exampleData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: exampleData[0],
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios
      .get('http://3.21.164.220/products')
      .then(response => console.log(response.data))
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
        <Overview value={2.25} />
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
