//Product Comparison tests go here
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import React from 'react';
import { act } from 'react-dom/test-utils';
import ProductComparison from './ProductComparison';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<ProductComparison />, container);
  });
  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked   times');


});


