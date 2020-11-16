import React from 'react';

//Import Components
import RelatedProductList from './RelatedProductList.jsx';
import RelatedProduct from './RelatedProduct.jsx';
import OutfitList from './OutfitList.jsx';
import Outfit from './Outfit.jsx';

//Import methods with axios GET requests
import { getRelatedProductIdsRequest, getRelatedProductDataRequest } from '../../Requests.jsx';

import { Card, Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


class ProductComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: props.currentProduct,
      relatedProductIds: [],
      relatedProductData: [],
      outFit: []

    };
    //this.handleClick = this.handleClick.bind(this);
    this.getRelatedProductIds = this.getRelatedProductIds.bind(this);
    this.getRelatedProductData = this.getRelatedProductData.bind(this);

  }

  componentDidMount() {
    console.log('componentDidMount starting...');
    console.log('This is state in ProductComparison: ', this.state);
    console.log('This is props in ProductComparison: ', this.props);

    this.getRelatedProductIds(this.state.currentProduct.id, (err, data) => {
      if (err) { console.log(err); } else {
        console.log('setting state soon');
        this.setState({ relatedProductIds: data });

        this.getRelatedProductData(this.state.relatedProductIds, (err2, data2) => {
          if (err2) { console.log('we have err2', err2); } else {
            console.log('setting state again');
            this.setState({ relatedProductData: data2 });
          }
        });


      }
    });



    console.log('componentDidMount has ended...');
  }

  // componentDidUpdate() {
  //   document.title = `You clicked ${this.state.count} times`;
  // }

  getRelatedProductIds(productId, callback) {
    getRelatedProductIdsRequest(productId, callback);
  }

  getRelatedProductData(productIdArr, callback) {
    getRelatedProductDataRequest(productIdArr, callback);
  }

  render() {
    return (
      <div>
        <br></br>

        <RelatedProductList relatedProductData={this.state.relatedProductData} />

        {/* <p>{console.log("inside render: ", this.state.currentProduct)}</p>
       */}



        <br></br>
        {/*   <OutfitList />    */}
      </div>
    );
  }

  render() {
    <div>Hii....</div>;
  }
}


// class ProductComparison extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   handleClick() {
//     this.setState(state => ({
//       count: state.count + 1,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.handleClick}>
//           Click me
//         </button>
//       </div>
//     );
//   }

// }

export default ProductComparison;