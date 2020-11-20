import React from 'react';
import 'bootstrap';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

import Overview from './components/Overview/Overview.jsx';
import ProductComparison from './components/ProductComparison/ProductComparison.jsx';
import QuestionsAndAnswers from './components/Q&A/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import axios from 'axios';
import exampleData from './exampleData';

const OutfitList = () => (
  <div>
    <header id="nocard">YOUR OUTFIT</header>
    <Outfit />

  </div>
);

export default OutfitList;