import React from 'react';
import 'bootstrap';
import axios from 'axios';

//Import Components
import RelatedProductList from './RelatedProductList.jsx';
import RelatedProduct from './RelatedProduct.jsx';
import OutfitList from './OutfitList.jsx';
import Outfit from './Outfit.jsx';

//Import methods with axios GET requests
import { getRelatedProductIdsRequest, getRelatedProductDataRequest } from '../../Requests.jsx';

//delete below after testing purposes
import { Card, Carousel } from 'react-bootstrap';
import $ from "jquery";



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

  // possibly improved version...WIP
  componentDidMount(){
    console.log('componentDidMount starting...');
    console.log('This is state in ProductComparison: ', this.state);
    console.log('This is props in ProductComparison: ', this.props);

    let currProductId = this.state.currentProduct.id;

    axios.get(`http://3.21.164.220/products/${currProductId}/related`)
    .then((response) => {
      console.log('here are the id_s of related products: ', response.data);
      console.log('setting state of relatedProductIds');
      this.setState({ relatedProductIds: response.data });

      let arrGetRelatedProductDataPromises = [];
      for (var i = 0; i < this.state.relatedProductIds.length; i++){
        arrGetRelatedProductDataPromises.push(axios.get(`http://3.21.164.220/products/${response.data[i]}`))
      }
      return  Promise.all(arrGetRelatedProductDataPromises)
    })
    .then((arrRelatedProductDataPromise)=>{
      console.log("This is result of Promise.all", arrRelatedProductDataPromise)

      let newRelatedProductDataState = arrRelatedProductDataPromise.map(function(currProduct){
        return currProduct.data
      })

      this.setState({relatedProductData: newRelatedProductDataState})
    })
    .then(()=>{
      console.log("So...this is state now: ", this.state)
    })
    .catch((err) => {
      console.log(err);

    });


  //   axios
  // .get('https://maps.googleapis.com/maps/api/geocode/json?&address=' + this.props.p1)
  // .then(response => {
  //   this.setState({ p1Location: response.data });
  //   return axios.get('https://maps.googleapis.com/maps/api/geocode/json?&address=' + this.props.p2);
  // })
  // .then(response => {
  //   this.setState({ p2Location: response.data });
  //   return axios.get('https://maps.googleapis.com/maps/api/geocode/json?&address=' + this.props.p3);
  // })
  // .then(response => {
  //   this.setState({ p3Location: response.data });
  // }).catch(error => console.log(error.response));




    console.log('componentDidMount has ended...');
  }




  //IMPROVE - RACING POSSIBILITY? ...rename variables to something other than "data"
  // componentDidMount() {
  //   console.log('componentDidMount starting...');
  //   console.log('This is state in ProductComparison: ', this.state);
  //   console.log('This is props in ProductComparison: ', this.props);

  //   this.getRelatedProductIds(this.state.currentProduct.id, (err, data) => {
  //     if (err) { console.log(err); } else {
  //       console.log('setting state soon');
  //       this.setState({ relatedProductIds: data });

  //       this.getRelatedProductData(this.state.relatedProductIds, (err2, data2) => {
  //         if (err2) { console.log('we have err2', err2); } else {
  //           console.log('setting state again');
  //           this.setState({ relatedProductData: data2 });
  //         }
  //       });


  //     }
  //   });
  //   console.log('componentDidMount has ended...');
  // }

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

    {    <RelatedProductList relatedProductData={this.state.relatedProductData} />  }


        {/* <p>{console.log("inside render: ", this.state.currentProduct)}</p>
       */}

        <br></br>
        {/*   <OutfitList />    */}
      </div>
    );
  }


}


// class ProductComparison extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 0 };
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