//comment 11.29.2020
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
      //used for RelatedProductList component
      currentProduct: props.currentProduct,
      relatedProductIds: [],
      relatedProductData: [],

      //used for OutfitList component
      userOutfitList: example,
      isAdded: false,

      //used to prevent loading before props are fully passed
      isLoading: true,
      isOutfitLoading: true,
    };

    this.getRelatedProductIds = this.getRelatedProductIds.bind(this);
    this.getRelatedProductData = this.getRelatedProductData.bind(this);
    this.removeCurrProductToAdd = this.removeCurrProductToAdd.bind(this);
    this.addOutfitToListInPCState = this.addOutfitToListInPCState.bind(this);
    this.initialRender = this.initialRender.bind(this);
    this.handleXClick = this.handleXClick.bind(this);
    this.initialOutfitRender = this.initialOutfitRender.bind(this);

  }


  componentDidUpdate(prevProp, prevState) {

    if (this.props.currentProduct !== prevProp.currentProduct) {
      this.setState({
        currentProduct: this.props.currentProduct,
        isAdded: false
      });
      this.initialRender();
    }


  }

  handleXClick(productToRemove, e) {
    let updatedUserOutfitListWithRemovedProduct = this.state.userOutfitList.filter(function(currProd) {
      console.log(currProd);
      return currProd.id !== productToRemove.id;

    });

    // let empty = {
    //   'id': 0,
    //   'name': '',
    //   'slogan': '',
    //   'description': '',
    //   'category': '',
    //   'default_price': ''
    // }

    // while(updatedUserOutfitListWithRemovedProduct.length < 3){
    //   updatedUserOutfitListWithRemovedProduct.push(empty)
    // }

    console.log(updatedUserOutfitListWithRemovedProduct);

    this.setState({userOutfitList: updatedUserOutfitListWithRemovedProduct});

  }



  removeCurrProductToAdd() {
    console.warn('removeCurrProdcutToAdd is being called');
    console.warn('before', this.state);
    this.setState({isAdded: true});
    console.warn('after', this.state);
  }

  //passed → ProductComparison → OutfitList component
  addOutfitToListInPCState(userClickedItem, e) {
    //adds the outfit that user clicked into the array held in state
    let temp = [...this.state.userOutfitList];
    temp.push(userClickedItem);

    this.setState(
      { userOutfitList: temp,
        isAdded: true,
      });
  }



  componentDidMount() {
    console.log('componentDidMount starting...');
    //console.log('This is state in ProductComparison: ', this.state);
    //console.log('This is props in ProductComparison: ', this.props);

    this.initialOutfitRender();
    this.initialRender();

    console.log('componentDidMount has ended...');
  }

  initialRender() {
    let currProductId = this.state.currentProduct.id;

    //this setState prevents page from loading BEFORE props are fully passed down
    this.setState({ isLoading: true });

    //GETs an array of id numbers for products related to the current product in state
    axios
      .get(`http://3.21.164.220/products/${currProductId}/related`)
      .then((response) => {
        //console.log('here are the id_s of related products: ', response.data);
        //console.log('setting state of relatedProductIds');
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
        //console.log('This is result of Promise.all', arrRelatedProductDataPromise);

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
        //console.log('So...this is state now: ', this.state);
        //console.log('And this is related product styles:', arrRelatedProductStyles);


        let newArrRelatedProductStyles = arrRelatedProductStyles.map(
          function (currProduct) {
            return currProduct.data;
          }
        );
        //console.log('Individual styles: ', newArrRelatedProductStyles);

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

    //console.log('This is state in ProductComparison: ', this.state);

  }


  initialOutfitRender() {
    //loops through userOutfitList, grabs all ids and searches up styles
    let arrGetUserOutfitProductStylesPromises = [];


    for (var j = 0; j < this.state.userOutfitList.length; j++) {
      arrGetUserOutfitProductStylesPromises.push(
        axios.get(`http://3.21.164.220/products/${this.state.userOutfitList[j].id}/styles`)
      );
    }

    Promise.all(arrGetUserOutfitProductStylesPromises)
      .then((arrUserOutfitProductStyles)=> {

        //maps through the userOutfitList in state and adds an image url to each object
        let updatedUserOutfitListWIthImages = this.state.userOutfitList.map(function(currOutfit) {

          //loops through the styles data received through previous GET request
          for (var i = 0; i < arrUserOutfitProductStyles.length; i++) {

            //NOTE: product_id returned from styles GET request is a STRING not a number
            if (arrUserOutfitProductStyles[i].data.product_id === currOutfit.id.toString()) {
              currOutfit.image = arrUserOutfitProductStyles[i].data.results[0].photos[0].url;
            }
          }
          return currOutfit;
        }, this);

        this.setState({ isOutfitLoading: false });
      })
      .catch((err)=>{ console.warn(err); });


  }

  //passed to RelatedProductList component
  getRelatedProductIds(productId, callback) {
    getRelatedProductIdsRequest(productId, callback);
  }

  getRelatedProductData(productIdArr, callback) {
    getRelatedProductDataRequest(productIdArr, callback);
  }


  render() {
    if (this.state.isLoading || this.state.isOutfitLoading) {
      return <div>We are still loading....</div>;
    } else {

      return (
        <div>
          <br></br>

          <br></br>
          {
            <RelatedProductList
              relatedProductData={this.state.relatedProductData}
              handleSelectProduct={this.props.handleSelectProduct}
              currProductToCompare={this.state.currentProduct}
            />
          }
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {<OutfitList
            outfitData={this.state.userOutfitList}
            addCurrProduct={this.state.currentProduct}
            isAdded={this.state.isAdded}

            addOutfitToListInState={this.addOutfitToListInPCState}
            removeCurrProductToAddAtTop={this.removeCurrProductToAdd}
            handleXClick={this.handleXClick}/>}
          <br></br>
          <br></br>
        </div>
      );
    }



  }
}


export default ProductComparison;
