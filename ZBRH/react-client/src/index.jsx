import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import './styles.css';

//This will track user interactions
import InteractionsContext from './components/ProductComparison/InteractionsContext';
import handleStarClick from './components/ProductComparison/RelatedProduct.jsx';

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);