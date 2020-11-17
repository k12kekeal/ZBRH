import React from "react";
import { Card, Carousel, Button } from 'react-bootstrap';
import 'bootstrap';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { singleRelatedProduct: this.props.singleRelatedProduct }
  }

  componentDidMount() {
    $('#recipeCarousel').carousel({
      interval: 10000
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

  render() {
    return (


      <div className="col-md-4">
        <div className="card card-body">
          <img className="img-fluid" src='./placeHolderImage.jpg'></img>
          <h3>{this.state.singleRelatedProduct.category}</h3>
          <p>{this.state.singleRelatedProduct.name}</p>
          <p>  ${this.state.singleRelatedProduct.default_price}</p>
        </div>
      </div>



    )
  }
}


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
