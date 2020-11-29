//comment 11.29.2020
import React from 'react';
import RelatedProduct from './RelatedProduct.jsx';
import { Card, Carousel } from 'react-bootstrap';
import 'bootstrap';




class RelatedProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }


  render() {

    return (<div>
      <header id="RelatedProductListHeader">RELATED PRODUCTS</header>

      <div className="container text-center my-3">

        <div id="recipeCarousel" className="carousel slide w-100" data-ride="false" data-interval="false" data-pause="hover">
          <div className="carousel-inner w-100" role="listbox">



            {/*console.log('this is props in relatedproductlist', this.props)*/}

            {
              this.props.relatedProductData.map(function (singleRelatedProduct, index) {
                //below if statement sets a placeholder image if the API returned null for an image link
                if (singleRelatedProduct.styles === null) {
                  singleRelatedProduct.styles = './imageNotFound.png';
                }
                //below if/ else statement creates active and inactive carousel items (necessary for bootstrap carousel)
                if (index === 0) {
                  //console.log('index is: ', index);

                  return (
                    < div className="carousel-item active" key={singleRelatedProduct.id}>

                      <RelatedProduct singleRelatedProduct={singleRelatedProduct} handleSelectProduct={this.props.handleSelectProduct} image={singleRelatedProduct.styles} currProductToCompare={this.props.currProductToCompare}/>
                    </div>
                  );
                } else {
                  //console.log('index is: ', index);

                  return (
                    <div className="carousel-item" key={singleRelatedProduct.id} >

                      < RelatedProduct singleRelatedProduct={singleRelatedProduct} handleSelectProduct={this.props.handleSelectProduct} image={singleRelatedProduct.styles} currProductToCompare={this.props.currProductToCompare}/>
                    </div>
                  );
                }


              }, this)
            }

            <a className="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
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


export default RelatedProductList;


