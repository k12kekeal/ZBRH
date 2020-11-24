import React from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import 'bootstrap';
import axios from 'axios';

class AddOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleRelatedProduct: this.props.singleRelatedProduct,
      imageLink: this.props.singleRelatedProduct.styles

    };

    this.handlePlusClick = this.handlePlusClick.bind(this);

  }

  componentDidMount() {
    console.log('THIS IS STATE', this.state.singleRelatedProduct.styles);


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

  handlePlusClick() {
    console.log('Plus was clicked');
    this.props.addOutfitToList(this.state.singleRelatedProduct);
  }



  render() {
    //if statement determines whether to render default price or default price AND sale price
    let displayPrice = (<p>${this.state.singleRelatedProduct.default_price}</p>);

    if (this.state.singleRelatedProduct.salePrice) {
      displayPrice = (<p><del>${this.state.singleRelatedProduct.default_price}</del><em style={{color: 'red'}}> ${this.state.singleRelatedProduct.salePrice}</em> </p>);
    }

    return (
      <div className="col-md-4">
        <div className="card card-body">
          <div className="overlay">
            <img className="btn btn-primary" className="overlayImage" src='./square-plus.svg' role="button" onClick={this.handlePlusClick} data-toggle="modal" data-target="#exampleModal3"></img>
          </div>
          {/* EDIT IMAGE SRC BELOW */}
          <img className="img-fluid" src={this.state.imageLink} role="button" onClick={this.handleCardClick} id="setHeight"></img>
          <h3>{this.state.singleRelatedProduct.category}</h3>
          <p>{this.state.singleRelatedProduct.name}</p>
          {displayPrice}
        </div>

        {/*<div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel3">Do y liek?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                add this cool outfit?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
    </div>*/}

      </div>



    );
  }
}




export default AddOutfit;
