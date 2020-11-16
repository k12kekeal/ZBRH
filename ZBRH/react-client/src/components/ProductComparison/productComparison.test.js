//Product Comparison tests go here
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import React from 'react';
import { act, isElement } from 'react-dom/test-utils';
import ProductComparison from './ProductComparison';
import { Card } from 'react-bootstrap';

/*
Testing recipe: https://reactjs.org/docs/testing-recipes.html
*/

let container;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  document.body.removeChild(container);
  container = null;
});

xit('renders a header for the module', () => {
  act(() => {
    ReactDOM.render(<ProductComparison />, container);
  });

  const header = container.querySelector('header');
  //console.log("This is header", header);
  expect(header.textContent).toBe('RELATED PRODUCTS');
});

xit('renders a card', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<ProductComparison />, container);
  });

  const card = document.getElementById('card');
  const cardtitle = document.getElementById('cardtitle');
  const cardtext = document.getElementById('cardtext');

  //CATEGORY
  console.log(document.getElementById('cardtext').innerHTML);

  //undefined
  console.log(document.getElementsByClassName('acard').innerHTML);

  //<div class="card-body" id="cardbody"><div class="card-title h5" id="cardtitle"></div><p class="card-text" id="cardtext">CATEGORY</p></div>
  console.log(card.innerHTML);

  expect(cardtext.innerHTML).toBe('CATEGORY');

  /*
  Nov 14, 2020 - For some reason, container.querySelector works but document.querySelector does not. I don't know why - both these methods should be Document methods.
  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

  Was unable to get access to <Card> using container.querySelector as was used for the <header></header> element in the previous test.  The work around is to set an id for every card and get access in this method.  This may prove a problem after I start rendering more cards...

  document.getElementsByClassName() does not work with React components because to set class name, you use className="" instead of class=""

  */



  // expect(label.textContent).toBe('You clicked 0 times');
  // expect(document.title).toBe('You clicked 0 times');


});



