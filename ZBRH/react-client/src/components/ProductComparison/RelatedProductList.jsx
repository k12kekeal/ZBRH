import React from 'react';
import RelatedProduct from './RelatedProduct.jsx';
import { Card, Carousel } from 'react-bootstrap';




const RelatedProductList = (props) => {



  return (<div>
    <header id="RelatedProductListHeader">RELATED PRODUCTS</header>

    <Carousel >
      {console.log("this is props in relatedproductlist", props)}

      {
        props.relatedProductData.map(function (singleRelatedProduct) {
          return (
            <RelatedProduct singleRelatedProduct={singleRelatedProduct} />
          )
        })
      }

    </Carousel>
  </div>)
};

export default RelatedProductList;


