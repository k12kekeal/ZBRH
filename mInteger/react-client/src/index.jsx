import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import data from './dummy_data.js';
import TransactionList from './components/TransactionList.jsx';

const App = () => (
  <div>
    <h1>mInteger</h1>
    <div className="app">
      <TransactionList />

      <div className="category">
        <h3>Budget Categories</h3>
        <div className="category-list">
          <div className="category-data">Food</div>
          <div className="category-data">Entertainment</div>
          <div className="category-data">Transportation</div>
          <div className="category-data">Rent</div>
          <div className="category-data">Bills</div>
        </div>
          <div className="category-form">
            <div className="category-input">
            <input
              type="text"
              placeholder="Budget Category"
            />
            <input
              type="number"
              placeholder="Target Budget"
            />
            </div>
            <button>+</button>
          </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
