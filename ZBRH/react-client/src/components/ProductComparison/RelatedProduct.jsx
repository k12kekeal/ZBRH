import React from "react";
import { Card, Carousel, Button } from 'react-bootstrap';
import 'bootstrap';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { singleRelatedProduct: this.props.singleRelatedProduct }

    this.handleStarClick = this.handleStarClick.bind(this);
  }

  componentDidMount() {
    $('#recipeCarousel').carousel({
      pause: true,
      interval: false
    })

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

  handleStarClick() {
    console.log("Star was clicked")
  }

  render() {
    return (


      <div className="col-md-4">
        <div className="card card-body">
          <div className="overlay">
            <img className="btn btn-primary" className="overlayImage" src='./star.svg' role="button" onClick={this.handleStarClick} data-toggle="modal" data-target="#exampleModal"></img>
          </div>
          <img className="img-fluid" src='./placeHolderImage.jpg'></img>
          <h3>{this.state.singleRelatedProduct.category}</h3>
          <p>{this.state.singleRelatedProduct.name}</p>
          <p>  ${this.state.singleRelatedProduct.default_price}</p>
        </div>

        <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                This is where comparison info goes....
      </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>
      </div>



    )
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
