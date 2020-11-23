import React from 'react';
import 'bootstrap';
import axios from 'axios';

//Import Components
import RelatedProductList from './RelatedProductList.jsx';
import RelatedProduct from './RelatedProduct.jsx';
import OutfitList from './OutfitList.jsx';
import Outfit from './Outfit.jsx';

//Import methods with axios GET requests
import {
  getRelatedProductIdsRequest,
  getRelatedProductDataRequest,
} from '../../Requests.jsx';

//testing dummy data
import example from '../../exampleData.js';




class ProductComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: props.currentProduct,
      relatedProductIds: [],
      relatedProductData: [],
      outfit: example,
      isLoading: true,
    };

    this.getRelatedProductIds = this.getRelatedProductIds.bind(this);
    this.getRelatedProductData = this.getRelatedProductData.bind(this);
  }

  // possibly improved version...WIP
  componentDidMount() {
    console.log('componentDidMount starting...');
    console.log('This is state in ProductComparison: ', this.state);
    console.log('This is props in ProductComparison: ', this.props);

    let currProductId = this.state.currentProduct.id;

    //GETs an array of id numbers for products related to the current product in state
    axios
      .get(`http://3.21.164.220/products/${currProductId}/related`)
      .then((response) => {
        console.log('here are the id_s of related products: ', response.data);
        console.log('setting state of relatedProductIds');
        this.setState({ relatedProductIds: response.data });

        //creates an array of promises (GET requests for individual product data for each related product id)
        let arrGetRelatedProductDataPromises = [];
        for (var i = 0; i < this.state.relatedProductIds.length; i++) {
          arrGetRelatedProductDataPromises.push(
            axios.get(`http://3.21.164.220/products/${response.data[i]}`)
          );
        }
        return Promise.all(arrGetRelatedProductDataPromises);
      })
      //uses the promisified array of related product data, set state
      .then((arrRelatedProductDataPromise) => {
        console.log('This is result of Promise.all', arrRelatedProductDataPromise);

        let newRelatedProductDataState = arrRelatedProductDataPromise.map(
          function (currProduct) {
            return currProduct.data;
          }
        );

        this.setState({ relatedProductData: newRelatedProductDataState });

        //creates an array of promises (GET requests for individual product styles for each related product id)
        let arrGetRelatedProductStylesPromises = [];
        for (var i = 0; i < this.state.relatedProductIds.length; i++) {
          arrGetRelatedProductStylesPromises.push(
            axios.get(`http://3.21.164.220/products/${this.state.relatedProductIds[i]}/styles`)
          );
        }
        return Promise.all(arrGetRelatedProductStylesPromises);
      })
      .then((arrRelatedProductStyles) => {
        console.log('So...this is state now: ', this.state);
        console.log('And this is related product styles:', arrRelatedProductStyles);


        let newArrRelatedProductStyles = arrRelatedProductStyles.map(
          function (currProduct) {
            return currProduct.data;
          }
        );
        console.log('Individual styles: ', newArrRelatedProductStyles);

        let newRelatedProductDataWithStyles = this.state.relatedProductData.map(function(currProduct) {

          for (var i = 0; i < newArrRelatedProductStyles.length; i++) {

            //if the current product and the related product have the same id's then....
            if (currProduct.id.toString() === newArrRelatedProductStyles[i].product_id) {
              //sets first image url found
              currProduct.styles = newArrRelatedProductStyles[i].results[0].photos[0].url;

              //for loop to search for sale price (if any)
              for (var j = 0; j < newArrRelatedProductStyles[i].results.length; j++) {
                if (newArrRelatedProductStyles[i].results[j].sale_price !== '0') {
                  currProduct.salePrice = newArrRelatedProductStyles[i].results[j].sale_price;
                }
              }

              return currProduct;
            }
          }
        });

        this.setState({ relatedProductData: newRelatedProductDataWithStyles });
        this.setState({ isLoading: false });

      })

      .catch((err) => {
        console.log(err);
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
    if (this.state.isLoading) {
      return <div>We are still loading....</div>;
    } else {

      return (
        <div>
          <br></br>

          <br></br>
          {/*
            <RelatedProductList
              relatedProductData={this.state.relatedProductData} handleSelectProduct={this.props.handleSelectProduct}
            />
          */}
          <br></br>

          <br></br>
          <br></br>
          <br></br>
          {<OutfitList outfitData={this.state.outfit} addCurrProduct={this.state.currentProduct}/>}
        </div>
      );
    }



  }
}


export default ProductComparison;
