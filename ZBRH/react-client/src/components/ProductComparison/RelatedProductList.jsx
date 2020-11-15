import React from "react";
import RelatedProduct from './RelatedProduct.jsx';
import { Card, Carousel } from 'react-bootstrap';

const RelatedProductList = (props) => (
  <div>
    <header id="RelatedProductListHeader">RELATED PRODUCTS</header>
    <RelatedProduct />
  </div>
);

export default RelatedProductList;