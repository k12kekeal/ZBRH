import React from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import 'bootstrap';
import axios from 'axios';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleRelatedProduct: this.props.singleRelatedProduct,
      imageLink: this.props.singleRelatedProduct.image,



    };

    // this.handleXClick = this.handleXClick.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.wrappedHandleXClick = this.wrappedHandleXClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.singleRelatedProduct !== prevProps.singleRelatedProduct) {
      this.setState({singleRelatedProduct: this.props.singleRelatedProduct});
    }

  }

  componentDidMount() {
    //console.log('THIS IS STATE', this.state.singleRelatedProduct.styles);

    $('#recipeCarousel2').carousel({
      pause: true,
      interval: false
    });

    $('.carousel .carousel-item').each(function () {
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }
    });


  }

  wrappedHandleXClick() {
    this.props.handleXClick(this.state.singleRelatedProduct);
  }

  handleCardClick() {
    console.log('card clicked...');
  }

  render() {


    //if statement determines whether to render default price or default price AND sale price
    let displayPrice = (<>${this.state.singleRelatedProduct.default_price}</>);

    if (this.state.singleRelatedProduct.salePrice) {
      displayPrice = (<><del>${this.state.singleRelatedProduct.default_price}</del><em style={{color: 'red'}}> ${this.state.singleRelatedProduct.salePrice}</em> </>);
    }

    return (
      <div className="col-md-4">
        <div className="card card-body">
          <div className="overlay">
            <img className="btn btn-primary" className="overlayImage" src='./xicon.svg' role="button" onClick={this.wrappedHandleXClick} data-toggle="modal" data-target="#exampleModal2"></img>
          </div>
          {/* EDIT IMAGE SRC BELOW */}
          <img className="img-fluid" src={this.state.imageLink} role="button" onClick={this.handleCardClick} id="setHeight"></img>
          <p style={{textAlign: 'left'}}>
            {this.state.singleRelatedProduct.category.toUpperCase()}
            <br></br>
            <b>{this.state.singleRelatedProduct.name}</b>
            <br></br>
            {displayPrice}
          </p>


        </div>

        {/* <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel2">Do y liek?</h5>
                    <button type="button" className="close" data-dismiss="modal"  aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  This is where stuff ..I don't know goes...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                </div>
              </div>
            </div>
           </div>*/
        }

      </div>



    );



  }
}






export default Outfit;
