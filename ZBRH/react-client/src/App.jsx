import React from 'react';
import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from './components/Overview/Overview.jsx';
import ProductComparison from './components/ProductComparison/ProductComparison.jsx';
import QuestionsAndAnswers from './components/Q&A/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import axios from 'axios';

import { getProducts, getProducts2 } from './Requests.jsx';
// const getProducts = require('./Requests.jsx')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {value: 2.5},
    };
  }

  componentDidMount() {
    getProducts();
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello  {name}
        </h1>
        {/* <button type="button" class="btn btn-primary">
          This is a  bootstrap button
        </button> */}
        <Overview value = {this.state.currentProduct.value}/>
        {/* <ProductComparison />
        <QuestionsAndAnswers />
        <RatingsAndReviews /> */}
      </>
    );
  }
}

export default App;