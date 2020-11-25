import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import 'bootstrap';

import Outfit from './Outfit.jsx';
import AddOutfit from './AddOutfit.jsx';



class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOutfitList: this.props.outfitData,
      currProductToAdd: this.props.addCurrProduct,
    };


  }

  componentDidUpdate(prevProps) {
    if (this.props.outfitData !== prevProps.outfitData ) {
      this.setState({userOutfitList: this.props.outfitData});
    }
    if (this.props.addCurrProduct !== prevProps.addCurrProduct ) {
      this.setState({currProductToAdd: this.props.addCurrProduct});
    }
  }


  //This is not getting called...will use wonky keys for now
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.userOutfitList !== prevProps.userOutfitList) {
  //       this.setState({userOutfitList: this.props.outfitData});
  //       console.warn("component did update in outfit list");
  //   }
  //   if (this.props.currProductToAdd !== prevProps.currProductToAdd) {
  //     this.setState({currProductToAdd: this.props.addCurrProduct});
  //     console.warn("component did update in outfit list");
  // }
  // }



  render() {

    if (Object.keys(this.state.currProductToAdd).length > 0) {
      console.warn('in IF');
      return (<div>
        <header id="RelatedProductListHeader">YOUR OUTFIT</header>

        <div className="container text-center my-3">

          <div id="recipeCarousel2" className="carousel slide w-100" data-ride="false" data-interval="false" data-pause="hover">
            <div className="carousel-inner w-100" role="listbox">

              {/*Below is the active current product*/

                < div className="carousel-item active" key={'active'}>
                  { /*console.log('single item', this.props.addCurrProduct.name)*/}
                  <AddOutfit singleRelatedProduct={this.props.addCurrProduct} addOutfitToList={this.props.addOutfitToListInState} removeCurrProductToAddInOutfitList={this.props.removeCurrProductToAddAtTop}/>
                </div>


              }

              {/*console.log('this is this.props in Outfitlist', this.props)*/}

              {
                /*Below are the items in Outfit*/
                this.state.userOutfitList.map(function (singleRelatedProduct, index) {
                  //below if statement sets a placeholder image if the API returned null for an image link
                  if (singleRelatedProduct.styles === null) {
                    singleRelatedProduct.styles = './imageNotFound.png';
                  }
                  //below if/ else statement creates active and inactive carousel items (necessary for bootstrap carousel)


                  return (
                    <div className="carousel-item" key={index} >
                      { /*console.log('single item', singleRelatedProduct.name)*/}
                      < Outfit singleRelatedProduct={singleRelatedProduct}/>
                    </div>
                  );



                })
              }

              <a className="carousel-control-prev w-auto" href="#recipeCarousel2" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next w-auto" href="#recipeCarousel2" role="button" data-slide="next">
                <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <h5 className="mt-2"></h5>
        </div>



      </div >);
    } else {
      console.warn('in ELSE');
      return (<div>
        <header id="RelatedProductListHeader">YOUR OUTFIT</header>

        <div className="container text-center my-3">

          <div id="recipeCarousel2" className="carousel slide w-100" data-ride="false" data-interval="false" data-pause="hover">
            <div className="carousel-inner w-100" role="listbox">

              {
                /*Below are the items in Outfit*/
                this.state.userOutfitList.map(function (singleRelatedProduct, index) {
                  //below if statement sets a placeholder image if the API returned null for an image link
                  if (singleRelatedProduct.styles === null) {
                    singleRelatedProduct.styles = './imageNotFound.png';
                  }
                  //below if/ else statement creates active and inactive carousel items (necessary for bootstrap carousel)
                  if (index === 0) {
                    console.log('index is: ', index);

                    return (
                      < div className="carousel-item active" key={index}>
                        { console.log('single item', singleRelatedProduct.name)}
                        <Outfit singleRelatedProduct={singleRelatedProduct} />
                      </div>
                    );
                  } else {

                    return (
                      <div className="carousel-item" key={index} >
                        { console.log('single item', singleRelatedProduct.name)}
                        < Outfit singleRelatedProduct={singleRelatedProduct}/>
                      </div>
                    );

                  }




                })
              }

              <a className="carousel-control-prev w-auto" href="#recipeCarousel2" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next w-auto" href="#recipeCarousel2" role="button" data-slide="next">
                <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <h5 className="mt-2"></h5>
        </div>



      </div >);
    }

  }
}
/*

 if (index === 0) {
                return (

                  < div class="carousel-item active" key={index}>
                    { console.log("single item", singleRelatedProduct.name)}
                    <RelatedProduct singleRelatedProduct={singleRelatedProduct} />
                  </div>
                )
              }

              else {
                return

                (<div class="carousel-item" key={index} >
                  { console.log("single item", singleRelatedProduct.name)}
                  < RelatedProduct singleRelatedProduct={singleRelatedProduct} />
                </div>
                )
              }

*/


export default OutfitList;


