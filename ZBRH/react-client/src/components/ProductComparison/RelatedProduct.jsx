import React from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import 'bootstrap';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';

import InteractionsContext from './InteractionsContext';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleRelatedProduct: this.props.singleRelatedProduct,
      imageLink: this.props.image,
      currProductToCompare: this.props.currProductToCompare

    };

    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  componentDidMount() {
    //console.log('THIS IS STATE', this.state.singleRelatedProduct.styles);


    $('#recipeCarousel').carousel({
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

  handleStarClick(event) {
    console.log('Star was clicked');

    return ({
      'Element': event.target.nodeName,
      'time': event.timeStamp,
      'widget': 'Related Products and Comparison'
    });
  }

  handleCardClick(event) {
    console.log('card clicked...');

    console.log(this.props.handleSelectProduct(this.state.singleRelatedProduct.id, event));
    console.log(this.state.singleRelatedProduct.id);

  }

  render() {
    //if statement determines whether to render default price or default price AND sale price
    let displayPrice = (<>${this.state.singleRelatedProduct.default_price}</>);
    let displayPrice2 = this.state.singleRelatedProduct.default_price;

    if (this.state.singleRelatedProduct.salePrice) {
      displayPrice = (<><del>${this.state.singleRelatedProduct.default_price}</del><em style={{color: 'red'}}> ${this.state.singleRelatedProduct.salePrice}</em> </>);
      displayPrice2 = (<><del>${this.state.singleRelatedProduct.default_price}</del><em style={{color: 'red'}}> ${this.state.singleRelatedProduct.salePrice}</em> </>);

    }

    //only renders currProductToCompare if it is defined
    let currProductName = this.state.currProductToCompare ? this.state.currProductToCompare.name : 'placeholder name';
    let currProductCategory = this.state.currProductToCompare ? this.state.currProductToCompare.category : 'placeholder category';
    let currProductPrice = this.state.currProductToCompare ? this.state.currProductToCompare.default_price : 'placeholder price';

    return (

      <div className="col-md-4">

        <div className="card card-body">
          <div className="overlay">

            <img className="btn btn-primary" className="overlayImage" src='./star.svg' role="button" onClick={this.handleStarClick} data-toggle="modal" data-target="#exampleModal"></img>

          </div>
          {/* EDIT IMAGE SRC BELOW */}

          <img className="img-fluid" src={this.state.imageLink} role="button" onClick={this.handleCardClick} id="setHeight"></img>
          <p style={{textAlign: 'left'}}>{this.state.singleRelatedProduct.category.toUpperCase()}
            <br></br>
            <b>{this.state.singleRelatedProduct.name}</b>
            <br></br>
            {displayPrice}
          </p>
          <Rating
            //id="product-overview-rating"
            name="quarter-rating"
            value={this.props.singleRelatedProduct.averageRating}
            defaultValue={4}
            precision={0.25}
            readOnly
          />
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">ʕ•́ᴥ•̀ʔっComparing...</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Differences between our two amazing products!</p>
                {currProductName} vs {this.state.singleRelatedProduct.name}<br></br>
                {currProductCategory} vs {this.state.singleRelatedProduct.category}<br></br>
                <p>${currProductPrice} vs ${displayPrice2}</p><br></br>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>

      </div>




    );
  }
}


/*

<div className="col-md-4">
        <div className="card card-body">
          <div className="overlay">
            <img className="overlayImage" src='./star.svg' role="button" onClick={this.handleStarClick}></img>
          </div>
          <img className="img-fluid" src='./placeHolderImage.jpg'></img>
          <h3>{this.state.singleRelatedProduct.category}</h3>
          <p>{this.state.singleRelatedProduct.name}</p>
          <p>  ${this.state.singleRelatedProduct.default_price}</p>
        </div>
      </div>



*/


/*

      <Carousel.Item interval={1000}>

        <Card style={{ width: '18rem' }} id="card" className="acard">
          <Card.Img variant='top' src='./placeHolderImage.jpg' />
          <Card.Body id="cardbody">
            <Card.Title id="cardtitle">{this.state.singleRelatedProduct.category}</Card.Title>
            <Card.Text id="cardtext">
              {this.state.singleRelatedProduct.name} <br></br>
              ${this.state.singleRelatedProduct.default_price}
              <br></br>
              star rating here....
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </Carousel.Item>

*/


export default RelatedProduct;
